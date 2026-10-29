/* Scenes for T16 Vector distance metrics: SCENES maps scene.id to stage markup. */
const SCENES = {
  angle: () => `
    <svg class="pl" viewBox="0 0 160 90">
      <defs><marker id="t16h" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs>
      <g class="grid">${[30, 50, 70, 90].map(x => `<line x1="${x}" y1="8" x2="${x}" y2="80"/>`).join("")}${[20, 40, 60].map(y => `<line x1="20" y1="${y}" x2="100" y2="${y}"/>`).join("")}</g>
      <line class="ax" x1="20" y1="80" x2="100" y2="80"/><line class="ax" x1="20" y1="80" x2="20" y2="8"/>
      <line class="va" x1="20" y1="80" x2="85" y2="50" marker-end="url(#t16h)"/>
      <line class="vb" x1="20" y1="80" x2="55" y2="18" marker-end="url(#t16h)"/>
      <path class="arc" d="M44,69 A26,26 0 0 0 33,57"/>
      <line class="eu" x1="85" y1="50" x2="55" y2="18"/>
      <path class="mh" d="M85,50 L55,50 L55,18"/>
    </svg>
    <div class="side">
      <div class="m m0"><b>Cosine similarity</b><span>standard way to compare documents</span></div>
      <div class="m m1"><b>cos θ</b><span>angle between the vectors</span></div>
      <div class="m m2"><b>Dot product</b><span>cosine's numerator (inner product)</span></div>
      <div class="m m3"><b>Euclidean (L2)</b><span>sqrt(sum((x − y)²))</span></div>
      <div class="m m4"><b>Manhattan (L1)</b><span>sum(|x − y|)</span></div>
    </div>`,
  length: () => `
    <svg class="pl" viewBox="0 0 160 90">
      <defs><marker id="t16k" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs>
      <circle class="uc" cx="20" cy="80" r="30"/>
      <line class="la" x1="20" y1="80" x2="92" y2="44" marker-end="url(#t16k)"/>
      <line class="sa" x1="20" y1="80" x2="44" y2="66" marker-end="url(#t16k)"/>
      <line class="gap" x1="92" y1="44" x2="44" y2="66"/>
      <line class="ua" x1="20" y1="80" x2="46.8" y2="66.6" marker-end="url(#t16k)"/>
      <line class="pop" x1="20" y1="80" x2="62" y2="12" marker-end="url(#t16k)"/>
    </svg>
    <div class="side">
      <div class="m m0"><b>Same topic, big gap</b><span>one document is much longer</span></div>
      <div class="m m1"><b>Cosine</b><span>length-normalizes: only the angle counts</span></div>
      <div class="m m2"><b>Dot product</b><span>grows with vector length</span></div>
      <div class="m m3"><b>Popular item</b><span>long vector can skew results</span></div>
      <div class="m m4"><b>Normalized</b><span><i>Euclidean</i><i>cosine</i><i>dot product</i>all proportional</span></div>
    </div>`,
  elastic: () => `
    <div class="opts">${[["l2_norm", "L2 (Euclidean) distance"], ["dot_product", "Unit vectors only: document and query"], ["cosine", "Normalized for you at indexing"], ["max_inner_product", "No normalization required"]].map(([n, d], i) => `<div class="op o${i}"><b>${n}</b><span>${d}</span></div>`).join("")}</div>
    <div class="fm"><div class="f"><small>dot_product _score</small><b>(1 + dot) ÷ 2</b><em>dot 0.6 → 0.8</em></div><div class="f"><small>l2_norm _score</small><b>1 ÷ (1 + dist²)</b><em>dist 1 → 0.5</em></div></div>`,
  pgvec: () => `
    <div class="ops">${[["<->", "L2 distance"], ["<#>", "(negative) inner product"], ["<=>", "cosine distance"], ["<+>", "L1 distance"]].map(([o, d], i) => `<div class="or r${i}"><code>${o}</code><span>${d}</span></div>`).join("")}</div>
    <div class="note">Postgres only supports ascending index scans on operators</div>
    <div class="sort asc"><small>ORDER BY &lt;#&gt; ASC</small>${[["−0.9", "Best match"], ["−0.6", ""], ["−0.2", "Weakest"]].map(([v, l]) => `<div class="sv"><code>${v}</code><span>${l}</span></div>`).join("")}</div>
    <div class="sort desc"><small>ORDER BY &lt;#&gt; DESC</small>${[["−0.2", "Weakest first ✕"], ["−0.6", ""], ["−0.9", "Best match last"]].map(([v, l]) => `<div class="sv"><code>${v}</code><span>${l}</span></div>`).join("")}</div>
    <div class="chk">${["Model's documented metric", "Normalized vectors?", "Sort direction", "Score formula"].map(t => `<span class="chipx">${t}</span>`).join("")}</div>
    <span class="tagx t4">Practitioner judgement</span>`
};
const HOOKS = {};
