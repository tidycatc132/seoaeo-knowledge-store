/* Scenes for T51 Freshness and Query Deserves Freshness: SCENES maps scene.id to stage markup. */
const SCENES = {
  qdf: () => `
    <div class="qb"><small>Google Search</small><b>"query deserves freshness" systems</b><span>fresher content where it would be expected</span></div>
    <div class="eq"><div class="sb">earthquake</div><p class="nw">news article · fresh</p><p class="nw">news article · fresh</p><p>fresher content</p></div>
    <div class="dg"><small>2011</small><div class="gr"></div><div class="gl"><span>less fresh</span><span>varying degrees of freshness</span><span>more fresh</span></div></div>
    <div class="cmp">
      <div class="cr"><span>current news topic</span><div class="cb"><i class="hi"></i></div><em>bigger role</em></div>
      <div class="cr"><span>dictionary definition</span><div class="cb"><i class="lo"></i></div><em>smaller role</em></div>
    </div>
    <span class="tagx t3">factor weights vary with the query</span>`,
  cases: () => `
    <div class="cs c0"><small>case 1</small><b>Recent events</b><p>something just happened</p><i>e.g. an earthquake</i></div>
    <div class="cs c1"><small>case 2</small><b>Recurring events</b><p>happens on a regular basis</p><i>e.g. a yearly festival</i></div>
    <div class="cs c2"><small>case 3</small><b>Frequently updated</b><p>information that changes often</p><i>not a hot topic or recurring event</i></div>
    <div class="st"><b>6 - 10%</b><span>of searches noticeably impacted, per Google in 2011</span></div>
    <span class="tagx t4 warn">2011 figure: today's guide gives no number</span>`,
  dates: () => `
    <div class="pm"><div class="ph">How to repot a fern</div><div class="by">Published 12 March · Updated 3 June</div>${'<i></i>'.repeat(5)}</div>
    <span class="bl">byline date: Google's estimate</span>
    <div class="fx"><span>factor</span><span>factor</span><span>factor</span><b>best estimate</b><small>no single factor: all can be prone to issues</small></div>
    <div class="jd"><small>structured data</small><code>"datePublished": "…",<br>"dateModified": "…"</code></div>
    <div class="nx"><span>✗ future dates</span><span>✗ date of the event described</span></div>`,
  fake: () => `
    <div class="pm"><div class="ph">What is a sitemap?</div><div class="by"><s>Updated last year</s> Updated today</div>${'<i></i>'.repeat(5)}<small class="uc">content: not substantially changed</small></div>
    <div class="qa"><p>Adding or removing lots of content to make the site seem "fresh"?</p><b>(No, it won't)</b></div>
    <span class="tagx t2 ok">dates must describe the page's publication or update</span>
    <div class="cmp">
      <div class="cr"><span>current news</span><div class="cb"><i class="hi"></i></div><em>bigger role</em></div>
      <div class="cr"><span>definitions</span><div class="cb"><i class="lo"></i></div><em>smaller role</em></div>
    </div>
    <span class="tagx t4">practitioner judgement: update when facts change</span>`
};
const HOOKS = {};
