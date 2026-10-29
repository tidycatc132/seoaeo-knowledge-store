/* Scenes for T58 International SEO and hreflang: SCENES maps scene.id to stage markup. */
const SCENES = {
  site: () => `
    <div class="kd k0"><small>multilingual</small><b>more than one language</b><p><span>English</span><span>Français</span><span>Deutsch</span></p></div>
    <div class="kd k1"><small>multi-regional</small><b>targets different countries</b><p><span>UK</span><span>France</span><span>Austria</span></p></div>
    <span class="tagx t1 ok">a different URL for each language version</span>
    <div class="ur"><p><code>example.de</code><b class="y">✓</b></p><p><code>de.example.com</code><b class="y">✓</b></p><p><code>example.com/de/</code><b class="y">✓</b></p><p><code>site.com?loc=de</code><b class="n">not recommended</b></p></div>
    <div class="vc"><small>visible content</small><p>Bonjour ! Voici notre guide…</p><b>→ language: French</b></div>
    <div class="la"><code>&lt;html lang="fr"&gt;</code><span>not used to detect language</span></div>`,
  hl: () => `
    <div class="vs"><span class="u">user in France</span><b>→</b><span>en-GB</span><span class="on">fr-FR</span><span>de-DE</span></div>
    <div class="mt"><span>HTML tags</span><b>=</b><span>HTTP headers</span><b>=</b><span>sitemap</span></div>
    <div class="sx"><code>&lt;link rel="alternate" hreflang="fr-FR" href="https://example.com/fr/" /&gt;</code></div>
    <div class="fq"><small>fully-qualified URL</small><p><code>https://example.com/fr/</code><b class="y">✓</b></p><p><code>/fr/</code><b class="n">✗</b></p></div>
    <div class="cd"><small>ISO codes</small><p><code>en-GB</code><b class="y">✓</b><code>fr</code><b class="y">✓</b></p><p><code>en-UK</code><b class="n">✗</b><code>GB</code><b class="n">✗ region alone</b></p></div>`,
  ret: () => `
    <svg class="ln" viewBox="0 0 100 56" preserveAspectRatio="none"><line x1="17" y1="10" x2="45" y2="10"/><line x1="17" y1="10" x2="17" y2="32"/><line x1="17" y1="10" x2="45" y2="32"/><line x1="45" y1="10" x2="17" y2="32"/><line x1="45" y1="10" x2="45" y2="32"/><line x1="17" y1="32" x2="45" y2="32"/><line class="bk" x1="17" y1="10" x2="45" y2="10"/></svg>
    <span class="nd n0">en-GB</span><span class="nd n1">fr-FR</span><span class="nd n2">de-DE</span><span class="nd n3">es-ES</span>
    <span class="ig">one-way → ignored</span>
    <span class="nd xd">x-default · no match</span>
    <div class="ls"><small>entries on every page</small><code>en-GB</code><code>fr-FR</code><code>de-DE</code><code>es-ES</code><code>x-default</code><b>= 5</b></div>
    <span class="tagx t4 warn">no link back = tags ignored</span>`,
  sig: () => `
    <div class="rd"><span>browser: German</span><b>→ auto-redirect →</b><span>/de/</span><em>✗ avoid</em></div>
    <div class="sw"><small>language links on every page</small><p><span>English</span><span>Français</span><span>Deutsch</span></p><b>✓</b></div>
    <div class="ck"><p class="n"><span>one URL + cookie</span><b>✗</b></p><p class="y"><span>separate URLs</span><b>✓</b></p></div>
    <div class="sg"><small>target audience signals</small><p><span>ccTLD</span><span>hreflang</span><span class="sv">server location</span></p></div>
    <span class="tagx t4">server location is not a definitive signal</span>`
};
const HOOKS = {};
