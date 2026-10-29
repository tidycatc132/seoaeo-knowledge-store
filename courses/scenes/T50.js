/* Scenes for T50 Clicks and engagement signals: SCENES maps scene.id to stage markup. */
const SCENES = {
  public: () => `
    <div class="ss">${'<i>search</i>'.repeat(6)}</div>
    <div class="ag"><b>aggregated + anonymized</b><small>interaction data</small></div>
    <div class="ml"><b>signals</b><small>→ machine-learned systems estimate relevance</small></div>
    <div class="ex"><small>live experiment</small><div class="ab"><span>current Search</span><span class="nw">with new feature</span></div></div>
    <div class="mx"><i class="k0">what people click on</i><i class="k1">how long it took to click</i></div>`,
  trial: () => `
    <div class="xc x0"><small>Google exhibit</small><p>"Exploiting user feedback, principally clicks, has been the major theme of ranking work for the past decade."</p></div>
    <div class="xc x1"><small>Google exhibit</small><p>"Navboost is the original click exploitation system and still the most potent"</p></div>
    <div class="wt w0"><small>Eric Lehman</small><p>"It's just a big table."</p><div class="tb">${'<i></i>'.repeat(12)}</div></div>
    <div class="wt w1"><small>Pandu Nayak</small><p>"Glue is just another name for navboost…"</p></div>
    <div class="fc"><small>ranking factors</small><i class="nb">Navboost</i><i>…</i><i>…</i><i>…</i><i>…</i><em>"not the only factor by any means"</em></div>`,
  bias: () => `
    <div class="sp">${[92, 60, 38, 26, 18].map((w, i) => `<div class="rr r${i}"><span>#${i + 1}</span><div class="cb"><i style="width:${w}%"></i></div></div>`).join('')}</div>
    <span class="tb1">trust bias: more clicks on top-ranked links</span>
    <span class="tb2">clicks follow trust in the ranking, not only quality</span>
    <div class="pr"><small>relative preference</small><span>skipped #2, clicked #3</span><b>→ #3 preferred over #2</b></div>
    <span class="tagx t4 ok">matches explicit judgments well (2005 study)</span>`,
  ledger: () => `
    <div class="col cf"><small>On the record</small><p class="l0">Click data and user data are used ✓</p><p class="l1">Navboost: one factor, not the only one ✓</p><p class="l2">"Time to click": measured in live experiments of changes</p></div>
    <div class="col nc"><small>Not in any saved source</small><p>Dwell time as a ranking signal</p><p>Pogo-sticking</p><p>One page's CTR lifting its own rank</p></div>
    <span class="tagx t4">first: which queries lost clicks?</span>`
};
const HOOKS = {};
