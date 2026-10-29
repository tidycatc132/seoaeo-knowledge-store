/* Scenes for T7 Measuring search quality: SCENES maps scene.id to stage markup. */
const T7_REL = [1, 3, 6, 9];
const SCENES = {
  topk: () => `
    <div class="res"><small>Top 10 results</small>${Array.from({ length: 10 }, (_, i) => `<div class="rr k${i}${T7_REL.includes(i + 1) ? " rel" : ""}"><b>${i + 1}</b><i></i><em>${T7_REL.includes(i + 1) ? "✓" : ""}</em></div>`).join("")}</div>
    <div class="coll"><small>All relevant pages: 8</small><span>${Array.from({ length: 8 }, (_, i) => `<i class="${i < 4 ? "f" : ""}"></i>`).join("")}</span></div>
    <div class="calc c1"><b>Precision at 10</b><span>4 ÷ 10 = 0.4</span></div>
    <div class="calc c2"><b>Recall at 10</b><span>4 ÷ 8 = 0.5</span></div>
    <span class="tagx t3">Least stable common measure</span>
    <span class="tagx t4">Rank unaware: reorder, same scores</span>`,
  mrr: () => `
    ${[[1, "1"], [2, "0.5"], [4, "0.25"]].map(([r, v], q) => `<div class="qrow q${q}"><b>Query ${q + 1}</b>${Array.from({ length: 5 }, (_, i) => `<span class="sl${i + 1 === r ? " hit" : ""}">${i + 1}</span>`).join("")}<em class="rv2">1 ÷ ${r} = ${v}</em></div>`).join("")}
    <div class="mean">(1 + 0.5 + 0.25) ÷ 3 ≈ <b>0.583</b></div>
    <div class="map"><b>MAP</b><span>Quality across recall levels. Especially good discrimination and stability.</span></div>
    <span class="tagx t4">MRR and MAP fail on graded relevance</span>`,
  ndcg: () => `
    <div class="rk">${[3, 2, 0, 1, 2].map((g, i) => `<div class="gr g${i}"><b>${i + 1}</b><span class="rt r${g}">${g}</span><span class="gb"><i class="raw" style="width:${g * 30}%"></i><i class="disc" style="width:${(g * 30) / Math.log2(i + 2)}%"></i></span></div>`).join("")}</div>
    <div class="ideal"><small>Best possible order</small><span>${[3, 2, 2, 1, 0].map(g => `<i class="rt r${g}">${g}</i>`).join("")}</span><b>NDCG = DCG ÷ best DCG</b></div>
    <span class="tagx t0">Graded ratings: 0 to 3</span>
    <span class="tagx t1">Rank and rating together</span>
    <span class="tagx t2">Lower rank, smaller gain</span>
    <span class="tagx t4">BEIR: nDCG@k gives a good balance</span>`,
  evalrun: () => `
    <div class="chk">${["Match the metric to the question", "Fix k, such as 10", "Decide how unlabeled results count", "RAG: is the answer grounded?", "Check answers and retrieval"].map((t, i) => `<div class="ci c${i}"><i>${i + 1}</i>${t}</div>`).join("")}</div>
    <div class="side s0"><span class="chipx">Sets: P@k, R@k</span><span class="chipx">First hit: MRR</span><span class="chipx">Graded: NDCG</span></div>
    <div class="side s1"><span class="big">k = 10</span></div>
    <div class="side s2"><span class="unl">?</span><span class="opt">Ignored: neither relevant nor irrelevant</span><span class="opt bad">Not ignored: treated as irrelevant</span></div>
    <div class="side s3"><span class="pas">Passage ✓ found at rank 1</span><span class="ans">Answer adds a claim not in it ✕</span></div>
    <div class="side s4"><span class="chipx">Ragas: faithfulness</span><span class="chipx">CRAG: retrieval evaluator</span></div>`
};
const HOOKS = {};
