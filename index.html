<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Kids Schedule</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0;background:#f6f7fb}
    header{background:#fff;border-bottom:1px solid #e6e8ef;padding:14px 16px;display:flex;gap:12px;align-items:center}
    header h1{font-size:16px;margin:0}
    main{max-width:980px;margin:0 auto;padding:16px}
    .card{background:#fff;border:1px solid #e6e8ef;border-radius:12px;padding:14px;margin:12px 0}
    .row{display:flex;gap:10px;flex-wrap:wrap}
    input,select,textarea,button{font:inherit}
    input,select,textarea{padding:10px;border:1px solid #d8dbe6;border-radius:10px;background:#fff}
    button{padding:10px 12px;border:0;border-radius:10px;background:#1f6feb;color:#fff;cursor:pointer}
    button.secondary{background:#2b2f3a}
    button.ghost{background:#fff;color:#1f6feb;border:1px solid #d8dbe6}
    small{color:#667085}
    .pill{display:inline-block;padding:4px 8px;border-radius:999px;background:#eef2ff;color:#3730a3;font-size:12px}
    .muted{color:#6b7280}
    .list{margin:0;padding:0;list-style:none}
    .list li{padding:10px 0;border-bottom:1px solid #eef0f6}
    .list li:last-child{border-bottom:0}
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    @media (max-width:820px){.grid2{grid-template-columns:1fr}}
    .danger{background:#ef4444}
  </style>
</head>
<body>
<header>
  <h1>Kids Schedule</h1>
  <span id="userBadge" class="pill" style="display:none"></span>
  <span style="flex:1"></span>
  <button id="btnLogout" class="ghost" style="display:none">로그아웃</button>
</header>

<main>
  <div id="viewLogin" class="card" style="display:none">
    <h2 style="margin-top:0">로그인</h2>
    <p class="muted">이메일로 매직링크를 보내드립니다.</p>
    <div class="row">
      <input id="email" type="email" placeholder="you@email.com" style="min-width:240px" />
      <button id="btnSendLink">로그인 링크 받기</button>
    </div>
    <p><small>메일함에서 링크를 클릭하면 자동 로그인됩니다.</small></p>
  </div>

  <div id="viewApp" style="display:none">
    <div class="grid2">
      <div class="card">
        <h2 style="margin-top:0">가족/권한</h2>
        <div id="familyBox"></div>
        <hr style="border:0;border-top:1px solid #eef0f6;margin:12px 0"/>
        <div id="joinBox"></div>
      </div>

      <div class="card">
        <h2 style="margin-top:0">알림(인앱)</h2>
        <button id="btnLoadNotifs" class="secondary">알림 새로고침</button>
        <ul id="notifList" class="list" style="margin-top:10px"></ul>
      </div>
    </div>

    <div class="grid2">
      <div class="card">
        <h2 style="margin-top:0">자녀</h2>
        <div class="row">
          <input id="childName" placeholder="자녀 이름(예: 첫째)" />
          <button id="btnAddChild">자녀 추가</button>
        </div>
        <ul id="childList" class="list" style="margin-top:10px"></ul>
      </div>

      <div class="card">
        <h2 style="margin-top:0">일정 생성(부모만)</h2>
        <p class="muted" style="margin-top:-6px">하원선생님은 일정 생성/수정 권한이 없습니다.</p>
        <div class="row">
          <select id="eventChild" style="min-width:160px"></select>
          <input id="eventTitle" placeholder="일정명(예: 하원)" style="min-width:220px" />
        </div>
        <div class="row" style="margin-top:8px">
          <input id="eventStart" type="datetime-local" />
          <input id="eventEnd" type="datetime-local" />
        </div>
        <div class="row" style="margin-top:8px">
          <input id="eventLocation" placeholder="장소(선택)" style="min-width:220px" />
          <input id="leadMin" type="number" value="30" min="0" style="width:110px" />
          <small style="align-self:center">분 전 이메일 알림</small>
        </div>
        <div class="row" style="margin-top:10px">
          <button id="btnCreateEvent">일정 생성</button>
        </div>
        <p><small>알림은 일정 생성 시 자동으로 “구성원 전체”에게 큐에 적재됩니다.</small></p>
      </div>
    </div>

    <div class="card">
      <h2 style="margin-top:0">오늘 일정</h2>
      <button id="btnLoadToday" class="secondary">오늘 일정 새로고침</button>
      <ul id="eventList" class="list" style="margin-top:10px"></ul>
    </div>

    <div id="viewEventDetail" class="card" style="display:none">
      <h2 id="detailTitle" style="margin-top:0">일정 상세</h2>
      <p id="detailMeta" class="muted"></p>

      <h3>체크리스트</h3>
      <div id="checkAddBox" class="row" style="margin-bottom:10px">
        <input id="newCheckLabel" placeholder="체크 항목(부모만 추가 가능)" style="min-width:280px" />
        <button id="btnAddCheck">체크항목 추가</button>
      </div>
      <ul id="checkList" class="list"></ul>

      <h3 style="margin-top:16px">메모</h3>
      <div class="row">
        <textarea id="noteBody" rows="2" placeholder="메모 작성" style="min-width:320px"></textarea>
        <button id="btnAddNote">메모 추가</button>
      </div>
      <ul id="noteList" class="list" style="margin-top:10px"></ul>

      <div class="row" style="margin-top:12px">
        <button id="btnCloseDetail" class="ghost">닫기</button>
      </div>
    </div>

  </div>
</main>

<!-- Supabase UMD -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  // ====== 설정 ======
  // 정적 HTML에서는 Vercel env를 JS로 직접 읽을 수 없어서,
  // "Supabase URL/Anon key"는 여기 상수로 넣어야 합니다.
  // (보안상 anon key는 노출돼도 괜찮고, RLS가 보호합니다.)
  const SUPABASE_URL = "PUT_YOUR_SUPABASE_URL_HERE";
  const SUPABASE_ANON_KEY = "PUT_YOUR_SUPABASE_ANON_KEY_HERE";
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ====== 상태 ======
  let session = null;
  let currentFamilyId = null;
  let currentRole = null; // OWNER/ADMIN/CAREGIVER
  let currentEvent = null;

  // ====== 유틸 ======
  const $ = (id) => document.getElementById(id);
  const fmt = (iso) => new Date(iso).toLocaleString("ko-KR");
  const toIsoFromLocal = (value) => {
    // datetime-local은 로컬 기준. ISO로 변환
    const d = new Date(value);
    return d.toISOString();
  };
  function isParentRole() { return currentRole === "OWNER" || currentRole === "ADMIN"; }

  // ====== Auth UI ======
  async function refreshSession() {
    const { data } = await supabase.auth.getSession();
    session = data.session;
    if (!session) {
      $("viewLogin").style.display = "block";
      $("viewApp").style.display = "none";
      $("btnLogout").style.display = "none";
      $("userBadge").style.display = "none";
    } else {
      $("viewLogin").style.display = "none";
      $("viewApp").style.display = "block";
      $("btnLogout").style.display = "inline-block";
      $("userBadge").style.display = "inline-block";
      $("userBadge").textContent = session.user.email;
      await loadMyFamily();
    }
  }

  $("btnSendLink").onclick = async () => {
    const email = $("email").value.trim();
    if (!email) return alert("이메일을 입력하세요.");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin }
    });
    if (error) return alert(error.message);
    alert("로그인 링크를 이메일로 보냈습니다.");
  };

  $("btnLogout").onclick = async () => {
    await supabase.auth.signOut();
    currentFamilyId = null; currentRole = null;
    await refreshSession();
  };

  supabase.auth.onAuthStateChange(async () => {
    await refreshSession();
  });

  // ====== 가족/권한 ======
  async function loadMyFamily() {
    // 현재 유저가 속한 family_members 조회
    const { data: rows, error } = await supabase
      .from("family_members")
      .select("family_id, role")
      .limit(1);

    if (error) { console.error(error); return alert(error.message); }

    if (!rows || rows.length === 0) {
      // 가족 없음 → 생성 UI
      currentFamilyId = null; currentRole = null;
      renderFamilySetup();
    } else {
      currentFamilyId = rows[0].family_id;
      currentRole = rows[0].role;
      renderFamilyInfo();
      await loadChildren();
      await loadToday();
      await loadNotifs();
    }
  }

  function renderFamilySetup() {
    $("familyBox").innerHTML = `
      <p class="muted">아직 가족 그룹이 없습니다.</p>
      <div class="row">
        <input id="familyName" placeholder="가족 그룹 이름(예: 우리집)" />
        <button id="btnCreateFamily">가족 생성</button>
      </div>
      <p><small>가족 생성 시 본인은 OWNER로 등록됩니다.</small></p>
    `;
    $("joinBox").innerHTML = `
      <h3>초대코드로 참여</h3>
      <p class="muted">부모가 공유한 가족 ID(초대코드)를 입력하세요.</p>
      <div class="row">
        <input id="joinFamilyId" placeholder="가족 ID(UUID)" style="min-width:280px"/>
        <select id="joinRole">
          <option value="ADMIN">아빠(ADMIN)</option>
          <option value="CAREGIVER">하원선생님(CAREGIVER)</option>
        </select>
        <button id="btnJoinFamily">참여</button>
      </div>
      <p><small>초기 MVP는 “가족 ID를 공유”하는 방식입니다. (이후 이메일 초대로 고도화 가능)</small></p>
    `;

    $("btnCreateFamily").onclick = async () => {
      const name = document.getElementById("familyName").value.trim() || "우리 가족";
      // 1) family 생성
      const { data: fam, error: e1 } = await supabase.from("families").insert({ name }).select().single();
      if (e1) return alert(e1.message);

      // 2) 본인 OWNER 등록 (RLS에서 "첫 등록" 허용)
      const { error: e2 } = await supabase.from("family_members").insert({
        family_id: fam.id,
        user_id: session.user.id,
        role: "OWNER"
      });
      if (e2) return alert(e2.message);

      // 3) 알림 기본설정
      await supabase.from("notification_prefs").insert({
        family_id: fam.id,
        user_id: session.user.id,
        channel_email: true,
        channel_inapp: true,
        default_lead_minutes: 30
      });

      alert(`가족 생성 완료!\n가족 ID(초대코드): ${fam.id}\n아빠/선생님에게 이 값을 공유하세요.`);
      await loadMyFamily();
    };

    $("btnJoinFamily").onclick = async () => {
      const fid = document.getElementById("joinFamilyId").value.trim();
      const role = document.getElementById("joinRole").value;
      if (!fid) return alert("가족 ID를 입력하세요.");

      const { error } = await supabase.from("family_members").insert({
        family_id: fid,
        user_id: session.user.id,
        role
      });
      if (error) return alert(error.message);

      await supabase.from("notification_prefs").insert({
        family_id: fid,
        user_id: session.user.id,
        channel_email: true,
        channel_inapp: true,
        default_lead_minutes: 30
      });

      alert("가족 참여 완료!");
      await loadMyFamily();
    };
  }

  async function renderFamilyInfo() {
    const { data: fam } = await supabase.from("families").select("id,name").eq("id", currentFamilyId).single();
    $("familyBox").innerHTML = `
      <div class="row" style="align-items:center">
        <div>
          <div><b>${fam?.name ?? "가족"}</b> <span class="pill">${currentRole}</span></div>
          <div class="muted"><small>가족 ID(초대코드): ${currentFamilyId}</small></div>
        </div>
      </div>
    `;

    $("joinBox").innerHTML = `
      <h3>참여자 추가 안내</h3>
      <p class="muted">아빠/하원선생님은 위 가족 ID로 로그인 후 “초대코드로 참여”를 사용합니다.</p>
    `;
  }

  // ====== 자녀 ======
  async function loadChildren() {
    const { data, error } = await supabase.from("children").select("*").eq("family_id", currentFamilyId).order("created_at");
    if (error) return alert(error.message);

    $("childList").innerHTML = (data || []).map(c => `<li><b>${c.name}</b> <small class="muted">${c.id}</small></li>`).join("");
    $("eventChild").innerHTML = (data || []).map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  }

  $("btnAddChild").onclick = async () => {
    if (!isParentRole()) return alert("자녀 추가는 부모(OWNER/ADMIN)만 가능합니다.");
    const name = $("childName").value.trim();
    if (!name) return alert("자녀 이름을 입력하세요.");
    const { error } = await supabase.from("children").insert({ family_id: currentFamilyId, name });
    if (error) return alert(error.message);
    $("childName").value = "";
    await loadChildren();
  };

  // ====== 일정 생성 + 알림큐 적재 ======
  $("btnCreateEvent").onclick = async () => {
    if (!isParentRole()) return alert("일정 생성은 부모(OWNER/ADMIN)만 가능합니다.");
    const child_id = $("eventChild").value;
    const title = $("eventTitle").value.trim();
    const startLocal = $("eventStart").value;
    const endLocal = $("eventEnd").value;
    const location = $("eventLocation").value.trim();
    const lead = parseInt($("leadMin").value || "30", 10);

    if (!child_id || !title || !startLocal || !endLocal) return alert("필수값(자녀/제목/시작/종료)을 입력하세요.");
    const start_at = toIsoFromLocal(startLocal);
    const end_at = toIsoFromLocal(endLocal);

    // 1) events insert
    const { data: ev, error: e1 } = await supabase.from("events").insert({
      family_id: currentFamilyId,
      child_id,
      title,
      start_at,
      end_at,
      location,
      created_by: session.user.id
    }).select().single();
    if (e1) return alert(e1.message);

    // 2) 가족 구성원 목록(서비스키 없이도 RLS로 select 가능)
    const { data: members, error: e2 } = await supabase.from("family_members").select("user_id").eq("family_id", currentFamilyId);
    if (e2) return alert(e2.message);

    // 3) 큐 적재는 클라이언트에서 하면 RLS로 막혀야 정상(보안).
    //    그래서 "큐 적재"는 서버리스가 해야 합니다.
    //    MVP에서는 서버리스 엔드포인트를 호출하여 큐 적재합니다.
    const res = await fetch("/api/cron-notifications?mode=enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        family_id: currentFamilyId,
        event_id: ev.id,
        lead_minutes: lead
      })
    });
    const out = await res.json();
    if (!out.ok) return alert("알림 등록 실패: " + out.error);

    alert("일정 생성 + 알림 등록 완료");
    $("eventTitle").value = "";
    $("eventLocation").value = "";
    await loadToday();
  };

  // ====== 오늘 일정 ======
  function todayRangeISO() {
    // KST 기준 오늘 00:00~23:59
    const now = new Date();
    const kst = new Date(now.getTime() + 9*60*60*1000);
    kst.setUTCHours(0,0,0,0);
    const start = new Date(kst.getTime() - 9*60*60*1000).toISOString();
    const kst2 = new Date(now.getTime() + 9*60*60*1000);
    kst2.setUTCHours(23,59,59,999);
    const end = new Date(kst2.getTime() - 9*60*60*1000).toISOString();
    return { start, end };
  }

  async function loadToday() {
    const { start, end } = todayRangeISO();
    const { data, error } = await supabase
      .from("events")
      .select("id,title,start_at,end_at,location,child_id")
      .eq("family_id", currentFamilyId)
      .gte("start_at", start)
      .lte("start_at", end)
      .order("start_at", { ascending: true });

    if (error) return alert(error.message);

    $("eventList").innerHTML = (data || []).map(e => `
      <li>
        <div class="row" style="justify-content:space-between;align-items:center">
          <div>
            <b>${e.title}</b>
            <div class="muted"><small>${fmt(e.start_at)} ~ ${fmt(e.end_at)} ${e.location ? " / " + e.location : ""}</small></div>
          </div>
          <button class="ghost" onclick="openDetail('${e.id}')">상세</button>
        </div>
      </li>
    `).join("") || `<li class="muted">오늘 일정이 없습니다.</li>`;
  }

  $("btnLoadToday").onclick = loadToday;

  // ====== 상세: 체크/메모 ======
  window.openDetail = async (eventId) => {
    const { data: ev, error } = await supabase.from("events").select("*").eq("id", eventId).single();
    if (error) return alert(error.message);
    currentEvent = ev;

    $("detailTitle").textContent = ev.title;
    $("detailMeta").textContent = `${fmt(ev.start_at)} ~ ${fmt(ev.end_at)} ${ev.location ? " / " + ev.location : ""}`;

    // 부모만 체크항목 추가 가능
    $("checkAddBox").style.display = isParentRole() ? "flex" : "none";

    await loadChecks();
    await loadNotes();

    $("viewEventDetail").style.display = "block";
    window.scrollTo({ top: $("viewEventDetail").offsetTop - 10, behavior: "smooth" });
  };

  $("btnCloseDetail").onclick = () => {
    $("viewEventDetail").style.display = "none";
    currentEvent = null;
  };

  async function loadChecks() {
    const { data: items, error: e1 } = await supabase
      .from("checklist_items")
      .select("id,label,sort_order")
      .eq("event_id", currentEvent.id)
      .order("sort_order");
    if (e1) return alert(e1.message);

    const ids = (items||[]).map(x=>x.id);
    let logs = [];
    if (ids.length) {
      const { data: l, error: e2 } = await supabase
        .from("checklist_logs")
        .select("checklist_item_id,action,acted_at")
        .in("checklist_item_id", ids)
        .order("acted_at",{ascending:false});
      if (e2) return alert(e2.message);
      logs = l || [];
    }

    const latest = new Map();
    for (const l of logs) if (!latest.has(l.checklist_item_id)) latest.set(l.checklist_item_id, l);

    $("checkList").innerHTML = (items||[]).map(it => {
      const st = latest.get(it.id);
      const checked = st?.action === "CHECK";
      return `
        <li>
          <div class="row" style="justify-content:space-between;align-items:center">
            <div>
              ${checked ? "✅" : "⬜"} <b>${it.label}</b>
              ${st ? `<div class="muted"><small>${checked ? "체크" : "해제"}: ${fmt(st.acted_at)}</small></div>` : `<div class="muted"><small>미체크</small></div>`}
            </div>
            <button class="ghost" onclick="toggleCheck('${it.id}', ${checked})">${checked ? "해제" : "체크"}</button>
          </div>
        </li>
      `;
    }).join("") || `<li class="muted">체크 항목이 없습니다.</li>`;
  }

  window.toggleCheck = async (itemId, isChecked) => {
    const action = isChecked ? "UNCHECK" : "CHECK";
    const { error } = await supabase.from("checklist_logs").insert({
      checklist_item_id: itemId,
      family_id: currentFamilyId,
      user_id: session.user.id,
      action
    });
    if (error) return alert(error.message);
    await loadChecks();
  };

  $("btnAddCheck").onclick = async () => {
    if (!isParentRole()) return alert("체크항목 추가는 부모만 가능합니다.");
    const label = $("newCheckLabel").value.trim();
    if (!label) return alert("체크 항목을 입력하세요.");
    const { error } = await supabase.from("checklist_items").insert({
      event_id: currentEvent.id,
      label,
      sort_order: 0
    });
    if (error) return alert(error.message);
    $("newCheckLabel").value = "";
    await loadChecks();
  };

  async function loadNotes() {
    const { data, error } = await supabase
      .from("event_notes")
      .select("body,created_at,user_id")
      .eq("event_id", currentEvent.id)
      .order("created_at", { ascending: false });
    if (error) return alert(error.message);

    $("noteList").innerHTML = (data||[]).map(n => `
      <li>
        <div>${n.body}</div>
        <div class="muted"><small>${fmt(n.created_at)}</small></div>
      </li>
    `).join("") || `<li class="muted">메모가 없습니다.</li>`;
  }

  $("btnAddNote").onclick = async () => {
    const body = $("noteBody").value.trim();
    if (!body) return alert("메모를 입력하세요.");
    const { error } = await supabase.from("event_notes").insert({
      event_id: currentEvent.id,
      family_id: currentFamilyId,
      user_id: session.user.id,
      body
    });
    if (error) return alert(error.message);
    $("noteBody").value = "";
    await loadNotes();
  };

  // ====== 인앱 알림 ======
  async function loadNotifs() {
    const { data, error } = await supabase
      .from("notifications")
      .select("id,title,body,created_at,read_at")
      .order("created_at", { ascending:false })
      .limit(30);
    if (error) return alert(error.message);

    $("notifList").innerHTML = (data||[]).map(n => `
      <li style="opacity:${n.read_at ? 0.55 : 1}">
        <div><b>${n.title}</b></div>
        <div class="muted"><small>${n.body}</small></div>
        <div class="muted"><small>${fmt(n.created_at)}</small></div>
        ${n.read_at ? "" : `<button class="ghost" onclick="markRead('${n.id}')">읽음</button>`}
      </li>
    `).join("") || `<li class="muted">알림이 없습니다.</li>`;
  }
  $("btnLoadNotifs").onclick = loadNotifs;

  window.markRead = async (id) => {
    const { error } = await supabase.from("notifications").update({ read_at: new Date().toISOString() }).eq("id", id);
    if (error) return alert(error.message);
    await loadNotifs();
  };

  // ====== 초기 실행 ======
  refreshSession();
</script>
</body>
</html>
