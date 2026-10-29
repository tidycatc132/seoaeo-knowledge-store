/* Scenes for T19 Learned sparse retrieval: SCENES maps scene.id to stage markup. */
const T19_TERMS = [["battery", 55, ""], ["powered", 40, ""], ["driver", 60, " bo"], ["drill", 45, " nw"], ["cordless", 38, " nw"], ["tool", 25, " nw"]];
const SCENES = {
  mismatch: () => `
    <div class="pros"><span class="chipx">Exact term matching</span><span class="chipx">Fast inverted index</span></div>
    <div class="pair"><div class="qc"><small>Search</small><b>cordless drill</b></div><span class="x">✕</span><div class="pg2"><small>Best page</small><b>battery-powered driver</b></div></div>
    <div class="dense"><div class="dr"><span>cordless drill → battery-powered driver</span><b class="y">✓</b></div><div class="dr"><span>RX-4400 → RX-4400 manual</span><b class="n">✕</b></div><small>Dense: meaning yes, exact terms not always</small></div>
    <div class="pros p2"><span class="chipx g">Inverted index efficiency</span><span class="chipx g">Interpretable terms</span></div>
    <div class="name"><b>SPLADE</b><span>Sparse Lexical and Expansion model</span></div>`,
  expand: () => `
    <div class="doc"><small>Document</small><p>Battery-powered driver with two speeds.</p></div>
    <div class="terms">${T19_TERMS.map(([t, w, c], i) => `<div class="tm r${i}${c}"><b>${t}</b><span><i style="--w:${w}%"></i></span></div>`).join("")}</div>
    <span class="tagx t1 ok">New terms: fights vocabulary mismatch</span>
    <span class="tagx t2">Important terms boosted</span>
    <span class="tagx t3">Log-saturation: no term dominates</span>
    <div class="vocab"><small>Vocabulary (most slots empty)</small><div class="slots">${Array.from({ length: 40 }, (_, i) => `<i class="${[3, 9, 14, 21, 27, 33].includes(i) ? "on" : ""}"></i>`).join("")}</div><b>Sparse → fits an inverted index</b></div>`,
  elser: () => `
    <div class="flow"><div class="tx"><small>Passage</small><p>Our return window is 30 days from delivery.</p></div><i>→</i><div class="mdl">ELSER</div><i>→</i>
      <div class="out"><small>Weighted terms (illustrative)</small>${[["return", 2.1], ["refund", 1.7], ["days", 1.2], ["policy", 0.9], ["delivery", 0.8]].map(([t, w]) => `<div class="ow"><span>${t}</span><b>${w}</b></div>`).join("")}</div></div>
    <span class="tagx t3 warn">Not synonyms: learned associations</span>
    <div class="ruler"><small>A long page, in tokens</small><div class="bar"><span class="win">first 512 tokens encoded</span><span class="rest">not encoded</span></div><div class="lab"><b>0</b><b>512</b><b>2,000</b></div><em>Recommended for English</em></div>`,
  choose: () => `
    <div class="cards">
      <div class="cd c0"><small>Research paper</small><b>SPLADE</b><span>Competitive with dense and sparse methods</span></div>
      <div class="cd c1"><small>Elastic docs</small><b>ELSER</b><span>No fine-tuning on your data</span></div>
      <div class="cd c2"><small>Vendor term</small><b>BM42</b><span>Doesn't outperform other vendors' BM25</span><em class="stamp">Experimental</em></div>
    </div>
    <div class="base"><b>BM25</b><span>Robust baseline: keep it in every test</span></div>`
};
const HOOKS = {};
