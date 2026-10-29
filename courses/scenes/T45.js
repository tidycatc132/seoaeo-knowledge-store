/* Scenes for T45 Links and authority: PageRank and HITS. SCENES maps scene.id to stage markup. */
const SCENES = {
  surfer: () => `
    <svg class="ed" viewBox="0 0 100 56" preserveAspectRatio="none">
      <path class="w" d="M15,16.8 L40,10"/><path d="M15,16.8 L40,34.7"/><path class="w" d="M40,10 L65,22.4"/><path d="M40,34.7 L65,22.4"/><path d="M40,10 L40,34.7"/><path class="w" d="M65,22.4 L88,39.2"/>
      <path class="tp" d="M88,39.2 Q50,58 15,16.8"/>
    </svg>
    <div class="nd n1"><b>A</b><span class="sc">0.15</span></div>
    <div class="nd n2"><b>B</b><span class="sc">0.20</span></div>
    <div class="nd n3"><b>C</b><span class="sc">0.15</span></div>
    <div class="nd n4"><b>D</b><span class="sc">0.30</span></div>
    <div class="nd n5"><b>E</b><span class="sc">0.20</span></div>
    <span class="lb vt">link = conferral of authority</span>
    <span class="lb st">surfer starts on a random page</span>
    <span class="lb de">no out-links: teleport</span>
    <span class="tagx t4 ok">all PageRanks sum to 1</span>`,
  formula: () => `
    <div class="fx">PR(A) = (1−<b class="d">d</b>) + <b class="d">d</b> ( PR(T1)<b class="c">/C(T1)</b> + … + PR(Tn)<b class="c">/C(Tn)</b> )</div>
    <span class="dv">d = 0.85 (usual setting)</span>
    <span class="cv">C(T) = links going out of page T</span>
    <div class="wk">
      <div class="lk1"><small>T1</small><span>PR 2 ÷ 4 links</span><b>0.5</b></div>
      <div class="lk1"><small>T2</small><span>PR 1 ÷ 1 link</span><b>1</b></div>
      <div class="tot"><span>0.15 + 0.85 × 1.5</span><b>PR(A) = 1.425</b></div>
    </div>
    <span class="tagx t4 warn">the paper's method, not Google today</span>`,
  hits: () => `
    <svg class="ed" viewBox="0 0 100 56" preserveAspectRatio="none">
      <path d="M30,8 L62,8"/><path d="M30,8 L62,18"/><path d="M30,18 L62,8"/><path d="M30,18 L62,28"/><path d="M30,28 L62,8"/><path d="M30,28 L62,18"/>
    </svg>
    <div class="hb h0">best plumbing guides</div><div class="hb h1">DIY repair links</div><div class="hb h2">home owner resources</div>
    <div class="au a0">Burst pipe guide</div><div class="au a1">Boiler basics</div><div class="au a2">Drain care</div>
    <span class="cap hc">hubs: link to many good authorities</span>
    <span class="cap ac">authorities: pointed to by many good hubs</span>
    <span class="mu">⇄ mutually reinforcing</span>
    <span class="hs">hub score = sum of the authority scores it links to</span>
    <div class="two"><div><small>Hubs</small><span>1. best plumbing guides</span><span>2. DIY repair links</span></div><div><small>Authorities</small><span>1. Burst pipe guide</span><span>2. Boiler basics</span></div></div>`,
  guide: () => `
    <div class="gc g0"><small>Crawlable</small><code class="ok">&lt;a href="/guides/boilers"&gt;</code><code class="no">&lt;span onclick="go()"&gt;</code></div>
    <div class="gc g1"><small>Linked from another page</small><span class="orph">new buying guide: 0 internal links</span><span class="fix">+ link from /guides ✓</span></div>
    <div class="gc g2"><small>Label outbound links</small><code>rel="sponsored"  paid placement</code><code>rel="ugc"  comments, forums</code><em>generally not followed</em></div>
    <div class="sp"><b>Link spam ✕</b><span>links made primarily to manipulate rankings, e.g. 300 links from an automated service</span></div>`
};
const HOOKS = {};
