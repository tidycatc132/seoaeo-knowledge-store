/* Scenes for T18 Dense retrieval and bi-encoders: SCENES maps scene.id to stage markup. */
const SCENES = {
  encode: () => `
    <div class="qc"><small>Question</small><p>Who is the <b class="w">bad guy</b> in the story?</p></div>
    <div class="pc"><small>Passage</small><p>The <b class="w">villain</b> of the novel is Count Olaf.</p></div>
    <span class="tagx t1 bad">No shared words: BM25 misses it</span>
    <svg class="sp" viewBox="0 0 100 60"><line class="axl" x1="6" y1="54" x2="96" y2="54"/><line class="axl" x1="6" y1="54" x2="6" y2="4"/>
      ${[[20, 18, "recipe"], [80, 44, "weather"], [30, 46, "invoice"], [84, 12, "goal"]].map(([x, y, t]) => `<circle class="o" cx="${x}" cy="${y}" r="1.6"/><text x="${x + 2.5}" y="${y + 1}">${t}</text>`).join("")}
      <circle class="k a" cx="58" cy="26" r="2.2"/><text class="kt" x="44" y="22">bad guy</text>
      <circle class="k b" cx="63" cy="30" r="2.2"/><text class="kt" x="66" y="36">villain</text>
      <ellipse class="near" cx="60.5" cy="28" rx="9" ry="7"/></svg>
    <span class="tagx t3 ok">Close vectors: dense retrieval finds it</span>
    <span class="tagx t4">Dense representations alone</span>`,
  dual: () => `
    <div class="col pcol"><small>Passages</small>${["Opening hours", "Refund policy", "Shipping times", "Gift cards"].map((t, i) => `<span class="ps p${i}">${t}</span>`).join("")}</div>
    <div class="enc e1">Passage encoder</div>
    <div class="idx"><small>Index</small>${[0, 1, 2, 3].map(i => `<span class="vv v${i}">[${["0.2, 0.7, …", "0.9, 0.1, …", "0.4, 0.5, …", "0.1, 0.3, …"][i]}]</span>`).join("")}</div>
    <div class="qq"><small>Question</small><span>Can I get my money back?</span></div>
    <div class="enc e2">Question encoder</div>
    <div class="qv">[0.8, 0.2, …]</div>
    <div class="scores">${[["Refund policy", "0.91"], ["Gift cards", "0.42"], ["Shipping times", "0.37"], ["Opening hours", "0.12"]].map(([t, s], i) => `<div class="sc s${i}"><span>${t}</span><b>${s}</b></div>`).join("")}<em>q · p</em></div>
    <span class="tagx t4 ok">Top k = 2</span>`,
  precompute: () => `
    <div class="lane off"><small>Offline, once</small><span class="st">All passages</span><i>→</i><span class="st enc">Passage encoder</span><i>→</i><span class="st fx">FAISS index</span></div>
    <div class="lane on"><small>At query time</small><span class="st">Question</span><i>→</i><span class="st enc">Question encoder</span><i>→</i><span class="st fx">Inner product lookup</span></div>
    <span class="tagx t0">Decomposable: passages can be precomputed</span>
    <span class="tagx t1">Simpler inner product function</span>
    <div class="chart"><small>Top-20 passage retrieval accuracy (illustrative baseline)</small>
      <div class="row2"><b>BM25</b><span><i class="bm"></i></span><em>60%</em></div>
      <div class="row2"><b>DPR</b><span><i class="dp"></i><i class="rg"></i></span><em class="dpv"><span class="hi">higher</span><span class="rn">69–79%</span></em></div>
      <p class="fine">+9 to +19 points absolute, on the paper's own datasets</p></div>`,
  hybrid: () => `
    <div class="tb"><div class="hd"><span></span><b>BM25</b><b>Dense</b></div>
      <div class="tr r0"><span><code>RX-4400 manual</code><small>exact code</small></span><b class="y">✓</b><b class="n">✕</b></div>
      <div class="tr r1"><span><code>printer keeps jamming</code><small>page says "paper feed problems"</small></span><b class="n">✕</b><b class="y">✓</b></div></div>
    <span class="tagx t2">Complementary by design</span>
    <div class="mix"><span class="a">BM25 results</span><i>+</i><span class="b">DPR results</span><i>→</i><span class="c">Combined list</span></div>
    <span class="tagx t3 ok">Can improve results in some cases</span>
    <div class="fin"><span class="chipx">Keep BM25 as the baseline</span><span class="chipx warnx">A paper isn't proof of what Google uses</span></div>`
};
const HOOKS = {};
