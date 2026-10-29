/* Scenes for T55 Content quality, E-E-A-T and information gain: SCENES maps scene.id to stage markup. */
const SCENES = {
  first: () => `
    <div class="pc ok1"><small>written for</small><b>people</b>${'<i></i>'.repeat(3)}</div>
    <div class="qs"><small>Google's questions</small><p class="q1"><b>✓</b>original information, reporting, research or analysis?</p><p class="q2"><b>✓</b>substantial value compared with other results?</p></div>
    <div class="pc bd1"><small>written for</small><b>search engine visits</b>${'<i></i>'.repeat(3)}</div>
    <span class="tagx t4">not aligned with what Google's systems seek to reward</span>`,
  eeat: () => `
    <div class="lt">${[['E', 'experience'], ['E', 'expertise'], ['A', 'authoritativeness'], ['T', 'trustworthiness']].map(([l, w], i) => `<div class="tl l${i}"><b>${l}</b><span>${w}</span></div>`).join('')}</div>
    <span class="tagx t1 ok">trust is most important</span>
    <div class="td"><span>accurate</span><span>honest</span><span>safe</span><span>reliable</span></div>
    <span class="tagx t3 warn">not a specific ranking factor · many factors</span>
    <div class="ym"><small>topics that could significantly impact</small><p><span>health</span><span>financial stability</span><span>safety</span></p><b>→ even more weight on strong E-E-A-T</b></div>`,
  whw: () => `
    <div class="cw w0"><b>Who</b><p class="a">Is it self-evident who authored the content?</p></div>
    <div class="cw w1"><b>How</b><p class="a">Is automation, including AI-generation, self-evident?</p><p class="c">Extensive automation on many topics?</p></div>
    <div class="cw w2"><b>Why</b><p class="a">perhaps the most important question</p></div>`,
  myth: () => `
    <div class="rt"><small>quality raters</small><b>rater data</b></div>
    <div class="ra"><span class="no">✗ ranking algorithms</span><span class="fb">→ feedback cards: are systems working?</span></div>
    <span class="tagx t2">no single rating directly impacts rank</span>
    <div class="pt"><small>Google patent · US20200349181A1</small><b>Contextual estimation of link information gain</b><span>information gain score = additional information in a document</span></div>
    <span class="tagx t4 warn">a patent describes an idea, not confirmed Search use</span>`
};
const HOOKS = {};
