/* Scenes for T17 Vector databases and nearest-neighbour search: SCENES maps scene.id to stage markup. */
const T17_PTS = [[12, 20], [20, 62], [26, 38], [31, 74], [36, 16], [40, 52], [44, 30], [47, 66], [52, 44], [55, 22], [58, 58], [61, 36], [64, 76], [68, 48], [71, 18], [74, 64], [78, 34], [82, 54], [86, 24], [88, 72], [16, 46], [24, 84], [92, 44], [34, 58]];
const T17_Q = [56, 47];
const T17_NN = [8, 10, 13];
const T17_NEAR = [8, 10, 11, 5, 23, 7, 2];
const T17_KEEP = [1, 5, 9, 14, 20];
const t17Plot = (cls) => `<svg class="sc ${cls}" viewBox="0 0 100 92" preserveAspectRatio="xMidYMid meet">
  <circle class="zone" cx="${T17_Q[0]}" cy="${T17_Q[1]}" r="17"/>
  ${T17_PTS.map(([x, y], i) => `<line class="ln${T17_NEAR.includes(i) ? " near" : ""}" x1="${T17_Q[0]}" y1="${T17_Q[1]}" x2="${x}" y2="${y}" style="transition-delay:${(i * 0.04).toFixed(2)}s"/>`).join("")}
  ${T17_PTS.map(([x, y], i) => `<circle class="pt${T17_NN.includes(i) ? " nn" : ""}${T17_NEAR.includes(i) ? " near" : ""}${T17_KEEP.includes(i) ? " keep" : ""}${i === 13 ? " miss" : ""}" cx="${x}" cy="${y}" r="1.8"/>`).join("")}
  ${T17_NN.map(i => `<circle class="ring${i === 13 ? " miss" : ""}" cx="${T17_PTS[i][0]}" cy="${T17_PTS[i][1]}" r="3.6"/>`).join("")}
  <path class="q" d="M${T17_Q[0]},${T17_Q[1] - 3.4} L${T17_Q[0] + 1},${T17_Q[1] - 1} L${T17_Q[0] + 3.4},${T17_Q[1] - 1} L${T17_Q[0] + 1.5},${T17_Q[1] + 0.6} L${T17_Q[0] + 2.2},${T17_Q[1] + 3} L${T17_Q[0]},${T17_Q[1] + 1.6} L${T17_Q[0] - 2.2},${T17_Q[1] + 3} L${T17_Q[0] - 1.5},${T17_Q[1] + 0.6} L${T17_Q[0] - 3.4},${T17_Q[1] - 1} L${T17_Q[0] - 1},${T17_Q[1] - 1} z"/>
</svg>`;
const SCENES = {
  exact: () => `
    ${t17Plot("ex")}
    <div class="side">
      <span class="tagx t0">k = 3 nearest</span>
      <span class="tagx t1">Score every point: 24 of 24</span>
      <span class="tagx t2 ok">Accurate ✓</span><span class="tagx t2b bad">Slow at scale</span>
      <span class="tagx t3">pgvector default: exact, perfect recall</span>
      <span class="tagx t4">Filtered to 5: fast again</span>
    </div>`,
  approx: () => `
    ${t17Plot("ap")}
    <div class="side">
      <span class="tagx t0">Score only likely matches: 7 of 24</span>
      <div class="lat"><div class="lb"><small>Exact</small><span><i class="slow"></i></span></div><div class="lb"><small>Approximate</small><span><i class="fast"></i></span></div></div>
      <span class="tagx t2 bad">Missed one: recall 2 of 3</span>
      <span class="tagx t3">Speed and scale over perfect recall</span>
      <div class="cmp"><div class="col"><small>Before index</small><span>A</span><span>B</span><span>C</span></div><div class="col"><small>After index</small><span>A</span><span>B</span><span class="d">F</span></div></div>
    </div>`,
  hnsw: () => `
    <div class="layers">${[[3, "Layer 2"], [7, "Layer 1"], [14, "Layer 0"]].map(([n, l], i) => `<div class="ly y${i}"><small>${l}</small>${Array.from({ length: n }, (_, j) => `<i style="left:${((j + 0.5) * 100 / n).toFixed(1)}%"></i>`).join("")}</div>`).join("")}<div class="path"><b class="p0"></b><b class="p1"></b><b class="p2"></b></div></div>
    <span class="tagx t1">Fewer elements higher up</span>
    <span class="tagx t2">Logarithmic complexity scaling</span>
    <div class="ivf">${[0, 1, 2, 3, 4, 5].map(i => `<div class="cell c${i}${i === 1 || i === 4 ? " hot" : ""}"><small>List ${i + 1}</small>${Array.from({ length: 5 }, () => "<i></i>").join("")}</div>`).join("")}<span class="qd">Query</span></div>
    <div class="vs"><div class="vr"><b>HNSW</b><span class="good">Better speed-recall</span><span class="cost">Slower builds</span><span class="cost">More memory</span></div><div class="vr"><b>IVFFlat</b><span>Searches closest lists</span></div></div>`,
  tune: () => `
    <div class="dial"><small>hnsw.ef_search</small><b><span class="v40">40</span><span class="v200">200</span></b><em>candidate list size</em></div>
    <div class="bars"><div class="br rc"><small>Recall</small><span><i></i></span></div><div class="br sp"><small>Speed</small><span><i></i></span></div></div>
    <div class="funnel"><div class="fn a"><b>40</b><small>candidates from the index</small></div><i>↓ filter: in stock</i><div class="fn c"><b>3</b><small>results, asked for 10</small></div></div>
    <div class="mnode"><svg viewBox="0 0 60 40">${Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return `<line x1="30" y1="20" x2="${(30 + Math.cos(a) * 17).toFixed(1)}" y2="${(20 + Math.sin(a) * 17).toFixed(1)}"/><circle cx="${(30 + Math.cos(a) * 17).toFixed(1)}" cy="${(20 + Math.sin(a) * 17).toFixed(1)}" r="1.4"/>`; }).join("")}<circle class="hub" cx="30" cy="20" r="2.6"/></svg><b>m = 16</b><small>max connections per layer</small></div>
    <div class="chk">${["Fixed test queries", "Exact search as the answer key", "Change one setting", "Re-check filtered queries"].map(t => `<span class="chipx">${t}</span>`).join("")}</div>
    <span class="tagx t4">Practitioner judgement</span>`
};
const HOOKS = {};
