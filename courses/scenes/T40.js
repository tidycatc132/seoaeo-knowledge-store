/* Scenes for T40 Rendering and JavaScript indexing: SCENES maps scene.id to stage markup. */
const SCENES = {
  phases: () => `
    <span class="rb">robots.txt: crawling allowed? ✓</span>
    <div class="ph p0"><b>Crawl</b><small>fetch the URL</small></div>
    <div class="ph pq"><b>Render queue</b><div class="tq"><i>200</i><i>200</i><i>200</i></div></div>
    <div class="ph p1"><b>Render</b><small class="hc">headless Chromium</small></div>
    <div class="ph p2"><b>Index</b><small>store the page</small></div>
    <span class="tm">time in queue: a few seconds, or longer</span>
    <svg class="loop" viewBox="0 0 100 56" preserveAspectRatio="none"><path d="M63,26 V40 H15 V26"/></svg>
    <div class="nl"><span>links found in rendered HTML</span><code>/sofas/grey</code><code>/sofas/blue</code></div>`,
  links: () => `
    <div class="pn lk"><small>Links</small>
      <div class="cd ok"><code>&lt;a href="/sofas/grey-3-seat"&gt;Grey 3-seat&lt;/a&gt;</code><i>✓</i></div>
      <div class="cd no"><code>&lt;div onclick="go('grey-3-seat')"&gt;Grey 3-seat&lt;/div&gt;</code><i>✕</i></div>
    </div>
    <div class="pn ur"><small>URLs for content</small>
      <div class="cd no fr"><code>example.com/#/sofas</code><i>✕</i><em>fragment loads different content</em></div>
      <div class="cd ok hi"><code>example.com/sofas</code><i>✓</i><em>History API route</em></div>
    </div>
    <span class="tagx t4 ok">every view you want found: its own path + a real &lt;a href&gt;</span>`,
  signals: () => `
    <div class="codes"><span>200 OK</span><span>404 Not Found</span><span>410 Gone</span><em>meaningful status codes</em></div>
    <div class="ih"><small>Initial HTML</small><code>&lt;meta name="robots" content="<mark>noindex</mark>"&gt;</code><span class="sk">→ Google may skip rendering</span></div>
    <div class="js"><small>Script after load</small><code>removeNoindex()</code><span>may never run</span><i>✕</i></div>
    <div class="fx f0"><small>Fix 1: soft 404 in a single-page app</small><div class="rt"><code>/parts/zz9 · 200</code><b>→</b><code>/not-found · 404</code></div></div>
    <div class="fx f1"><small>Fix 2</small><code>&lt;meta name="robots" content="noindex"&gt;</code></div>`,
  check: () => `
    <div class="fr v"><small>What visitors see</small><div class="tt">&lt;title&gt;Grey sofas | Shop&lt;/title&gt;</div><div class="bl ok">Product grid</div><div class="bl ok">Reviews</div><div class="bl ok loc">Branches near you</div><span class="pm">📍 Allow location? <b>Allow</b></span></div>
    <div class="fr g"><small>Rendered HTML (Googlebot)</small><div class="tt">&lt;title&gt;Grey sofas | Shop&lt;/title&gt;</div><div class="bl ok">Product grid ✓</div><div class="bl ok">Reviews ✓</div><div class="bl miss loc">Branches near you ✕</div><span class="pm">📍 Allow location? <b class="dn">Declined</b></span></div>
    <span class="tagx t3 ok">server-side or pre-rendering → faster site</span>
    <span class="tagx t4">check raw vs rendered on every major template</span>`
};
const HOOKS = {};
