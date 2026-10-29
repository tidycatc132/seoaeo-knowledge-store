/* Scenes for T60 Business Profile setup: SCENES maps scene.id to stage markup. */
const SCENES = {
  verify: () => `
    <div class="panel prof"><h6>Rosa’s Bakery</h6>
      <span class="status"><span class="st0">Unclaimed</span><span class="st1">Claimed</span><span class="st2">Verifying</span><span class="st3">✓ Verified</span></span>
      <span class="own">You own this profile</span>
      <small>12 Mill Street · Bakery</small>
      <span class="lockrow">💬 Reply to reviews</span></div>
    <div class="methods"><span class="hd">Methods chosen by Google</span>
      <span class="chipx m1">Phone or text</span><span class="chipx m2">Email</span><span class="chipx m3">Video</span>
      <span class="chipx m4">Live video<i>not for all</i></span><span class="chipx m5">Postcard<i>not for all</i></span></div>
    <span class="tagx clock">Review: up to 5 business days</span>
    <div class="mail"><b>✉ Confirmation email</b><span>Your business is verified.</span></div>`,
  nameaddr: () => `
    <div class="sign">Luigi’s Pizza</div>
    <span class="lbl l1">Profile name</span>
    <div class="namef"><span class="chipx n1">Luigi’s Pizza</span><span class="chipx nx">Best Pizza Downtown</span><span class="chipx nx">Open 24h</span><span class="chipx nx">#0423</span></div>
    <span class="tagx why">Taglines and store codes aren’t permitted</span>
    <span class="lbl l2">Address</span>
    <div class="addr"><div class="line"><span>Address Line 1</span><span>12 Market Street</span></div><div class="line line2"><span>Address Line 2</span><span>Suite 4, Floor 2</span></div></div>
    <div class="el box"><span class="chipx">P.O. Box 88, another town</span><small>✗ Not acceptable</small></div>`,
  cats: () => `
    <div class="stmt">This business IS a <span class="slot"><b>Bakery</b></span></div>
    <div class="ghosts"><span></span><span></span><span></span><span></span></div>
    <span class="tagx few">As few as possible</span>
    <div class="ladder"><span class="chipx">Store</span><em>→</em><span class="chipx">Food store</span><em>→</em><span class="chipx top">Bakery</span></div>
    <span class="tagx spec">As specific as possible</span>
    <div class="bad"><div><span class="chipx x">cheap cakes</span><small>keyword</small></div><div><span class="chipx x">open late</span><small>attribute</small></div></div>
    <span class="tagx rest">✓ Google does the rest behind the scenes</span>`,
  sab: () => `
    <div class="map"></div>
    <div class="area"></div><div class="over"></div>
    <div class="panel hours"><small>Customer-facing hours</small><span class="hr">Mon–Fri 8am–6pm</span></div>
    <div class="pin home"><span>Owner’s home</span></div>
    <span class="tagx eye">Address hidden</span>
    <span class="el hq">One profile · central office</span>
    <span class="tagx drive">Area within about 2 hours’ drive</span>
    <div class="pin virt"><span>Virtual office</span></div>
    <span class="tagx unst">✗ Not staffed</span>`
};
const HOOKS = {};
