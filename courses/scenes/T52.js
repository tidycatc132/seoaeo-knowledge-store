/* Scenes for T52 GEO and AI Overviews: SCENES maps scene.id to stage markup. */
const SCENES = {
  aio: () => `
    <div class="qp">how do I repot a fern</div>
    <div class="fo"><small>query fan-out</small><span>related search: soil</span><span>related search: pot size</span><span>related search: timing</span></div>
    <div class="ar"><small>AI Overview / AI Mode</small>${'<i></i>'.repeat(4)}<div class="lk"><span>supporting site</span><span>supporting site</span><span>supporting site</span></div></div>
    <span class="tagx t2 ok">no additional requirements or special optimizations</span>
    <span class="tagx t3 ok">no special schema.org markup to add</span>
    <span class="tagx t4">SEO best practices remain relevant</span>`,
  elig: () => `
    <div class="gt"><small>supporting link eligibility</small><p><b>✓</b> indexed</p><p><b>✓</b> eligible to show with a snippet</p><em>→ can be a supporting link</em></div>
    <div class="rb"><small>robots.txt</small><code>User-agent: Googlebot<br>Allow: /</code></div>
    <div class="ct"><small>limit what's shown</small><div><span>nosnippet</span><span>data-nosnippet</span><span>max-snippet</span><span>noindex</span></div></div>
    <div class="pf"><small>Search Console · Performance report</small><div class="bs">${[40, 52, 46, 60, 58, 66, 70].map(h => `<i style="height:${h}%"></i>`).join('')}</div></div>
    <span class="tagx t4 ok">included in overall search traffic</span>`,
  bots: () => `
    <div class="vb oa"><small>OpenAI</small>
      <p class="r0"><code>OAI-SearchBot</code><span>→ ChatGPT search</span></p>
      <p class="r1"><code>GPTBot</code><span>→ model training</span></p>
      <em class="r2">each setting is independent</em>
      <p class="r3 bad"><code>Disallow OAI-SearchBot</code><span>→ not shown · ~24 h</span></p>
    </div>
    <div class="vb px"><small>Perplexity</small>
      <p><code>PerplexityBot</code><span>→ Perplexity results</span></p>
      <p class="dim"><span>not used for AI foundation models</span></p>
    </div>`,
  geo: () => `
    <div class="gd"><small>Aggarwal et al.</small><b>Generative Engine Optimization</b><span>aid content creators in improving their content visibility</span></div>
    <div class="gb"><small>GEO-bench: diverse queries, multiple domains</small><div>${'<i></i>'.repeat(12)}</div></div>
    <div class="mt"><small>methods tested (direction reported, not to scale)</small>
      <p><span>Statistics Addition</span><b><i class="up"></i></b></p>
      <p><span>Quotation Addition</span><b><i class="up"></i></b></p>
      <p><span>Cite Sources</span><b><i class="nn"></i></b></p>
      <p><span>Keyword Stuffing</span><b><i class="dn"></i></b></p>
    </div>
    <div class="ft"><b>up to 40%</b><span>in its experiments · varies by domain</span></div>
    <span class="tagx t4 warn">a study result, not an engine's rule</span>`
};
const HOOKS = {};
