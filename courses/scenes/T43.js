/* Scenes for T43 Google's AI ranking systems: SCENES maps scene.id to stage markup. */
const SCENES = {
  rankbrain: () => `
    <span class="yr">2015 · RankBrain · first deep learning system in Search</span>
    <div class="ws"><i>words</i><i>→</i><b>concepts</b></div>
    <div class="qq"><small>query</small><span>what's the title of the consumer at the highest level of a food chain</span></div>
    <div class="cc"><small>concept</small><b>apex predator</b></div>
    <div class="pg2"><small>a page that never uses the query's words</small><span>Apex predators: lions, orcas and eagles</span><i>✓</i></div>`,
  bert: () => `
    <span class="yr">2019 · BERT · a huge step change in language understanding</span>
    <div class="ctx"><i>flights</i><i class="pp">to</i><i class="tg">Lisbon</i><i class="pp">from</i><i>Boston</i></div>
    <span class="ar al">← words before</span><span class="ar ar2">words after →</span>
    <div class="flip"><code>flights <b>from</b> Lisbon <b>to</b> Boston</code><em>same words, other direction</em></div>
    <div class="sc s0"><small>2019 launch</small><span class="bb"><i></i></span><em>1 in 10 U.S. English searches</em></div>
    <div class="sc s1"><small>2022</small><span class="bb"><i></i></span><em>almost every English query</em></div>`,
  systems: () => `
    <div class="sy nm"><b>Neural matching</b><small>2018 · fuzzier concepts</small></div>
    <div class="sy ps"><b>Passage ranking</b><div class="sx"><i></i><i class="hi"></i><i></i></div></div>
    <div class="dots">${'<i></i>'.repeat(60)}</div>
    <span class="hm">hundreds of algorithms and models, each with a specialized role</span>
    <div class="sy bt"><b>BERT</b><small>never working alone</small></div>`,
  mum: () => `
    <div class="mm"><b>MUM</b><small>Multitask Unified Model</small></div>
    <div class="pw"><span>BERT</span><i class="b1"></i><span>MUM</span><i class="b2"></i><em>a thousand times more powerful</em></div>
    <div class="ch"><i>75 languages</i><i>many tasks</i><i>text</i><i>images</i></div>
    <div class="use u0"><span>general ranking</span><i>✕</i></div>
    <div class="use u1"><span>some specific applications</span><i>✓</i></div>
    <span class="tagx t4">check Google's ranking systems guide first</span>`
};
const HOOKS = {};
