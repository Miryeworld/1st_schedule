const { createClient } = require("@supabase/supabase-js");

async function sendViaResend(to, subject, html) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey) throw new Error("RESEND_API_KEY missing");
  if (!from) throw new Error("EMAIL_FROM missing");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ from, to, subject, html })
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error("Resend error: " + txt);
  }
}

module.exports = async (req, res) => {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SUPABASE_URL || !SERVICE_KEY) throw new Error("Supabase service env missing");

    const admin = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

    const url = new URL(req.url, `https://${req.headers.host}`);
    const mode = url.searchParams.get("mode") || "run";

    // ===== mode=enroll : 큐 적재 =====
    if (mode === "enroll") {
      if (req.method !== "POST") return res.status(405).json({ ok:false, error:"POST only" });
      const body = await readJson(req);

      const { family_id, event_id, lead_minutes = 30 } = body || {};
      if (!family_id || !event_id) return res.status(400).json({ ok:false, error:"family_id/event_id required" });

      const { data: ev, error: evErr } = await admin
        .from("events").select("start_at,title").eq("id", event_id).single();
      if (evErr) return res.status(400).json({ ok:false, error: evErr.message });

      const runAt = new Date(new Date(ev.start_at).getTime() - (lead_minutes * 60 * 1000)).toISOString();

      const { data: members, error: memErr } = await admin
        .from("family_members").select("user_id").eq("family_id", family_id);
      if (memErr) return res.status(500).json({ ok:false, error: memErr.message });

      const rows = (members || []).map(m => ({
        family_id,
        user_id: m.user_id,
        event_id,
        run_at: runAt,
        channel: "EMAIL",
        payload: { lead_minutes }
      }));

      const { error: qErr } = await admin.from("notification_queue").insert(rows);
      if (qErr) return res.status(500).json({ ok:false, error: qErr.message });

      return res.json({ ok:true, queued: rows.length, run_at: runAt });
    }

    // ===== mode=run : 큐 실행 =====
    const now = new Date().toISOString();
    const { data: due, error } = await admin
      .from("notification_queue")
      .select("id,family_id,user_id,event_id,run_at,channel,payload,attempts")
      .eq("status", "PENDING")
      .lte("run_at", now)
      .order("run_at", { ascending: true })
      .limit(50);

    if (error) return res.status(500).json({ ok:false, error: error.message });
    if (!due || due.length === 0) return res.json({ ok:true, processed:0 });

    let processed = 0;

    for (const item of due) {
      try {
        // user email
        const userResp = await admin.auth.admin.getUserById(item.user_id);
        const email = userResp?.data?.user?.email;
        if (!email) throw new Error("User email not found");

        // event
        const { data: ev, error: evErr } = await admin
          .from("events")
          .select("title,start_at,location")
          .eq("id", item.event_id)
          .single();
        if (evErr) throw new Error(evErr.message);

        const subject = `⏰ 일정 알림: ${ev.title}`;
        const html = `<div style="font-family:Arial,sans-serif">
          <h3>${ev.title}</h3>
          <p>시작: ${new Date(ev.start_at).toLocaleString("ko-KR")}</p>
          ${ev.location ? `<p>장소: ${ev.location}</p>` : ""}
          <p>웹사이트에서 체크/메모를 확인하세요.</p>
        </div>`;

        // in-app notification
        await admin.from("notifications").insert({
          family_id: item.family_id,
          user_id: item.user_id,
          type: "EVENT_REMINDER",
          title: subject,
          body: `${new Date(ev.start_at).toLocaleString("ko-KR")}${ev.location ? " / " + ev.location : ""}`,
          related_event_id: item.event_id,
          scheduled_for: item.run_at,
          sent_at: now,
          status: "SENT"
        });

        // email
        if (item.channel === "EMAIL") {
          await sendViaResend(email, subject, html);
        }

        // mark sent
        await admin.from("notification_queue")
          .update({ status:"SENT", attempts:(item.attempts||0)+1 })
          .eq("id", item.id);

        processed += 1;
      } catch (e) {
        await admin.from("notification_queue")
          .update({
            status:"FAILED",
            attempts:(item.attempts||0)+1,
            last_error: String(e.message || e)
          })
          .eq("id", item.id);
      }
    }

    return res.json({ ok:true, processed });

  } catch (e) {
    return res.status(500).json({ ok:false, error: String(e.message || e) });
  }
};

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => data += c);
    req.on("end", () => {
      try { resolve(JSON.parse(data || "{}")); }
      catch (e) { reject(e); }
    });
  });
}
