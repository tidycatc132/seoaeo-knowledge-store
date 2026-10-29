/* Scenes for T64 Local results in AI answers and maps: SCENES maps scene.id to stage markup. */
const SCENES = {
  aimode: () => `
    <div class="sbar"><span class="mode">AI Mode</span><span>bakery near Leeds station open late</span></div>
    <div class="panel ans"><small>AI-powered response</small><i></i><i></i><i class="sh"></i><i></i><i class="sh"></i></div>
    <div class="lnks"><small>Supporting websites</small><div class="lnk">rosasbakery.example</div><div class="lnk">leedsfoodguide.example</div><div class="lnk">bakery.example/leeds</div></div>
    <span class="tagx a1">No additional requirements</span>
    <span class="chipx xs">“AI schema” ✕</span><span class="tagx a2">No special schema needed</span>
    <span class="tagx a3">SEO best practices still apply</span>
    <div class="aio"><span class="lab">AI Overviews</span><span class="chipx">leedsfoodguide.example</span><span class="chipx">cafe.example</span></div>
    <span class="tagx a4">Different models: links vary</span>`,
  eligible: () => `
    <div class="gate g1"><span>Indexed</span></div>
    <div class="gate g2"><span>Snippet-eligible</span></div>
    <div class="pg"><b>Location page</b><span class="lb l0">ready</span><span class="lb l1">noindex</span><span class="lb l2">nosnippet</span><span class="lb l3">max-snippet:0</span><span class="lb l4">no blocking tag</span></div>
    <div class="res">Supporting link ✓</div>
    <span class="tagx e1">noindex: kept out of Google</span>
    <span class="tagx e2">nosnippet: no direct input for AI features</span>
    <span class="tagx e3">max-snippet:0 = nosnippet</span>
    <span class="tagx e4">robots.txt: the control for access</span>`,
  askmaps: () => `
    <div class="phone"><div class="ph-top">Ask Maps</div>
      <div class="bub q">Is there a public tennis court with lights on that I can play at tonight?</div>
      <div class="bub a"><b>2 courts open tonight</b><span>Park Lane Courts · lights till 10pm</span><span>Riverside Courts · lights till 9pm</span></div>
      <div class="acts"><span class="chipx">Reserve</span><span class="chipx">Save</span><span class="chipx">Share</span></div>
    </div>
    <div class="map">${[[12,20],[30,64],[44,30],[58,72],[70,18],[82,52],[22,42],[64,40],[88,80],[38,86]].map(([x, y], i) => `<span class="pin p${i}" style="left:${x}%;top:${y}%"></span>`).join("")}</div>
    <div class="stats"><span class="chipx">300M+ places</span><span class="chipx">500M+ contributors</span></div>
    <span class="tagx k0">A conversational experience</span>
    <span class="tagx k3">Personalized: places you’ve searched or saved</span>`,
  influence: () => `
    <div class="panel chk"><small>Google’s best practices for AI features</small>
      <div class="ci c0"><i>✓</i>Business Profile info up to date</div>
      <div class="ci c1"><i>✓</i>Crawling allowed in robots.txt</div>
      <div class="ci c2"><i>✓</i>Important content in text</div>
      <div class="ci c3"><i>✓</i>High-quality images and videos</div>
    </div>
    <div class="panel sum"><small>Place summary</small><h6>Rosa’s Bakery</h6><span class="txt">Cosy bakery known for sourdough and pastries.</span><span class="disc">Summarized with Gemini</span></div>
    <span class="tagx s1">Aggregates many types of data</span>
    <span class="tagx u1">How AI answers pick local businesses: unpublished</span>
    <span class="tagx u2">Local AI ranking claims: industry theory</span>`
};
const HOOKS = {};
