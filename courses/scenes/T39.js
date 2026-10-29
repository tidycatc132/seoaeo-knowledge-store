/* Scenes for T39 Crawling and crawl budget: SCENES maps scene.id to stage markup. */
const T39_TILES = "gggrgsgrggsgrgggsgrg".split("");
const SCENES = {
  frontier: () => `
    <div class="bot">🤖<small>Googlebot</small></div>
    <div class="pg0 known"><small>Known page</small><b>/blog</b></div>
    <svg class="lk" viewBox="0 0 100 56" preserveAspectRatio="none"><line x1="38" y1="8" x2="48" y2="5"/><line x1="38" y1="10" x2="48" y2="16"/></svg>
    <div class="pg0 nw n0"><small>New page</small><b>/blog/new-guide</b></div>
    <div class="pg0 nw n1"><small>New page</small><b>/blog/case-study</b></div>
    <div class="fq"><small>Frontier: URLs yet to be fetched</small><div>${["/blog/new-guide", "/blog/case-study", "/shop/sofas", "/about", "/blog/tags/seo"].map(u => `<code>${u}</code>`).join("")}</div></div>
    <div class="qs front"><small>Front queues: priority</small><div class="q hi">high: /blog/new-guide</div><div class="q md">medium: /shop/sofas</div><div class="q lo">low: /blog/tags/seo</div></div>
    <div class="qs back"><small>Back queues: politeness (one host each)</small><div class="q">host A: /blog/… <i>⏱ wait</i></div><div class="q">host B: /shop/… <i>⏱ wait</i></div></div>
    <span class="tagx t4 warn">textbook design, not Google's scheduler</span>`,
  budget: () => `
    <div class="cir can"><b>Can crawl</b><small>capacity</small></div>
    <div class="cir want"><b>Wants to crawl</b><small>demand</small></div>
    <span class="mid">↑ overlap = crawl budget</span>
    <div class="bd up"><b>Fast, healthy responses</b><span>limit goes up</span></div>
    <div class="bd dn"><b>Slow or server errors</b><span>limit goes down</span></div>
    <div class="dm"><span>popular URLs</span><span>site moves</span><span>update frequency</span></div>
    <div class="scope"><small>Who the guide is for</small><b>1 million+ unique pages, changing about weekly</b><span>or similar very large, fast-changing sites</span></div>`,
  protect: () => `
    <div class="inv"><small>URLs Google knows about (hypothetical)</small><div class="tl">${T39_TILES.map(t => `<i class="${t}">${t === "g" ? "page" : t === "r" ? "gone" : "empty"}</i>`).join("")}</div></div>
    <span class="tagx t0">Google tries to crawl all or most of them</span>
    <div class="sm"><small>sitemap.xml</small><code>&lt;url&gt;<br>&nbsp;&nbsp;&lt;loc&gt;…/sofa-guide&lt;/loc&gt;<br>&nbsp;&nbsp;&lt;lastmod&gt;2026-10-28&lt;/lastmod&gt;<br>&lt;/url&gt;</code></div>
    <div class="spd"><small>Page load</small><div class="bar"><i></i></div><b>faster load → more content read</b></div>`,
  controls: () => `
    ${[["noindex", "keeps a page out of the index", "still requested, then dropped"], ["robots.txt", "manages crawler traffic", "can still be indexed if linked"], ["Sitemap", "helps crawling be efficient", "no guarantee of crawling or indexing"], ["Payment", "", "Google doesn't sell faster crawling"], ["robots.txt 5xx", "", "RFC 9309: assume complete disallow"]].map(([n, y, x], i) => `<div class="cr c${i}"><b>${n}</b>${y ? `<span class="y">✓ ${y}</span>` : `<span class="y"></span>`}<span class="x">✕ ${x}</span></div>`).join("")}`
};
const HOOKS = {};
