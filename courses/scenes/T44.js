/* Scenes for T44 Entities, the Knowledge Graph and structured data: SCENES maps scene.id to stage markup. */
const SCENES = {
  kg: () => `
    <div class="qs"><span>taj</span><span>mahal</span><em>two words</em></div>
    <div class="ent e0"><b>Taj Mahal</b><small>monument · Agra</small></div>
    <div class="ent e1"><b>Taj Mahal</b><small>musician</small></div>
    <svg class="lk" viewBox="0 0 100 56" preserveAspectRatio="none"><path d="M50,8 L24,29"/><path d="M50,8 L76,29"/></svg>
    <span class="pick">the one you mean ✓</span>
    <div class="sz"><span><b>500M+</b> objects</span><span><b>3.5B+</b> facts and relationships</span><em>2012 figures</em></div>
    <code class="api">"@type": "Person" · schema.org types · JSON-LD</code>`,
  markup: () => `
    <div class="pv"><small>Your page</small><b>Northbank Plumbing</b><span>24-hour plumbers in Northbank</span></div>
    <div class="ld"><small>&lt;script type="application/ld+json"&gt;</small>
      <code>"@context": "https://schema.org",</code>
      <code>"@type": "<mark>Organization</mark>",</code>
      <code>"name": "Northbank Plumbing"</code>
    </div>
    <span class="gg">Google uses it to understand the page</span>
    <div class="fm"><i>Microdata</i><i>RDFa</i><i class="js">JSON-LD</i></div>
    <span class="tagx t4 ok">JSON-LD: generally recommended</span>`,
  org: () => `
    <div class="ob"><small>Organization</small>
      <code class="o0">"name": "Northbank Plumbing"</code>
      <code class="o1">"url": "https://northbank.example"</code>
      <code class="o2">"logo": "https://northbank.example/logo.png"</code>
      <code class="o3">"sameAs": ["https://…/northbank-plumbing"]</code>
    </div>
    <span class="nr">required properties: none</span>
    <span class="nt n1">helps uniquely identify you</span>
    <span class="nt n3">more about you on another site</span>
    <div class="pl"><span class="hm">home page ✓</span><span class="ev">every page: not needed</span></div>`,
  rules: () => `
    <div class="cmp"><div class="col"><small>Visible page</small><span>Grey 3-seat sofa</span><span>£899</span><span class="miss">no reviews shown</span></div>
    <div class="col mk"><small>Markup</small><code>"name": "Grey 3-seat sofa" ✓</code><code>"price": "899" ✓</code><code class="bad">"ratingValue": "4.8" ✕</code></div></div>
    <div class="ma"><b>Manual action</b><span>page loses rich result eligibility</span></div>
    <span class="tagx t3 warn">don't deceive or mislead users</span>
    <div class="ai"><small>AI Overviews and AI Mode</small><b>no special schema needed</b></div>`
};
const HOOKS = {};
