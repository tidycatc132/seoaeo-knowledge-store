/* Scenes for T2 The vector space model: SCENES maps scene.id to stage markup. */
const T2_TERMS = ["boiler", "repair", "service", "Leeds", "roof", "tap"];
const T2_ROWS = [["Page A", [2, 1, 1, 2, 0, 0]], ["Page B", [3, 2, 0, 1, 0, 0]], ["Page C", [0, 1, 0, 1, 3, 0]]];
const SCENES = {
  bag: () => `
    <div class="sent">“Boiler repair in Leeds. Boiler service in Leeds.”</div>
    <div class="bagw">${[["boiler", 2], ["repair", 1], ["service", 1], ["Leeds", 2], ["in", 2]].map(([w, n]) => `<span class="chipw">${w} <b>×${n}</b></span>`).join("")}</div>
    <span class="tagx t0">Order ignored, counts kept</span>
    <div class="vec">
      <span class="h"></span>${T2_TERMS.map(t => `<span class="h">${t}</span>`).join("")}<span class="h">…</span>
      ${T2_ROWS.map(([n, v], i) => `<span class="rn r${i}">${n}</span>${v.map(x => `<span class="c r${i}${x ? " nz" : ""}">${x}</span>`).join("")}<span class="c r${i}">0…</span>`).join("")}
    </div>
    <span class="tagx t1">One component per dictionary term</span>
    <svg class="plot" viewBox="0 0 160 90" aria-hidden="true">
      <line x1="20" y1="80" x2="150" y2="80"/><line x1="20" y1="80" x2="20" y2="8"/>
      <circle cx="104" cy="30" r="3.2" class="pa"/><circle cx="114" cy="36" r="3.2" class="pb"/><circle cx="48" cy="22" r="3.2" class="pc"/>
      <text x="96" y="22">A</text><text x="120" y="44">B</text><text x="40" y="16">C</text>
    </svg>
    <span class="tagx t3">A and B point close together: similar topics</span>`,
  tfidf: () => `
    <div class="hdr"><span>Term on page A</span><span>Uses on page</span><span>Pages using it</span><span>tf-idf weight</span></div>
    ${[["combi boiler", 6, "2 of 50", 92, "hi"], ["repair", 3, "12 of 50", 48, "md"], ["Leeds", 1, "20 of 50", 22, "md2"], ["plumber", 4, "49 of 50", 6, "lo"], ["the", 30, "50 of 50", 2, "lo2"]].map(([t, tf, df, w, k]) => `
    <div class="trow ${k}"><b>${t}</b><span class="tf">${tf}</span><span class="df">${df}</span><span class="wb"><i style="width:${w}%"></i></span></div>`).join("")}
    <span class="tagx k1">Rare term: high idf. Frequent term: low idf</span>
    <span class="tagx k2">Many times, few pages: highest</span>
    <span class="tagx k4">On virtually every page: lowest</span>`,
  cosine: () => `
    <svg class="ax" viewBox="0 0 160 90" aria-hidden="true">
      <defs><marker id="ch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
      <line class="axl" x1="14" y1="82" x2="96" y2="82"/><line class="axl" x1="14" y1="82" x2="14" y2="6"/>
      <line class="va" x1="14" y1="82" x2="40" y2="62" marker-end="url(#ch)"/>
      <line class="vb" x1="14" y1="82" x2="86" y2="27" marker-end="url(#ch)"/>
      <line class="vbn" x1="14" y1="82" x2="40.5" y2="61.8" marker-end="url(#ch)"/>
      <line class="vc" x1="14" y1="82" x2="22" y2="44" marker-end="url(#ch)"/>
      <line class="gap" x1="40" y1="62" x2="86" y2="27"/>
      <path class="arc" d="M30 82 A16 16 0 0 0 26.7 72.2"/>
      <text class="la" x="42" y="70">A (short page)</text><text class="lb" x="80" y="22">B (long page)</text><text class="lc" x="24" y="40">C</text>
    </svg>
    <div class="frm"><span class="num">A · B</span><span class="ln"></span><span class="den">|A| × |B|</span><em>cos θ =</em></div>
    <span class="tagx c0">Same topic, big vector difference</span>
    <span class="tagx c1">Cosine: compare direction, not length</span>
    <span class="tagx c2">Dot product (inner product)</span>
    <span class="tagx c3">Length-normalize</span>
    <span class="tagx c4">Small angle: similar. Wide angle (C): less similar</span>`,
  embed: () => `
    <div class="qbox"><small>Query</small><b>leaking tap repair</b></div>
    <div class="res">
      <div class="rw w1"><span>Tap repair guide</span><em class="miss">no “leaking”</em><span class="sb"><i style="width:88%"></i></span></div>
      <div class="rw w2"><span>Leaking tap: repair or replace?</span><em></em><span class="sb"><i style="width:84%"></i></span></div>
      <div class="rw w3"><span>Kitchen tap styles</span><em></em><span class="sb"><i style="width:31%"></i></span></div>
    </div>
    <span class="tagx e0">The query is a vector in the same space</span>
    <span class="tagx e2">High score without every query term</span>
    <div class="strip sparse"><small>Term vector</small><span>${"0 0 0 1 0 0 0 0 2 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0".split(" ").map(x => `<i class="${x !== "0" ? "nz" : ""}">${x}</i>`).join("")}</span></div>
    <div class="strip dense"><small>Embedding</small><span>${["0.21", "-0.48", "0.07", "0.66", "-0.12", "0.35", "0.18", "-0.29"].map(x => `<i>${x}</i>`).join("")}</span></div>
    <span class="tagx e3">Lower-dimensional, dense</span>
    <div class="pairs"><span class="chipq">leaking tap</span><span class="near">≈</span><span class="chipq">dripping faucet</span></div>
    <span class="tagx e4">Captures meaning, compared by cosine</span>`
};
const HOOKS = {};
