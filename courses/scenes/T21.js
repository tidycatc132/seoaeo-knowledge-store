/* Scenes for T21 Cross-encoder re-ranking: SCENES maps scene.id to stage markup. */
const T21_CAND = [3, 7, 12, 18, 22, 26, 31, 35];
const SCENES = {
  stages: () => `
    <div class="corp"><small>Corpus</small><div class="dots">${Array.from({ length: 48 }, (_, i) => `<i class="${T21_CAND.includes(i) ? "cd" : ""}${i === 41 ? " ms" : ""}"></i>`).join("")}</div></div>
    <div class="arr a1"><span>Stage 1</span><b class="m1">BM25</b></div>
    <div class="cand"><small>Candidates</small>${["D", "B", "F", "A", "H", "C", "E", "G"].map((t, i) => `<span class="c c${t}" style="--o:${i}">Doc ${t}</span>`).join("")}</div>
    <div class="arr a2"><span>Stage 2</span><b class="m2">BERT</b></div>
    <div class="fin"><small>Re-ranked</small>${["A", "C", "B", "F"].map(t => `<span>Doc ${t}</span>`).join("")}</div>
    <span class="tagx t4 bad">Never retrieved, never re-ranked</span>`,
  cross: () => `
    <div class="bi"><small>Bi-encoder</small>
      <div class="ln"><span class="tx">Sentence A</span><i>→</i><span class="bert">BERT</span><i>→</i><span class="em">u</span></div>
      <div class="ln"><span class="tx">Sentence B</span><i>→</i><span class="bert">BERT</span><i>→</i><span class="em">v</span></div>
      <b class="cmp">compare u and v</b></div>
    <div class="ce"><small>Cross-encoder</small>
      <div class="ln"><span class="pair"><em>[CLS]</em> <span class="qa">Query (A)</span> <em>[SEP]</em> <span class="pb">Passage (B)</span></span><i>→</i><span class="bert">BERT</span><i>→</i><span class="sc">[CLS] → 1 layer → <b>0.93</b></span></div>
      <small class="pr">probability the passage is relevant</small></div>
    <div class="tr"><span class="chipx g">Better performance</span><span class="chipx r">No sentence embedding</span></div>`,
  cost: () => `
    <div class="grid"><small>10,000 sentences, every pair</small><div class="gg">${Array.from({ length: 120 }, () => "<i></i>").join("")}</div><b>≈ 50 million pairs ≈ 65 hours</b></div>
    <div class="pipe"><span class="pp">Whole index</span><i>→</i><span class="pp bi">Bi-encoder</span><i>→</i><span class="pp k">Top 100</span><i>→</i><span class="pp ce">Cross-encoder</span><i>→</i><span class="pp k">Re-ranked</span></div>
    <div class="lb"><small>MS MARCO passage retrieval</small><b>Top of the leaderboard</b><span>+27% relative MRR@10 over the previous best</span></div>`,
  seo: () => `
    <div class="cards">
      <div class="cd c0"><small>Google ranking systems guide</small><b>"Some of our more notable ranking systems"</b></div>
      <div class="cd c1"><small>Google on BERT</small><b>How combinations of words express meaning and intent</b></div>
      <div class="cd c2"><small>Google on BERT</small><b>"Never working alone"</b></div>
      <div class="cd c3 bad"><small>Research paper</small><b>A method, not Google's pipeline</b></div>
    </div>
    <div class="steps">${["Be retrievable", "Use your readers' words", "Answer clearly", "Check the source"].map((t, i) => `<span class="chipx"><b>${i + 1}</b> ${t}</span>`).join("")}</div>
    <span class="tagx t4">Practitioner judgement</span>`
};
const HOOKS = {};
