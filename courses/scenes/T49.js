/* Scenes for T49 Topical authority and content clusters: SCENES maps scene.id to stage markup. */
const SCENES = {
  term: () => `
    <div class="cl in"><small>Industry says (vendor blog)</small><p class="l0">"recognized expertise on a specific subject in the eyes of search engines"</p><p class="l1">…but Google "doesn't explicitly use it as a ranking factor"</p></div>
    <div class="cl gg"><small>Google says</small><p class="l2">Mueller (as reported): "Don't worry about it."</p><p class="l3">Ranking: many factors and signals</p><p class="l4">E-E-A-T itself isn't a specific ranking factor</p></div>`,
  news: () => `
    <div class="qy"><small>newsy query</small><b>city water outage update</b></div>
    <div class="ar"><small>topic areas</small><i>health</i><i>politics</i><i>finance</i></div>
    <div class="src s0"><b>Northbank Gazette</b><span>has covered the city's water supply for years</span><i>especially relevant ✓</i></div>
    <div class="src s1"><b>Generic news aggregator</b><span>one wire story</span></div>
    <div class="adv"><small>advice to publishers</small><b>"just do what you are doing today"</b></div>
    <span class="tagx t4">"We've used it for several years."</span>`,
  cluster: () => `
    <div class="dir"><small>/baking/</small></div>
    <div class="hub">Bread hub</div>
    <div class="gd g0">Sourdough starters</div><div class="gd g1">Proofing dough</div><div class="gd g2">Baking temperatures</div>
    <svg class="ln" viewBox="0 0 100 56" preserveAspectRatio="none"><path d="M50,15 L22,33"/><path d="M50,15 L50,33"/><path class="nw" d="M50,15 L78,33"/></svg>
    <span class="orph">no links in → add one</span>
    <span class="anc a0">"how to make a sourdough starter"</span>
    <span class="tagx t4 warn">word count target: none</span>`,
  scaled: () => `
    <div class="grid">${'<i></i>'.repeat(40)}</div>
    <span class="lbl">many pages, generated to manipulate rankings</span>
    <span class="ai">generative AI, no added value ✕</span>
    <div class="qq q0"><small>Google asks</small><b>Extensive automation, on many topics?</b></div>
    <div class="qq q1"><small>Why?</small><b>Mainly to attract search visits: not rewarded</b></div>
    <div class="ix"><code>Crawled - currently not indexed</code><span>seen, not indexed; indexing isn't guaranteed</span></div>`
};
const HOOKS = {};
