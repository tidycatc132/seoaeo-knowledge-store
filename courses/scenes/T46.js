/* Scenes for T46 Anchor text: what links say. SCENES maps scene.id to stage markup. */
const SCENES = {
  anchors: () => `
    <div class="lk"><small>a link on another site</small><code>&lt;a href="/returns"&gt;<mark>returns policy for online orders</mark>&lt;/a&gt;</code></div>
    <div class="tg"><small>the page it points to</small><b>/returns</b><span>tells people and Google about this page</span></div>
    <span class="acc">anchors: often more accurate than the page itself</span>
    <div class="sr"><small>search</small><code>big blue</code><span>→ #1 IBM home page</span></div>
    <div class="ix"><small>index terms for IBM's home page</small><i>ibm</i><i>computers</i><i class="an">big blue ← from anchors</i></div>`,
  writing: () => `
    <div class="ar r0"><code>list of cheese types</code><span class="ch">descriptive</span><span class="ch">concise</span><span class="ch">relevant</span><i class="ok">✓</i></div>
    <div class="ar r1"><code>Click here</code><span class="nt">too generic</span><i class="no">✕</i></div>
    <div class="ar r2"><code>cheese types cheese list best cheeses cheese guide</code><span class="nt">crammed</span><i class="no">✕</i></div>
    <p class="cx">Before a tasting, skim our <u>list of cheese types</u> so you know what to order.</p>
    <div class="cn"><u>cheddar</u><u>brie</u><u>gouda</u><u>feta</u><u>stilton</u><span>links chained together ✕</span></div>`,
  crawl: () => `
    <div class="cl c0"><code>&lt;a href="/boots"&gt;Walking boots&lt;/a&gt;</code><i class="ok">✓ crawlable</i></div>
    <div class="cl c1"><code>&lt;a onclick="goto('boots')"&gt;Walking boots&lt;/a&gt;</code><i class="no">✕ no href</i></div>
    <div class="cl c2"><code>&lt;a href="/boots"&gt;&lt;img src="boots.jpg" <mark>alt="Walking boots for wet trails"</mark>&gt;&lt;/a&gt;</code><i class="ok">alt = anchor text</i></div>
    <div class="tr"><span class="hm">Home</span><span class="gd">Guides</span><span class="nw">New buying guide</span><em>← link from at least one other page</em></div>`,
  abuse: () => `
    <div class="fm">${['cheap boots online', 'cheap boots online', 'cheap boots online', 'cheap boots online'].map(t => `<code>${t}</code>`).join('')}</div>
    <div class="tgt">target page</div>
    <span class="sp">orchestrated anchor text: a form of spamming</span>
    <span class="cp">also used in campaigns against specific sites</span>
    <span class="ks">keyword stuffing: repetition that sounds unnatural</span>
    <div class="rl"><code>rel="sponsored"</code><code>rel="ugc"</code><em>generally not followed</em></div>
    <div class="ex"><span>Source: <u>government guidance on footwear safety</u></span><i>✓ linking out can build trust</i></div>`
};
const HOOKS = {};
