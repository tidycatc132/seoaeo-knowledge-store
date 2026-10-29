/* Scenes for T22 Learning to rank: SCENES maps scene.id to stage markup. */
const T22_SIG = ["Signal A", "Signal B", "Freshness", "Signal D", "Signal E"];
const t22Mixer = (cls, title, vals) => `<div class="mx ${cls}"><small>${title}</small><div class="sl">${vals.map((v, i) => `<div class="f${i === 2 ? " fr" : ""}"><span><i style="bottom:${v}%"></i></span><em>${T22_SIG[i]}</em></div>`).join("")}</div></div>`;
const SCENES = {
  signals: () => `
    <div class="cloud">${Array.from({ length: 18 }, (_, i) => `<span class="sg" style="--d:${(i * 0.05).toFixed(2)}s">signal</span>`).join("")}</div>
    ${t22Mixer("m1", "Query: latest earthquake news", [50, 40, 92, 55, 45])}
    ${t22Mixer("m2", "Query: define \"seismic\"", [70, 60, 12, 40, 55])}
    <div class="pairx"><span class="u good">URL i · label: good</span><b>vs</b><span class="u">URL j · label: fair</span></div>`,
  pairs: () => `
    <div class="urls"><div class="uc ui"><small>Ui</small><b>Local repair page</b><em>label: good</em><span class="scr">s<sub>i</sub> = 2.1</span><i class="ar up">▲</i></div><div class="uc uj"><small>Uj</small><b>National blog post</b><em>label: fair</em><span class="scr">s<sub>j</sub> = 0.6</span><i class="ar dn">▼</i></div></div>
    <div class="sig"><svg viewBox="0 0 100 50"><line class="ax" x1="5" y1="45" x2="95" y2="45"/><line class="ax" x1="50" y1="45" x2="50" y2="5"/><path class="cv" d="M5,44 C35,44 40,40 50,25 C60,10 65,6 95,6"/><circle class="pt" cx="68" cy="9" r="2"/></svg><b>P(Ui above Uj) ≈ 0.82</b><small>sigmoid of the score gap</small></div>
    <div class="ce"><b>Cross entropy</b><span>learned 0.82 vs label says Ui is better</span></div>
    <div class="rater"><small>Google</small><b>No single rating, or single rater, directly impacts how a page ranks.</b></div>`,
  lambda: () => `
    <div class="stp"><small>NDCG as scores change</small><svg viewBox="0 0 100 50"><line class="ax" x1="5" y1="45" x2="95" y2="45"/><line class="ax" x1="5" y1="45" x2="5" y2="5"/><path class="st2" d="M5,38 H30 V28 H55 V22 H78 V12 H95"/></svg><em>flat, then jumps</em></div>
    <div class="list">${[1, 2, 3, 9, 10].map((n, i) => `<div class="rw r${i}"><b>${n}</b><span></span><i class="ar a${i}"></i></div>`).join("")}<small class="gap">…</small></div>
    <span class="tagx t1">Push ∝ change in NDCG from the swap</span>
    <span class="tagx t2 ok">Very good results</span>
    <div class="trees">${[0, 1, 2, 3].map(i => `<span class="tree">🌲<small>tree ${i + 1}</small></span><i>${i < 3 ? "+" : "="}</i>`).join("")}<b>score</b></div>
    <div class="trophy"><b>LambdaMART = MART + LambdaRank</b><span>Ensemble won Track 1, 2010 Yahoo! Learning To Rank Challenge</span></div>`,
  formula: () => `
    <span class="tagx t0">Flat or discontinuous: hard to optimise</span>
    <div class="nest"><div class="outer"><small>LambdaLoss framework</small><div class="inner">LambdaRank<br><small>a special configuration</small></div></div></div>
    <div class="guide"><small>Google's ranking systems guide</small><b>Covers some of the more notable systems</b></div>
    <div class="pie"><svg viewBox="0 0 42 42"><circle r="16" cx="21" cy="21" fill="none" stroke="#6b7774" stroke-width="10" stroke-dasharray="40 60" pathLength="100"/><circle r="16" cx="21" cy="21" fill="none" stroke="#9aa6a3" stroke-width="10" stroke-dasharray="30 70" stroke-dashoffset="-40" pathLength="100"/><circle r="16" cx="21" cy="21" fill="none" stroke="#c9d1ce" stroke-width="10" stroke-dasharray="30 70" stroke-dashoffset="-70" pathLength="100"/></svg><b class="xx">✕</b><span>"40% links, 30% content, 30% UX"</span></div>
    <div class="vary"><span class="q">news query</span><span class="q">definition query</span><span class="q">local query</span><em>weights vary by query</em></div>
    <span class="tagx t4 warn">Practitioner judgement: study each query</span>`
};
const HOOKS = {};
