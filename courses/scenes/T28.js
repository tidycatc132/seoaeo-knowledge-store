/* Scenes for T28 Agentic and self-reflective RAG: SCENES maps scene.id to stage markup. */
const SCENES = {
  once: () => `
    <div class="cps"><small>Document store</small><div class="dc">Pricing guide · 2024</div><div class="dc">Old launch notes</div><div class="dc">FAQ</div><em>static and limited</em></div>
    <div class="llm"><b>Language model</b></div>
    <div class="out"><small>Answer</small><span>The new plan costs <u>£12 a month</u>.</span><em class="hal">hallucination?</em></div>
    <svg class="ar" viewBox="0 0 100 56" preserveAspectRatio="none"><line x1="31" y1="12" x2="38" y2="12"/><line x1="62" y1="12" x2="68" y2="12"/></svg>
    <span class="tagx t1">relies on relevance of what's retrieved</span>
    <div class="fix"><small>Always 5 passages</small><div class="sl"><i class="ok"></i><i class="ok"></i><i class="bd"></i><i class="bd"></i><i class="bd"></i></div></div>
    <div class="flow"><span>Retrieve on demand</span><i>→</i><span>Grade what came back</span><i>→</i><span class="go">Answer</span></div>`,
  selfrag: () => `
    <div class="qq"><small>Question</small><b>What did last month's rule change?</b></div>
    <span class="tok k0">Retrieve? yes</span>
    <div class="ps p0"><span>Passage 1: the rule now requires…</span><em class="tok cr ok">relevant ✓</em></div>
    <div class="ps p1"><span>Passage 2: a 2019 history of the rule…</span><em class="tok cr bad">not relevant ✕</em></div>
    <div class="gen"><small>Output</small><span>Since last month, the rule requires…</span><em class="tok cr ok">supported ✓</em></div>
    <span class="tagx t1">reflection tokens (labels illustrative)</span>
    <span class="tagx t3">controllable during inference</span>
    <div class="win"><small>Paper's reported result</small><b>Gains in factuality and citation accuracy for long-form answers</b></div>`,
  crag: () => `
    <div class="dz"><small>Retrieved documents</small>${[["Doc 1", 30], ["Doc 2", 20], ["Doc 3", 35]].map(([d, v], i) => `<div class="dd d${i}"><span>${d}</span><div class="mt"><i style="--v:${v}%"></i></div></div>`).join("")}</div>
    <div class="ev"><small>Lightweight evaluator</small><div class="gg"><svg viewBox="0 0 100 55"><path class="arc" d="M10,50 A40,40 0 0 1 90,50"/><line class="nd" x1="50" y1="50" x2="22" y2="28"/></svg><b>confidence: low</b></div></div>
    <div class="ac"><small>Actions (illustrative)</small><div class="an a0">High confidence → use documents</div><div class="an a1">Low confidence → web search</div><div class="web"><span>🌐 web result</span><span>🌐 web result</span></div></div>
    <div class="dcmp"><small>Decompose</small>${["key fact", "boilerplate", "key fact", "unrelated aside"].map((s, i) => `<span class="${i % 2 ? "drop" : "keep"}">${s}</span>`).join("")}</div>
    <div class="rcmp"><small>Recompose</small><b>key fact + key fact</b></div>
    <span class="tagx t4 ok">plug-and-play with other RAG methods</span>`,
  claims: () => `
    <div class="hd h0">Documented by the product</div><div class="hd h1">Research methods</div>
    <div class="cl v0"><small>Azure AI Search</small><b>Subqueries in parallel → best results combined</b><em>unified response for grounded answers</em></div>
    <div class="cl v1"><small>Perplexity</small><b>PerplexityBot surfaces and links websites in search</b></div>
    <div class="cl r0"><small>Self-RAG paper</small><b>Reflection tokens, retrieval on demand</b></div>
    <div class="cl r1"><small>CRAG paper</small><b>Evaluator grades documents, web search</b></div>
    <span class="tagx t3 warn">No saved source says Google, ChatGPT or Perplexity uses these</span>
    <div class="pitch"><small>Agency pitch</small><b>"Reflection-token optimisation"</b><i>✕</i></div>
    <span class="tagx t4 ok">Write passages that answer directly</span>`
};
const HOOKS = {};
