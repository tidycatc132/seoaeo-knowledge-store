/* Scenes for T26 Hybrid search and rank fusion: SCENES maps scene.id to stage markup. */
const T26_K = ["D", "A", "B", "E", "C"];
const T26_V = ["F", "B", "D", "A", "G"];
const T26_F = [["D", "0.0323"], ["B", "0.0320"], ["A", "0.0318"], ["F", "0.0164"], ["E", "0.0156"]];
const t26List = (cls, title, docs) => `<div class="rl ${cls}"><small>${title}</small>${docs.map((d, i) => `<div class="it${d === "D" ? " hd" : ""}"><b>${i + 1}</b><span>Doc ${d}</span></div>`).join("")}</div>`;
const SCENES = {
  two: () => `
    <div class="pn kw"><small>Keyword search</small><div class="qy">BX-4471</div><div class="hit"><b>BX-4471</b> Trail boot</div><span class="lbl">exact match</span>
      <div class="uses"><span>product codes</span><span>jargon</span><span>dates</span><span>names</span></div></div>
    <div class="pn vc"><small>Vector search</small><div class="qy">boots that keep feet dry</div><div class="hit">Waterproof hiking boot</div><span class="lbl">similar meaning</span></div>
    <div class="hy"><b>Hybrid search</b><span>keyword + vector</span></div>
    <span class="tagx t1">one request · both run in parallel</span>`,
  rrf: () => `
    ${t26List("lk", "Keyword", T26_K)}
    ${t26List("lv", "Vector", T26_V)}
    <div class="fm"><small>For each list a document is in</small><code>score += 1 / (k + rank)</code></div>
    <span class="tagx t2">k = 60</span>
    <div class="calc"><small>Doc D: 1st and 3rd</small><code>1/61 + 1/63 ≈ 0.0323</code></div>
    <div class="fz"><small>Fused ranking</small>${T26_F.map(([d, s], i) => `<div class="it"><b>${i + 1}</b><span>Doc ${d}</span><em>${s}</em></div>`).join("")}</div>
    <span class="tagx t4 ok">No tuning needed</span>`,
  fuse: () => `
    <div class="tbl"><small>With k = 60</small><div><span>rank 1</span><b>1/61 ≈ 0.0164</b></div><div><span>rank 5</span><b>1/65 ≈ 0.0154</b></div><em>a top spot isn't worth much more</em></div>
    <div class="bars">
      <div class="br"><span>Doc A · 1st in one list</span><div class="tr"><i class="s1"></i></div><b>0.0164</b></div>
      <div class="br win"><span>Doc B · 4th and 5th in both</span><div class="tr"><i class="s1"></i><i class="s2"></i></div><b>0.0310</b></div>
    </div>
    <div class="cd c1"><small>RRF paper</small><b>Better than any individual system</b><div class="mini"><i style="height:45%"></i><i style="height:55%"></i><i class="rr" style="height:80%"></i></div><em>bar heights illustrative</em></div>
    <div class="cd c2"><small>Azure AI Search</small><b>Just one result set, ranked with RRF</b></div>
    <div class="cd c3"><small>Microsoft's own benchmarks</small><b>Hybrid + semantic ranker: significant relevance benefits</b></div>`,
  test: () => `
    <div class="res"><small>Hybrid results for one test query</small>${["judged relevant", "not judged", "judged relevant", "not judged", "not judged"].map((l, i) => `<div class="it${l === "not judged" ? " un" : ""} x${i}"><b>${i + 1}</b><span>Result ${i + 1}</span><em class="e0">${l === "not judged" ? "?" : "✓"}</em><em class="e1">ignored</em><em class="e2">✕</em><em class="e3">${i === 4 ? "✕" : "✓"}</em></div>`).join("")}</div>
    <div class="sw"><small>ignore_unlabeled</small><code class="on">true</code><code class="off">false</code></div>
    <div class="sc"><small>Precision@5 (hypothetical)</small><b class="v2">0.40</b><b class="v3">0.80</b><span class="w2">unjudged counted as wrong</span><span class="w3">after judging the new results</span></div>
    <div class="scope"><small>Scope</small><b>Azure · Elastic · RRF paper</b><span>No saved source says how Google or Bing merge results</span></div>`
};
const HOOKS = {};
