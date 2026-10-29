/* Scenes for T48 Search intent: SCENES maps scene.id to stage markup; HOOKS run per beat for typed or timed effects. */
const SCENES = {
  sort: () => `
    <div class="el head">What does the searcher want to do?</div>
    <div class="lane ln1"><h5>Navigational</h5><p>reach a particular site</p></div>
    <div class="lane ln2"><h5>Informational</h5><p>acquire information</p></div>
    <div class="lane ln3"><h5>Transactional</h5><p>a web-mediated activity</p></div>
    <span class="pill q1">Greyhound Bus</span><span class="pill q2">San Francisco</span><span class="pill q3">shopping</span><span class="pill q4">cars</span><span class="pill q5">web-mediated services</span>
    <span class="el tgt">→ greyhound.com</span>
    <div class="el extra">+ Commercial investigation<small>a practitioner label, not one of Broder's classes</small></div>`,
  mercury: () => `
    <div class="el bar">${ICON.search}<span class="typed"></span><span class="caret"></span></div>
    <div class="el note">More than one meaning</div>
    <div class="el m m1"><span class="planet"></span>the planet</div>
    <div class="el m m2"><span class="elem">Hg</span>the chemical element</div>
    <div class="el serve"><span>Dominant</span><span>Common</span><span>Reasonable minor</span></div>
    <div class="el rater">${ICON.clip}<span>Rater guidelines guide human raters. No single rating directly changes how a page ranks.</span></div>`,
  stamp: () => `
    <div class="el qc"><span class="lbl">Keyword tool (hypothetical)</span><span class="qq">mercury</span><span class="tool">Intent label</span></div>
    <div class="el stamp"><span class="t">Informational · 100%</span><span class="h">Hypothesis</span></div>
    <div class="el quote">“at best an inexact science, but usually a wild guess”<small>Andrei Broder</small></div>
    <div class="el cert">No assumption that intent can be inferred with any certitude from the query.</div>
    <div class="el serp"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="el lens"></div>
    <div class="el ok">✓ Check what ranks</div>`,
  spell: () => `
    <div class="el want"></div><div class="el grams"></div><div class="el word"></div><div class="el cands"></div>
    <div class="el counter"></div>
    <div class="el steps"><span>1 · Edit distance</span><span>2 · K-gram overlap</span></div>`
};
const tiles = (w, cls) => [...w].map((c, i) => `<span class="tile ${cls && cls[i] ? cls[i] : ""}">${c}</span>`).join("");
const HOOKS = {
  mercury(stage, n, timers) {
    const t = stage.querySelector(".typed");
    if (n === 0) { t.textContent = ""; const w = "mercury"; [...w].forEach((c, i) => timers.push(setTimeout(() => t.textContent += c, reduce ? 0 : 300 + i * 160))); }
    else t.textContent = "mercury";
  },
  spell(stage, n, timers) {
    const word = stage.querySelector(".word"), want = stage.querySelector(".want"), cnt = stage.querySelector(".counter"), grams = stage.querySelector(".grams"), cands = stage.querySelector(".cands");
    grams.innerHTML = ""; cands.innerHTML = ""; word.style.opacity = 1;
    if (n <= 1) { want.innerHTML = "wanted: <b>carrot</b>"; word.innerHTML = tiles("carot"); cnt.textContent = ""; }
    if (n === 2) { want.innerHTML = "wanted: <b>carrot</b>"; word.innerHTML = tiles("carot"); cnt.textContent = "0 edits";
      timers.push(setTimeout(() => { word.innerHTML = tiles("carrot", { 3: "new" }); cnt.textContent = "1 edit · insert r"; }, reduce ? 0 : 900)); }
    if (n === 3) { want.innerHTML = "edit operations: insert, delete, replace"; word.innerHTML = tiles("cat"); cnt.textContent = "0 edits";
      const tgt = "dog", cur = [..."cat"], cls = {};
      [0, 1, 2].forEach(i => timers.push(setTimeout(() => { cur[i] = tgt[i]; cls[i] = "rep"; word.innerHTML = tiles(cur.join(""), cls); cnt.textContent = `${i + 1} edit${i ? "s" : ""} · replace`; }, reduce ? 0 : 800 + i * 900))); }
    if (n >= 4) { want.innerHTML = "query: <b>bord</b> · shared 2-letter runs"; word.style.opacity = 0; cnt.textContent = "";
      grams.innerHTML = ["bo", "or", "rd"].map((g, i) => `<span class="gram" style="animation-delay:${i * 0.15}s">${g}</span>`).join("");
      const C = [["aboard", "a<mark>bo</mark>a<mark>rd</mark>", 2], ["boardroom", "<mark>bo</mark>a<mark>rd</mark>room", 5], ["border", "<mark>bo</mark><mark>rd</mark>er", 2]];
      cands.innerHTML = C.map(([w, h, d], i) => `<div class="cand" data-w="${w}" style="animation-delay:${0.4 + i * 0.2}s"><span>${h}</span><span class="ed">edit distance ${d}</span></div>`).join("");
      if (n === 5) timers.push(setTimeout(() => { cands.querySelectorAll(".cand").forEach(c => { c.classList.add("show"); c.classList.add(c.dataset.w === "boardroom" ? "drop" : "keep"); }); }, reduce ? 0 : 700)); }
  }
};
