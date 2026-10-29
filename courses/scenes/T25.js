/* Scenes for T25 Query fan-out: SCENES maps scene.id to stage markup. */
const T25_SUBS = ["solar panel cost", "installation", "incentives", "savings over time"];
const SCENES = {
  fanout: () => `
    <div class="qq"><small>Question (illustrative)</small><b>Is solar worth it for my home?</b></div>
    <span class="tagx t0">query fan-out</span>
    <svg class="lines" viewBox="0 0 100 56" preserveAspectRatio="none">${[14, 38, 62, 86].map(x => `<line x1="50" y1="15" x2="${x}" y2="25"/>`).join("")}</svg>
    <div class="subs">${T25_SUBS.map((s, i) => `<div class="sq q${i}"><span>🔍 ${s}</span><div class="docs"><i></i><i></i><i></i></div></div>`).join("")}</div>
    <div class="ans"><small>AI-powered response</small><b>Weighs cost, installation, incentives and savings…</b><div class="lk"><span>site-a.example</span><span>site-b.example</span><span>site-c.example</span></div></div>
    <div class="deep"><div class="dots">${Array.from({ length: 150 }, (_, i) => `<i style="--d:${(i % 30 * 0.03).toFixed(2)}s"></i>`).join("")}</div><b>Deep Search: hundreds of searches</b></div>`,
  methods: () => `
    <div class="lane az"><small>Azure AI Search</small>
      <div class="bx q">Complex question</div>
      <div class="bx plan">LLM query planning</div>
      <div class="subq"><span>subquery 1</span><span>subquery 2</span><span>subquery 3</span></div>
      <em class="par">in parallel · each reranked</em>
      <div class="bx merge">Best results combined</div>
    </div>
    <div class="lane hy"><small>HyDE (research paper)</small>
      <div class="bx q">Question</div>
      <div class="hdoc"><b>Hypothetical document</b><span></span><span></span><span class="fx"></span><span></span></div>
      <em class="find">used to find real documents ↓</em>
      <div class="real"><i>📄</i><i>📄</i><i>📄</i></div>
    </div>
    <span class="tagx t1 warn">may contain false details</span>
    <span class="tagx t2">Methods, not Google's behaviour</span>`,
  eligible: () => `
    <div class="gates">${["Crawling allowed", "Indexed", "Snippet eligible", "Supporting link"].map((g, i) => `<div class="gt g${i}"><i class="ok">✓</i><i class="no">✕</i><b>${g}</b></div>`).join("")}</div>
    <div class="meta m1"><span>&lt;meta name="robots" content="<em>nosnippet</em>"&gt;</span></div>
    <div class="meta m2"><span>&lt;meta name="robots" content="<em>max-snippet:0</em>"&gt;</span></div>
    <span class="tagx t3 warn">No direct input for AI Overviews or AI Mode</span>
    <span class="tagx t4 warn">max-snippet:0 = nosnippet</span>`,
  plan: () => `
    <div class="myth m0"><small>Special optimizations for AI features</small><b>None needed</b><i>✕</i></div>
    <div class="myth m1"><small>"Fan-out" schema markup (hypothetical)</small><code>"@type": "FanOutAnswer"</code><i>✕</i></div>
    <div class="chk">${["Crawling allowed", "Important content in text", "Markup matches visible text"].map((c, i) => `<div class="ck k${i}"><i>✓</i>${c}</div>`).join("")}<div class="ck k3 pi"><i>✓</i>Cover the subtopics <small>practitioner inference</small></div></div>
    <div class="perf"><small>Search Console · Performance</small><svg viewBox="0 0 100 30"><path d="M2,26 L15,22 L28,24 L41,17 L54,19 L67,12 L80,14 L98,6"/></svg><span>AI feature traffic included in search traffic</span></div>`
};
const HOOKS = {};
