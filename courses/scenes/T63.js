/* Scenes for T63 Citations and local links: SCENES maps scene.id to stage markup. */
const LINK_TACTICS = [
  ["$", "£50 for a link"],
  ["🎁", "Free product for a post with a link"],
  ["⇄", "Link to me, I’ll link to you"],
  ["☰", "500 directory links for $99"],
  ["⚙", "Automated link builder"],
  ["▁", "Footer link on 200 sites"]
];
const SCENES = {
  prom: () => `
    <div class="facs"><span class="chipx f1">Relevance</span><span class="chipx f2">Distance</span><span class="chipx f3">Prominence</span></div>
    <span class="tagx wk">How well-known a business is</span>
    <div class="site s1">Local news</div><div class="site s2">Football club</div><div class="site s3">Food blog</div>
    <svg class="arrs" viewBox="0 0 100 56.25" preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id="pa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
      <line x1="27" y1="22" x2="41" y2="30" marker-end="url(#pa)"/><line x1="27" y1="31" x2="41" y2="31" marker-end="url(#pa)"/><line x1="27" y1="40" x2="41" y2="32" marker-end="url(#pa)"/>
    </svg>
    <div class="panel biz"><small>Business</small><h6>Rosa’s Bakery</h6></div>
    <div class="panel revs"><small>Reviews</small><b>★★★★★</b><span>86 reviews</span></div>
    <span class="tagx t2">Links + reviews feed prominence</span>
    <span class="tagx t3">Google finds pages by following links</span>
    <span class="stamp2 np">No paying for rank</span>`,
  cites: () => `
    <div class="panel prof"><small>Business Profile</small><h6>Rosa’s Bakery</h6>
      <span class="ad"><span class="okad">12 Mill Street, Leeds</span><span class="badad">4 Old Road, Leeds</span></span><span>0113 555 0100</span></div>
    <div class="dirs">
      <div class="dir"><small>Directory A</small><span>Rosa’s Bakery · 12 Mill St · 0113…</span><i>✓</i></div>
      <div class="dir"><small>Directory B</small><span>Rosa’s Bakery · 12 Mill St · 0113…</span><i>✓</i></div>
      <div class="dir"><small>Chamber of commerce</small><span>Rosa’s Bakery · 12 Mill St · 0113…</span><i>✓</i></div>
    </div>
    <span class="tagx ct">“Citation”: an industry term</span>
    <div class="panel gp"><small>Google’s local ranking page names</small>
      <div class="prow"><span class="chipx yes">Links ✓</span><span class="chipx yes">Reviews ✓</span><span class="chipx no">Citations ?</span></div></div>
    <span class="tagx g1">Complete and accurate: more likely to show up</span>
    <span class="tagx g2">Inaccurate info: might not show up</span>
    <span class="tagx pj">Practitioner judgement: keep listings matching</span>
    <span class="tagx it">Citations as a ranking factor: industry theory</span>`,
  spam: () => `
    <div class="panel def"><small>Google’s spam policy</small><b>Link spam: creating links primarily to manipulate search rankings</b></div>
    <div class="lks">${LINK_TACTICS.map((t, i) => `<div class="lk k${i + 1}"><em>${t[0]}</em><span>${t[1]}</span><i>✕ Listed as link spam</i></div>`).join("")}</div>
    <span class="tagx lq">“Low-quality” directory links</span>`,
  qualify: () => `
    <div class="panel club"><small>leedsjuniorsfc.example › Our sponsors</small><h6>Thanks to our sponsors</h6>
      <span class="spon">Dave’s Plumbing</span>
      <code class="cd">&lt;a <span class="rel">rel="sponsored"&nbsp;</span>href="…"&gt;</code></div>
    <svg class="arrs" viewBox="0 0 100 56.25" preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id="qa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
      <line x1="48" y1="17" x2="64" y2="17" marker-end="url(#qa)"/>
    </svg>
    <div class="panel plb"><small>Business</small><h6>Dave’s Plumbing</h6></div>
    <span class="tagx q0">Sponsorship: a normal part of the web</span>
    <span class="tagx q1">Not a violation when qualified</span>
    <div class="vals"><span class="chipx v1">sponsored · ads and paid placements</span><span class="chipx v2">ugc · comments and forum posts</span><span class="chipx v3">nofollow</span></div>
    <span class="tagx q4">Generally not followed</span>
    <span class="tagx q5">Still found via sitemaps or other links</span>`
};
const HOOKS = {};
