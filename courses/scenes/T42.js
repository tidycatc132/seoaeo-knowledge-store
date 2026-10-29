/* Scenes for T42 Keyword weighting: tf-idf and BM25. SCENES maps scene.id to stage markup. */
const SCENES = {
  match: () => `
    <div class="qy">query: <b>grey sofa</b></div>
    <div class="dk k0"><small>Doc 1</small><span>grey sofa, grey cushions</span><i class="y">match</i></div>
    <div class="dk k1"><small>Doc 2</small><span>blue armchair</span><i class="n">no match</i></div>
    <div class="dk k2"><small>Doc 3</small><span>sofa beds in grey</span><i class="y">match</i></div>
    <div class="many">+ 48,000 more matches</div>
    <div class="bag"><small>bag of words: Doc 1</small><div class="ct"><i>grey 2</i><i>sofa 1</i><i>cushions 1</i></div></div>
    <svg class="vec" viewBox="0 0 100 56" preserveAspectRatio="none"><path class="ax" d="M62,54 H96 M62,54 V28"/><path class="v1" d="M62,54 L94,40"/><path class="v2" d="M62,54 L88,32"/></svg>
    <span class="vl l1">query</span><span class="vl l2">doc</span>
    <span class="tagx t4 ok">small angle = similar</span>`,
  tfidf: () => `
    <div class="wt w0"><code>chesterfield</code><small>many times, in few pages</small><span class="br"><i></i></span></div>
    <div class="wt w1"><code>cushion</code><small>fewer times, or in many pages</small><span class="br"><i></i></span></div>
    <div class="wt w2"><code>the</code><small>in virtually all pages</small><span class="br"><i></i></span></div>
    <div class="fm">weight = <b>tf</b> × <b>idf</b></div>
    <div class="idf"><span>rare term → idf <b>high</b></span><span>frequent term → idf <b class="lo">low</b></span></div>`,
  bm25: () => `
    <div class="gx"><small>score from one term</small>
      <svg viewBox="0 0 100 60" preserveAspectRatio="none"><path class="ax" d="M6,54 H96 M6,54 V4"/><path class="cap" d="M6,14 H96"/><path class="cv" d="M6,54 C20,24 40,17 96,15"/><path class="bin" d="M6,54 V30 H96"/></svg>
      <span class="xl">times the term appears →</span><span class="cl">saturation point</span><span class="bl">k1 = 0: binary</span>
    </div>
    <div class="ln"><small>b: length normalization</small><div class="sl"><span>0 none</span><i></i><span>1 full</span></div></div>
    <div class="px"><small>smallest window with all query terms</small><div class="ww"><i>…</i><b>grey velvet sofa</b><i>…</i></div><em>window = 3 words</em></div>`,
  stuffing: () => `
    <div class="cp bad"><small>Before</small><p>Our <mark>emergency plumber</mark> team is the best <mark>emergency plumber</mark> choice. Call an <mark>emergency plumber</mark> today. <mark>Emergency plumber</mark> prices…</p><i>✕</i></div>
    <div class="cp good"><small>After</small><p>Burst pipe at 2am? Our emergency plumbers answer day and night and give you a price before we start.</p><i>✓</i></div>
    <span class="qt">"the number of times that you use a keyword on a page … I don't think that really matters" (as reported)</span>
    <div class="tn"><small>Your site search (BM25)</small><code>k1 = term frequency scaling</code><code>b = length normalization</code></div>`
};
const HOOKS = {};
