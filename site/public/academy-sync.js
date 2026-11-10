/* WISE Academy progress sync.
   Runs before the course or hub script. It seeds this browser's saved progress from the
   signed-in person's record (merged with anything already saved here), then sends every
   change the page saves back to the server, plus one row per quiz submission. */
(function () {
  var A = window.__ACADEMY__;
  if (!A) return;
  var HUB_KEY = "wise-academy-hub-v1";
  var keyFor = function (id) { return id === "HUB" ? HUB_KEY : id.toLowerCase() + "-course-v1"; };
  var idFor = function (key) {
    if (key === HUB_KEY) return "HUB";
    var m = /^(t\d+)-course-v1$/.exec(key);
    return m ? m[1].toUpperCase() : null;
  };
  var read = function (key) { try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; } };
  var rawSet = Storage.prototype.setItem;

  function merge(server, local) {
    if (!server) return local;
    if (!local) return server;
    var out = Object.assign({}, local, server);
    out.done = Object.assign({}, local.done, server.done);
    Object.keys(local.done || {}).forEach(function (k) { if (local.done[k]) out.done[k] = true; });
    if (server.helpful || local.helpful) out.helpful = Object.assign({}, server.helpful, local.helpful);
    if ("quiz" in server || "quiz" in local) {
      var a = server.quiz, b = local.quiz;
      out.quiz = !a ? b : !b ? a : { pct: Math.max(a.pct, b.pct), pass: !!(a.pass || b.pass) };
    }
    if ("badge" in server || "badge" in local) out.badge = server.badge || local.badge || null;
    return out;
  }

  var timers = {};
  function send(body, beacon) {
    var data = JSON.stringify(body);
    if (beacon && navigator.sendBeacon) { navigator.sendBeacon("/api/progress", new Blob([data], { type: "application/json" })); return; }
    fetch("/api/progress", { method: "POST", headers: { "content-type": "application/json" }, body: data, keepalive: true, credentials: "same-origin" })
      .then(function (r) { if (r.status === 401) location.href = "/login/?next=" + encodeURIComponent(location.pathname); })
      .catch(function () {});
  }
  function queue(id) {
    clearTimeout(timers[id]);
    timers[id] = setTimeout(function () { delete timers[id]; var s = read(keyFor(id)); if (s) send({ course: id, state: s }); }, 600);
  }
  addEventListener("pagehide", function () {
    Object.keys(timers).forEach(function (id) { clearTimeout(timers[id]); var s = read(keyFor(id)); if (s) send({ course: id, state: s }, true); });
    timers = {};
  });

  // Seed: server record merged with this browser's copy; push back anything only this browser had.
  Object.keys(A.progress || {}).forEach(function (id) {
    var key = keyFor(id), local = read(key), server = A.progress[id], merged = merge(server, local);
    if (!merged) return;
    try { rawSet.call(localStorage, key, JSON.stringify(merged)); } catch (e) {}
    if (JSON.stringify(merged) !== JSON.stringify(server)) queue(id);
  });

  // Report every save the page makes.
  Storage.prototype.setItem = function (key, value) {
    rawSet.call(this, key, value);
    if (this === localStorage) { var id = idFor(key); if (id) queue(id); }
  };

  // Log each quiz submission (the course script grades it; this records the picks and score).
  if (/^T\d+$/.test(A.page)) {
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("#qSubmit");
      if (!b || b.disabled) return;
      setTimeout(function () {
        try {
          /* global QUIZ, Q, LESSON */
          var right = QUIZ.filter(function (it) { return Q.picks[it.item_id] === it.answer; }).length;
          var score = Math.round(right / QUIZ.length * 100);
          send({ attempt: { course: A.page, picks: Q.picks, score: score, passed: right / QUIZ.length >= LESSON.quiz.pass_mark } });
        } catch (err) {}
      }, 0);
    }, true);
  }
})();
