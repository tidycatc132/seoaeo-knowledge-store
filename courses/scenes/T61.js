/* Scenes for T61 Local reviews: SCENES maps scene.id to stage markup. */
const SCENES = {
  stars: () => `
    <div class="panel biz"><h6>Rosa’s Bakery</h6><small>How well-known?</small><div class="meter"><i></i></div></div>
    <div class="hist"><span class="hcount">★ 4.7 · 48 reviews</span>
      <div class="hrow h5"><span>5★</span><i></i></div><div class="hrow h4"><span>4★</span><i></i></div><div class="hrow h3"><span>3★</span><i></i></div><div class="hrow h2"><span>2★</span><i></i></div><div class="hrow h1"><span>1★</span><i></i></div></div>
    <span class="tagx rank">↑ Can help local ranking</span>
    <div class="rcard rv1"><b>Sam K.</b><span class="st">★★★★★</span><span>Lovely staff, great bread.</span></div>
    <div class="reply rp1"><b>Rosa’s Bakery (owner)</b><span>Thanks, Sam! See you soon.</span></div>
    <span class="tagx stand">Helps the business stand out</span>
    <span class="tagx nosay">Raises ranking? Google doesn’t say so</span>`,
  ask: () => `
    <div class="phone"><div class="qr"></div><small>Scan to review us on Google</small><span class="link">g.page/r/…/review</span></div>
    <span class="tagx signin">Customer signs into a Google Account</span>
    <span class="tagx gen">✓ Genuine experience</span>
    <div class="coupon">10% off when you post a review</div>
    <span class="stamp2 no1">Strictly prohibited</span>
    <div class="funnel"><div class="row"><span class="face">🙂</span><span class="face">🙁</span></div><span class="arrow">↓</span><span class="dest">🙂 → Google review</span><span class="dest">🙁 → private form</span></div>
    <span class="stamp2 no2">Not allowed: selective asking</span>`,
  reply: () => `
    <div class="rcard rv1"><b>Priya M.</b><span class="st">★★★☆☆</span><span>Bread was great, but the queue took 20 minutes.</span></div>
    <span class="tagx lock">🔒 Verify to reply</span>
    <span class="tagx unl">✓ Verified</span>
    <div class="reply draft"><span class="owner">Rosa’s Bakery</span><span>Thanks, Priya. Sorry about the wait; we’ve added a second till. <span class="promo">Use code SAVE10 next time!</span></span></div>
    <span class="tagx pub">Public reply: no deals or promotions</span>
    <span class="tagx check">Checking against content policies</span>
    <span class="tagx time">Usually up to 10 min, sometimes up to 30 days</span>
    <span class="tagx posted">✓ Posted under the review</span>
    <span class="tagx bell">🔔 Priya is notified</span>
    <span class="tagx edit">She can still change her review</span>`,
  policy: () => `
    <div class="head">Google Maps reviews</div>
    <div class="grid">
      <div class="pc p1"><span class="tg">Paid for</span><b>J. Lee</b><span class="st">★★★★★</span><span>Best ever!!</span></div>
      <div class="pc p2"><span class="tg">5 accounts, 1 person</span><b>A. Smith</b><span class="st">★★★★★</span><span>Amazing!</span></div>
      <div class="pc p3"><span class="tg">Employee</span><b>Tom (staff)</b><span class="st">★★★★★</span><span>Great place to visit.</span></div>
      <div class="pc p4"><span class="tg">Owner’s cousin</span><b>M. Rossi</b><span class="st">★★★★★</span><span>Family favourite.</span></div>
      <div class="pc p5"><span class="tg">Competitor attack</span><b>Bread Co.</b><span class="st">★☆☆☆☆</span><span>Avoid this place.</span></div>
      <div class="pc p6"><span class="flag">⚑ Flag it</span><b>Anon</b><span class="st">★☆☆☆☆</span><span>Abusive, off-topic rant.</span></div>
    </div>
    <span class="tagx gone">Fake engagement: removed</span>
    <span class="tagx flagtip">Think a review breaks the policies? Flag it</span>`
};
const HOOKS = {};
