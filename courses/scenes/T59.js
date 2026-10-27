/* Scenes for T59 Local ranking: SCENES maps scene.id to stage markup; HOOKS run per beat for typed or timed effects. */
const SCENES = {
  factors: () => `
    <div class="el qbar">${ICON.search}<span class="typed"></span><span class="caret"></span></div>
    <div class="map"></div>
    <div class="ring"></div><div class="me"></div>
    <div class="pin pa"><span>Bakery A</span></div><div class="pin pb"><span>Bakery B</span></div><div class="pin pc"><span>Bakery C</span></div>
    <span class="tagx t1">matches “bakery”</span>
    <span class="tagx t3">★ well-known</span>
    <div class="lane ln1"><h5>Relevance</h5><p>how well it matches</p></div>
    <div class="lane ln2"><h5>Distance</h5><p>how far from the searcher</p></div>
    <div class="lane ln3"><h5>Prominence</h5><p>how well-known</p></div>`,
  radius: () => `
    <div class="map"></div>
    <div class="area"></div>
    <div class="rings"><div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div></div>
    <div class="me"></div><div class="me me2"></div>
    <div class="pin pa"><span>Plumber A</span></div><div class="pin pb"><span>Plumber B</span></div>
    <div class="pin mail"><span>Remote mailbox</span></div>
    <span class="tagx loc">Location not shared → Google uses what it knows</span>
    <span class="tagx near">New searcher, new distances</span>
    <span class="tagx nope">✗ Not an acceptable address</span>
    <span class="el van">Service-area business · address hidden</span>
    <span class="tagx sab">Area within about 2 hours’ drive</span>`,
  profile: () => `
    <div class="pcard"><h6>Rosa’s Bakery</h6>
      <div class="prow r1"><b>Name</b><span class="v">Rosa’s Bakery</span></div>
      <div class="prow r2"><b>Category</b><span class="v">Bakery</span></div>
      <div class="prow r3"><b>Hours</b><span class="v"><span class="ok">7am–4pm · holiday hours set</span><span class="bad">Out-of-date hours</span></span></div>
      <div class="prow r4"><b>Address</b><span class="v">12 Mill Street</span></div>
      <div class="meter"><i></i></div>
    </div>
    <div class="side s0"><small>Searcher</small><span class="big">“bakery”</span><small>Does this profile match?</small></div>
    <div class="side s1"><span class="big">Complete and accurate</span><small>more likely to show up</small></div>
    <div class="side s2"><span class="big">Inaccurate info</span><small>might not show up for relevant searches</small></div>
    <div class="side s3"><small>Choosing a category</small><div class="is">This business IS a <span class="tile">bakery</span></div></div>
    <div class="side s4"><span class="claimed">✓ Profile claimed</span><div class="surf"><span>Google Maps</span><span>Knowledge panel</span></div></div>`,
  prom: () => `
    <div class="biz"><h6>Rosa’s Bakery</h6><small>How well-known?</small><div class="meter"><i></i></div></div>
    <div class="site w1">news site</div><div class="site w2">food blog</div><div class="site w3">local guide</div>
    <div class="rev"><span class="count">12 reviews</span><span class="stars">★★★★★</span></div>
    <div class="rvw"><span class="bub">“Best sourdough in town.”</span><span class="bub reply">Thanks, see you soon!</span></div>
    <div class="pay">Pay for the top local spot</div>
    <div class="no">No way to pay</div>`
};
const HOOKS = {
  factors(stage, n, timers) {
    const t = stage.querySelector(".typed");
    if (n === 0) { t.textContent = ""; [..."bakery near me"].forEach((c, i) => timers.push(setTimeout(() => t.textContent += c, reduce ? 0 : 300 + i * 110))); }
    else t.textContent = "bakery near me";
  },
  prom(stage, n, timers) {
    const c = stage.querySelector(".count"), to = n >= 2 ? 48 : 12;
    if (n !== 2 || reduce) { c.textContent = to + " reviews"; return; }
    for (let k = 13; k <= to; k++) timers.push(setTimeout(() => c.textContent = k + " reviews", (k - 12) * 40));
  }
};
