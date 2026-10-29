/* Scenes for T41 Canonicals and duplicate content: SCENES maps scene.id to stage markup. */
const SCENES = {
  dupes: () => `
    <div class="uv u0"><code>https://shop.example/sofa</code></div>
    <div class="uv u1"><code>http://shop.example/sofa</code></div>
    <div class="uv u2"><code>…/sofa?utm_source=mail</code></div>
    <div class="uv u3"><code>…/sofa?sort=price</code></div>
    <span class="sim">same content, ~same text</span>
    <svg class="fan" viewBox="0 0 100 56" preserveAspectRatio="none"><path d="M42,12 L62,28"/><path d="M42,22 L62,28"/><path d="M42,34 L62,28"/><path d="M42,44 L62,28"/></svg>
    <div class="cn"><small>Canonical</small><code class="cu">https://shop.example/sofa</code><span class="sg">links + signals ×4</span></div>
    <span class="tagx t3 ok">crawl time saved for new and updated pages</span>
    <span class="tagx t4 ok">HTTPS preferred over HTTP</span>`,
  prefs: () => `
    <div class="sr r0"><b>Redirect</b><span class="br"><i style="width:90%"></i></span><em>strong</em></div>
    <div class="sr r1"><b>rel="canonical"</b><span class="br"><i style="width:85%"></i></span><em>strong</em></div>
    <div class="sr r2"><b>Sitemap</b><span class="br"><i style="width:30%"></i></span><em>weak</em></div>
    <code class="ex">&lt;link rel="canonical" href="https://shop.example/sofa"&gt;</code>
    <span class="tagx t3 ok">signals stack: combine them</span>
    <span class="tagx t4">none of them are required</span>`,
  mistakes: () => `
    <div class="mk m0"><small>robots.txt</small><code>Disallow: /sofa?sort=</code><i>✕</i><em>not for canonicals</em></div>
    <div class="mk m1"><small>noindex</small><code>&lt;meta name="robots" content="noindex"&gt;</code><i>✕</i><em>not for picking a canonical</em></div>
    <div class="pgn"><small>Pagination: canonical of /sofas?page=3</small>
      <div class="pc no"><code>→ /sofas?page=1</code><i>✕</i></div>
      <div class="pc ok"><code>→ /sofas?page=3</code><i>✓</i></div>
      <code class="ah">&lt;a href="/sofas?page=3"&gt;3&lt;/a&gt;</code>
    </div>
    <div class="gsc"><small>Search Console</small><b>Alternate page with proper canonical tag</b><span>nothing to do ✓</span></div>`,
  shingles: () => `
    <div class="dc d0"><small>Page A</small><span>grey three seat sofa</span><div class="sh"><i class="m">grey three seat</i><i>three seat sofa</i></div></div>
    <div class="dc d1"><small>Page B</small><span>grey three seat couch</span><div class="sh"><i class="m">grey three seat</i><i>three seat couch</i></div></div>
    <div class="jc">Jaccard = shared ÷ all distinct = <b>1 ÷ 3</b></div>
    <div class="gr"><small>all pairs of billions of pages</small><div class="gd"></div><em>infeasible</em></div>
    <div class="fp"><small>fingerprint, 64 bits</small><code>A 1011 0110 0101 …</code><code>B 1011 0100 0101 …</code><span>Hamming distance = bits that differ</span></div>
    <span class="tagx t4 warn">technique, not proof of Google's system</span>`
};
const HOOKS = {};
