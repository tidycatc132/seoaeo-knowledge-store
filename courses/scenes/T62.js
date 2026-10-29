/* Scenes for T62 Local landing pages: SCENES maps scene.id to stage markup. */
const CITIES = ["Leeds", "York", "Hull", "Bradford", "Wakefield", "Harrogate", "Halifax", "Huddersfield", "Barnsley", "Doncaster", "Ripon", "Selby"];
const SCENES = {
  doorway: () => `
    <div class="tiles">${CITIES.map(c => `<div class="tile2"><b>Plumber in ${c}</b><i></i><i></i></div>`).join("")}</div>
    <span class="funnel">⟶</span>
    <div class="book">One booking page</div>
    <span class="tagx t1">Funnel to one page: doorway example</span>
    <span class="tagx t2">Same text, only the city changes</span>
    <div class="tree"><span class="chipx">Locations</span></div>
    <div class="lines"></div>
    <div class="real">
      <div class="loc"><b>Leeds branch</b><span>14 Park Row</span><span>Mon–Sat 8–6</span><span>0113 555 0100</span></div>
      <div class="loc"><b>York branch</b><span>2 Micklegate</span><span>Mon–Fri 8–5</span><span>01904 555 010</span></div>
      <div class="loc"><b>Hull branch</b><span>9 Dock Street</span><span>Mon–Fri 9–5</span><span>01482 555 020</span></div>
    </div>`,
  markup: () => `
    <div class="code">
      <span class="ln l-open">{</span>
      <span class="ln l-type"><span class="k">"@type"</span>: <span class="v"><span class="old">"LocalBusiness"</span><span class="new">"Bakery"</span></span>,</span>
      <span class="ln l-name"><span class="k">"name"</span>: <span class="v">"Rosa’s Bakery"</span>,</span>
      <span class="ln l-addr"><span class="k">"address"</span>: <span class="v">{ "12 Mill Street", … }</span>,</span>
      <span class="ln l-tel"><span class="k">"telephone"</span>: <span class="v"><span class="old">"555-0100"</span><span class="new">"+44 113 555 0100"</span></span>,</span>
      <span class="ln l-hrs"><span class="k">"openingHoursSpecification"</span>: <span class="v">[ … ]</span>,</span>
      <span class="ln l-dep"><span class="k">"department"</span>: <span class="v">{ "Café", … }</span>,</span>
      <span class="ln l-url"><span class="k">"url"</span>: <span class="v">"https://…/leeds"</span></span>
      <span class="ln l-close">}</span>
    </div>
    <div class="side">
      <span class="tagx m0">Hours, departments and more</span>
      <span class="tagx m1">Required: name and address</span>
      <span class="tagx m2">Most specific subtype</span>
      <span class="tagx m3">Country and area codes</span>
      <span class="tagx m4">URL of this location ✓ works</span>
    </div>`,
  limits: () => `
    <div class="panel mk"><small>On the page</small><code>LocalBusiness</code></div>
    <span class="ar1">→</span>
    <div class="rich">Rich result?</div>
    <span class="stamp2 ng">No guarantee</span>
    <div class="panel pf"><small>Business Profile</small><b>✓ Claimed</b></div>
    <span class="ar2">→</span>
    <div class="surf"><span class="chipx">Google Maps</span><span class="chipx">Knowledge panel</span></div>
    <span class="tagx q">NAP consistency: a ranking factor?</span>
    <span class="tagx ns">Google’s page doesn’t say so: industry theory</span>
    <div class="nap"><span class="chipx">Rosa’s Bakery · 12 Mill St · 0113…</span><span class="chipx">Rosa’s Bakery · 12 Mill St · 0113…</span></div>`,
  canon: () => `
    <div class="city c1">/plumber-leeds</div><div class="city c2">/plumber-york</div><div class="city c3">/plumber-hull</div>
    <span class="tagx sim">Google decides duplicates by similarity</span>
    <svg class="arrs" viewBox="0 0 100 56.25" preserveAspectRatio="none"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8fb3ff"/></marker></defs><line x1="33" y1="8.6" x2="67" y2="21" marker-end="url(#ah)"/><line x1="33" y1="24.2" x2="67" y2="23" marker-end="url(#ah)"/><line x1="33" y1="40" x2="67" y2="25" marker-end="url(#ah)"/></svg>
    <span class="tagx strong">rel=canonical → homepage: a strong signal</span>
    <div class="home">Homepage</div>
    <span class="tagx warn">City pages fold into the homepage</span>
    <div class="weak"></div><span class="tagx wl">Sitemap: a weak signal</span>
    <span class="tagx opt">None of these is required</span>`
};
const HOOKS = {};
