/* Scenes for T1 Boolean retrieval: SCENES maps scene.id to stage markup. */
const PLAYS = ["Antony and Cleopatra", "Julius Caesar", "The Tempest", "Hamlet"];
const ROWS = [["Brutus", "1101"], ["Caesar", "1101"]];
const RELEVANT = [1, 4, 8, 10, 14, 17, 19, 22];
const OR_HITS = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23];
const AND_HITS = [1, 8, 14];
const SCENES = {
  matrix: () => `
    <div class="sets">${PLAYS.map((p, i) => `<div class="set"><b>${p}</b><span>${[["Brutus", "Caesar", "Antony"], ["Brutus", "Caesar", "Calpurnia"], ["Prospero", "storm", "island"], ["Brutus", "Caesar", "Ophelia"]][i].map(w => `<em>${w}</em>`).join("")}</span></div>`).join("")}</div>
    <div class="mx">
      <span class="hd"></span>${PLAYS.map(p => `<span class="hd">${p}</span>`).join("")}
      ${ROWS.map(([w, bits]) => `<span class="lb r-${w}">${w}</span>${[...bits].map(b => `<span class="c r-${w} v${b}">${b}</span>`).join("")}`).join("")}
      <span class="lb r-cal"><i class="nt">NOT </i>Calpurnia</span>${[..."0100"].map(b => `<span class="c r-cal"><i class="o">${b}</i><i class="f">${1 - b}</i></span>`).join("")}
      <span class="lb r-res">Matches</span>${[..."1001"].map(b => `<span class="c r-res v${b}">${b === "1" ? "✓" : "–"}</span>`).join("")}
    </div>
    <span class="tagx q">Brutus AND Caesar AND NOT Calpurnia</span>`,
  balance: () => `
    <div class="qry"><span class="w">contract</span><span class="op o-and">AND</span><span class="op o-or">OR</span><span class="w">breach</span></div>
    <div class="docs">${Array.from({ length: 24 }, (_, i) => `<span class="d${RELEVANT.includes(i) ? " rel" : ""}${AND_HITS.includes(i) ? " and" : ""}${OR_HITS.includes(i) ? " or" : ""}"><i>✓</i><i>✕</i></span>`).join("")}</div>
    <div class="key"><span><i class="dot"></i>relevant</span><span><i class="sq"></i>returned</span></div>
    <div class="gauges">
      <div class="g gp"><b>Precision</b><small>Share of returned that are relevant</small><span class="bar"><i></i></span></div>
      <div class="g gr"><b>Recall</b><small>Share of relevant that were returned</small><span class="bar"><i></i></span></div>
    </div>
    <span class="tagx mid">A satisfactory middle ground: difficult or impossible</span>`,
  ranked: () => `
    <div class="stack">${Array.from({ length: 7 }, (_, i) => `<span class="doc" style="top:${i * 12}%"></span>`).join("")}<span class="scan"></span></div>
    <span class="tagx ls">Linear scan: read every document</span>
    <div class="pile">${Array.from({ length: 36 }, (_, i) => `<span class="m" style="left:${(i * 37) % 92}%;top:${(i * 53) % 86}%;transform:rotate(${(i * 23) % 30 - 15}deg)">match</span>`).join("")}</div>
    <div class="count">40,000 matches</div>
    <div class="list">${[96, 88, 74, 61, 47].map((s, i) => `<div class="row2"><b>${i + 1}</b><span class="sb"><i style="width:${s}%"></i></span></div>`).join("")}</div>
    <span class="tagx wl">Westlaw: free text beat its librarians’ Boolean queries</span>`,
  operators: () => `
    <div class="gbar"><span class="gq g0">"tallest building"</span><span class="gq g1">jaguar speed -car</span><span class="gq g2">site:example.com</span><span class="gq g3">photoelectric effect paper filetype:pdf</span><span class="gq g4">site:nytimes.com</span></div>
    <div class="rs"><i></i><i class="sh"></i><i></i><i class="sh"></i></div>
    <span class="tagx t0">Exact match</span>
    <span class="tagx t1">Leaves out pages about cars</span>
    <span class="tagx t2">Only results from that domain</span>
    <span class="tagx t3">Also: before: and after: for dates</span>
    <div class="sp"><span class="ok">site:nytimes.com ✓</span><span class="bad">site: nytimes.com ✕</span></div>
    <span class="tagx t4">No space after the colon</span>`
};
const HOOKS = {};
