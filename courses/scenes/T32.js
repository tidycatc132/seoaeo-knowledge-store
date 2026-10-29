/* Scenes for T32 Faceted navigation and crawl traps: SCENES maps scene.id to stage markup. */
const T32_URLS = ["/sofas?color=grey", "/sofas?color=grey&size=3-seat", "/sofas?size=3-seat&color=grey", "/sofas?color=grey&price=500-1000", "/sofas?color=grey&size=3-seat&sort=price", "/sofas?sort=newest&color=blue"];
const SCENES = {
  explode: () => `
    <div class="cat"><small>Category (hypothetical)</small><b>Sofas</b><div class="flt"><span>Colour</span><span>Size</span><span>Price</span><span>Sort</span></div></div>
    <div class="urls">${T32_URLS.map(u => `<code>${u}</code>`).join("")}</div>
    <div class="grid">${Array.from({ length: 160 }, (_, i) => `<i style="--d:${(i % 40 * 0.02).toFixed(2)}s"></i>`).join("")}<b>∞</b></div>
    <span class="tagx t3 warn">very many crawler requests · large computing costs</span>
    <div class="np"><small>New product page</small><b>Still waiting to be crawled</b></div>`,
  fixes: () => `
    <div class="dec"><b>Need these URLs indexed?</b><span>No → prevent crawling</span></div>
    <div class="fx f0"><small>Preferred</small><b>robots.txt</b><code>Disallow: /*?*color=</code><em>illustrative rule</em></div>
    <div class="fx f1"><small>Preferred</small><b>URL fragments</b><code>/sofas#color=grey</code><em>no impact on crawling</em></div>
    <div class="fx f2 weak"><small>Weaker</small><b>rel="canonical"</b><code>may cut crawl volume over time</code></div>
    <div class="fx f3 weak"><small>Weaker</small><b>rel="nofollow"</b><code>needed on every anchor</code></div>
    <span class="tagx t4 warn">generally less effective in the long term</span>`,
  hygiene: () => `
    <div class="ur u0"><code>/shoes?color=red<mark>&amp;</mark>size=9</code><span class="nt">standard separator</span></div>
    <div class="ur u1"><code>/shoes?size=9&amp;color=red</code><span class="nt bad">same filters, different order</span></div>
    <div class="ur u2"><code>/shoes?color=purple&amp;size=15</code><span class="st s404">404</span><span class="nt">no results</span></div>
    <div class="ur u3"><code>/shoes?color=teal&amp;size=2</code><span class="st s200">200 · "No products found"</span><span class="nt bad">soft 404: keeps getting crawled</span></div>
    <div class="ur u4"><code>/parts?model=x9</code><i>→</i><code>/not-found</code><span class="st s404">404</span><span class="nt">JavaScript app redirect</span></div>`,
  choose: () => `
    <div class="inv"><span class="bot">🤖</span><div><b>Without guidance, Google tries to crawl all or most URLs it knows</b><small>including your filter URLs</small></div></div>
    <div class="nf n0"><b>noindex</b><span>still requested, then dropped</span><i>✕</i></div>
    <div class="nf n1"><b>Sitemap entries</b><span>no guarantee of crawling</span><i>✕</i></div>
    <div class="nf n2"><b>Temporary robots.txt</b><span>don't use to shift budget</span><i>✕</i></div>
    <div class="plan"><b>Lasting plan</b><span>choose indexable facets → block or fragment the rest → tidy URLs → 404 the empty ones</span></div>`
};
const HOOKS = {};
