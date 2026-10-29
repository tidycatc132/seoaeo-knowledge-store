/* Scenes for T54 Spam policies and quality filters: SCENES maps scene.id to stage markup. */
const SCENES = {
  why: () => `
    <div class="ib"><small>email inbox</small><p>Team meeting notes</p><p class="sp">WIN A PRIZE!!! <b>spam</b></p><p>Invoice for October</p><p class="sp">Cheap pills <b>spam</b></p></div>
    <div class="sb"><small>Google Search</small><b>spam detection systems</b><span>including SpamBrain</span></div>
    <span class="tagx t2">constantly updated as spam evolves</span>
    <div class="ln"><p class="au"><b>automated systems</b><span>most spam</span></p><p class="hu"><b>human review, as needed</b><span>→ manual action</span></p></div>
    <div class="oc"><span>rank lower</span><span>not appear at all</span></div>`,
  tricks: () => `
    <div class="fc f0"><small>search engines see</small><b class="ex">Travel destinations</b><i></i><i></i></div>
    <span class="ne">≠</span>
    <div class="fc f1"><small>users see</small><b class="ex">Discount drugs</b><i></i><i></i></div>
    <div class="pn n2"><small>hidden text</small><p>Visible paragraph for readers.</p><p class="hd">text placed only for search engines</p></div>
    <div class="pn n3"><small>keyword stuffing</small><p class="ks">cheap plumber Leeds, plumber Leeds cheap, Leeds plumber cheap, cheap Leeds plumber</p></div>
    <div class="pn n4"><small>doorways</small><div class="dw"><span>plumber Leeds</span><span>plumber York</span><span>plumber Hull</span></div><b>→ one page</b></div>`,
  scale: () => `
    <div class="gn"><small>generated pages</small><div>${'<i></i>'.repeat(24)}</div><span>made to manipulate rankings, not helping users</span></div>
    <span class="tagx t1 warn">generative AI or similar · many pages · no added value</span>
    <div class="sc s2"><small>thin affiliation</small><p><span>merchant description</span><b>copied →</b><span>affiliate page</span></p></div>
    <div class="sc s3"><small>expired domain abuse</small><p><span>old-charity.example</span><b>expired → bought →</b><span>low-value content</span></p></div>
    <div class="sc s4"><small>site reputation abuse</small><p><span>strong host site</span><b>+</b><span>third-party coupons section</span></p></div>`,
  links: () => `
    <div class="lg"><span class="na">site A</span><b>⇄</b><span class="nb">site B</span><small>links made mainly to manipulate rankings</small></div>
    <div class="ch"><span>bought or sold links</span><span>automated link services</span><span>excessive link swaps</span></div>
    <div class="cq"><small>paid link, qualified</small><code>&lt;a href="…" rel="sponsored"&gt;</code><b>✓ not a violation</b></div>
    <div class="ma"><small>Search Console · Manual actions</small><b>1 issue detected</b><span>by a human reviewer at Google</span></div>
    <div class="st"><span>fix all issues on all pages</span><b>→</b><span>Request Review</span><b>→</b><span>several days or weeks</span></div>`
};
const HOOKS = {};
