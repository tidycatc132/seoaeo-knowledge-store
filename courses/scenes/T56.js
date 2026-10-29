/* Scenes for T56 Blended and multimodal results: SCENES maps scene.id to stage markup. */
const SCENES = {
  serp: () => `
    <div class="rp"><small>results page: visual elements</small>
      <div class="rb tx"><b>text result</b><i></i><i></i></div>
      <div class="rb im"><b>image results</b><div>${'<span></span>'.repeat(5)}</div></div>
      <div class="rb vd"><b>video result</b><div class="vp">▶</div><i></i></div>
    </div>
    <div class="ph"><small>on a phone</small><i class="a"></i><i class="b"></i><i class="c"></i><i class="a"></i></div>
    <span class="tagx t4">how they look can change over time</span>`,
  img: () => `
    <div class="pm"><div class="hd">Reading sourdough crumb</div><p class="nt">An open crumb shows a well-fermented dough…</p><div class="ph2">photo</div><span class="alt">alt="Open crumb of a sourdough loaf, cut in half"</span></div>
    <div class="cb c2"><code>&lt;img src="sourdough-crumb.jpg" alt="…"&gt;</code><b class="okc">✓ helps crawlers find and process it</b></div>
    <div class="cb c3"><code>.hero { background-image: url(…) }</code><b class="bdc">✗ CSS images aren't indexed</b></div>
    <div class="cb c4"><p><s>IMG_0042.jpg</s><b class="bdc">✗</b></p><p><span>sourdough-crumb.jpg</span><b class="okc">✓ short, but descriptive</b></p></div>`,
  vid: () => `
    <div class="wp"><small>watch page</small><div class="pl"><b>▶</b></div><i></i><i></i></div>
    <div class="ck"><small>video feature eligibility</small><p class="k1">✓ watch page is indexed</p><p class="k1">✓ video embedded on the watch page</p><p class="k2">✓ main purpose: a single video</p><p class="k3">✓ valid thumbnail image</p></div>
    <div class="sf"><span>main results</span><span>Video mode</span><span>Google Images</span><span>Discover</span></div>`,
  mix: () => `
    <div class="bp"><small>claimed Business Profile</small><b>Riverside Bakery</b></div>
    <div class="to"><span>→ Google Maps</span><span>→ knowledge panel</span></div>
    <span class="tagx t1 warn">no way to request or pay for a better local ranking</span>
    <div class="cl"><small>CLIP research paper (OpenAI)</small><b class="n">400 million (image, text) pairs</b>
      <div class="mt"><div class="pic">photo</div><p class="y">✓ a dog on a beach</p><p class="x">a cat on a sofa</p></div>
    </div>
    <span class="tagx t4">a research paper, not how Google Images works</span>`
};
const HOOKS = {};
