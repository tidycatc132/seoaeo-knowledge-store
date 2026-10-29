/* Scenes for T12 Query rewriting and expansion: SCENES maps scene.id to stage markup. */
const SCENES = {
  expand: () => `
    <div class="qbox"><small>Query</small><span class="og">car</span><span class="og">insurance</span><span class="ad a1">auto</span><span class="ad a2">vehicle</span></div>
    <div class="src s1"><b>Thesaurus</b><span>car → auto</span><em>No user input needed</em></div>
    <div class="src s2"><b>Query logs</b><span>car insurance → vehicle insurance</span><em>Other users' rewrites</em></div>
    <div class="wts">${[["car", 100, ""], ["insurance", 100, ""], ["auto", 50, " lo"], ["vehicle", 50, " lo"]].map(([w, v, c]) => `<div class="wt${c}"><b>${w}</b><span><i style="width:${v}%"></i></span></div>`).join("")}</div>
    <div class="rec"><small>Relevant pages matched</small><div class="dots">${Array.from({ length: 10 }, (_, i) => `<i class="d${i}"></i>`).join("")}</div></div>
    <span class="tagx t0">Synonyms and related words</span>
    <span class="tagx t4">Recall goes up</span>`,
  drift: () => `
    <div class="qbox"><small>Query</small><span class="og">copper</span><span class="og">mines</span><span class="ad a1">chile</span><span class="ad a2">andes</span></div>
    <div class="res">${["Copper mining in Chile", "Chile's largest copper mine", "Copper mines of the Andes", "Copper output, Chile", "Copper mines in Zambia", "History of copper mining"].map((t, i) => `<div class="rr r${i}${i < 4 ? " cl" : ""}"><b>${i + 1}</b><span>${t}</span><em>✓?</em></div>`).join("")}</div>
    <div class="topk"><b>Top k</b><small>assumed relevant</small></div>
    <div class="arrow">→</div>
    <span class="tagx t2">Mostly works</span>
    <span class="tagx t3">Query drift toward Chile</span>
    <div class="spell"><span class="typo">carot</span><i>→</i><span class="fix">carrot</span><small>Repair, not expansion</small></div>`,
  context: () => `
    <div class="sent s1"><span>flights</span><span>from</span><span class="pl">Paris</span><span class="pp">to</span><span class="pl">London</span></div>
    <div class="sent s2"><span>flights</span><span>from</span><span class="pl">London</span><span class="pp">to</span><span class="pl">Paris</span></div>
    <div class="ten"><div class="grid">${Array.from({ length: 10 }, (_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("")}</div><b>1 in 10</b><small>US English searches, at launch (2019)</small></div>
    <div class="hyde"><span class="st">Query</span><i>→</i><span class="st lm">Language model</span><i>→</i><span class="st fake">Hypothetical document</span><i>→</i><span class="st">Real documents</span></div>
    <div class="warn"><span class="fk">May contain false details</span><span class="pp2">Paper ≠ proof an engine uses it</span></div>`,
  fanout: () => `
    <div class="root">small business accounting software</div>
    <svg class="lines" viewBox="0 0 100 56" preserveAspectRatio="none">${[14, 38, 62, 86].map(x => `<line x1="50" y1="15" x2="${x}" y2="34"/>`).join("")}</svg>
    <div class="subs">${["pricing", "migration", "tax filing", "features"].map((t, i) => `<span class="sb c${i}">${t}</span>`).join("")}</div>
    <div class="schema"><span>"AI visibility" schema</span><b>Not needed</b></div>
    <div class="vary"><div class="pan"><small>AI Overviews</small><i></i><i></i><i class="s"></i></div><div class="pan"><small>AI Mode</small><i class="s"></i><i></i><i></i><i></i></div></div>
    <div class="yp"><small>Your page</small>${["Features", "Pricing", "Moving from another tool", "Tax filing"].map(t => `<span>${t}</span>`).join("")}</div>
    <span class="tagx t0">Query fan-out</span>
    <span class="tagx t4">Practitioner inference</span>`
};
const HOOKS = {};
