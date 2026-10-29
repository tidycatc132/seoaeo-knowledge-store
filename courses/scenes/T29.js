/* Scenes for T29 RAG evaluation: SCENES maps scene.id to stage markup. */
const t29Chip = (cls, name, ok) => `<span class="ch ${cls} ${ok ? "pass" : "fail"}">${name} ${ok ? "✓" : "✕"}</span>`;
const SCENES = {
  parts: () => `
    <svg class="pipe" viewBox="0 0 100 56" preserveAspectRatio="none">${[[17, 23], [37, 43], [57, 63], [77, 83]].map(([a, b]) => `<line x1="${a}" y1="17" x2="${b}" y2="17"/>`).join("")}</svg>
    <div class="nd n0">Question</div><div class="nd n1 mod">Retriever</div><div class="nd n2">Passages</div><div class="nd n3 mod">LLM generator</div><div class="nd n4">Answer</div>
    <span class="tagx t1">several dimensions to consider</span>
    <div class="ck k0"><b>Relevant, focused passages?</b></div>
    <div class="ck k1"><b>Used in a faithful way?</b></div>
    <div class="ck k2"><b>Quality of the answer?</b></div>`,
  three: () => `
    <svg class="tri" viewBox="0 0 100 56" preserveAspectRatio="none"><line class="e0" x1="8" y1="44" x2="52" y2="44"/><line class="e1" x1="30" y1="10" x2="52" y2="44"/><line class="e2" x1="30" y1="10" x2="8" y2="44"/></svg>
    <div class="vx q">Question</div><div class="vx c">Context</div><div class="vx a">Answer</div>
    <span class="el l0">Faithfulness</span><span class="el l1">Answer relevance</span><span class="el l2">Context relevance</span>
    <div class="ares"><small>ARES</small><b>context relevance · answer faithfulness · answer relevance</b></div>
    <div class="score"><small>Score each separately</small><div><span>Context relevance</span><i style="--v:80%"></i></div><div><span>Faithfulness</span><i class="lo" style="--v:35%"></i></div><div><span>Answer relevance</span><i style="--v:85%"></i></div></div>`,
  diagnose: () => `
    <div class="cs c1"><small>Case 1 (hypothetical)</small><div class="qq">What is the refund window?</div><div class="ctx bad">Passage: "Orders ship within 2 days…"</div><div class="ans">"Refunds are accepted within 30 days."</div>
      <div class="chs">${t29Chip("x0", "Context relevance", false)}${t29Chip("x1", "Faithfulness", false)}${t29Chip("x2", "Answer relevance", true)}</div></div>
    <div class="cs c2"><small>Case 2 (hypothetical)</small><div class="qq">What is the refund window?</div><div class="ctx">Passage: "Refunds are accepted within 30 days."</div><div class="ans">"Within 30 days, <mark>plus free return shipping</mark>."</div>
      <div class="chs">${t29Chip("", "Context relevance", true)}${t29Chip("", "Faithfulness", false)}${t29Chip("", "Answer relevance", true)}</div></div>
    <span class="tagx f1 warn">fix retrieval first</span><span class="tagx f2 warn">fix grounding</span>`,
  judges: () => `
    <div class="jc hand"><small>Traditional</small><b>Hand annotations</b><div class="ln">${"<i></i>".repeat(6)}</div></div>
    <div class="jc ragas"><small>Ragas</small><b>Reference-free</b><span>no ground truth human annotations</span></div>
    <div class="jc ares"><small>ARES</small><b>Synthetic training data → lightweight LM judges</b><div class="jd"><span>context</span><span>faithfulness</span><span>answer</span></div><em class="hs">+ small human-annotated set (PPI)</em></div>
    <span class="tagx t4 warn">For pipelines you build or audit, not proof of how engines score themselves</span>`
};
const HOOKS = {};
