/* Scenes for T57 Technical performance signals: SCENES maps scene.id to stage markup. */
const SCENES = {
  cwv: () => `
    ${[['LCP', 'Largest Contentful Paint', 'loading performance', 'within 2.5 s'], ['INP', 'Interaction to Next Paint', 'interactivity', 'under 200 ms'], ['CLS', 'Cumulative Layout Shift', 'visual stability', 'under 0.1']].map(([a, n, m, g], i) => `<div class="vt v${i}"><b>${a}</b><small>${n}</small><p>measures ${m}</p><em>good: ${g}</em></div>`).join('')}
    <div class="fd"><s>FID</s><span>→ replaced by INP</span></div>
    <span class="tagx t4">the metrics will evolve over time</span>`,
  p75: () => `
    <div class="ds"><small>LCP of 20 page loads, sorted (hypothetical)</small><div class="bars">${[12, 14, 16, 17, 18, 20, 21, 22, 23, 24, 25, 27, 28, 30, 31, 33, 36, 40, 46, 55].map((h, i) => `<i class="${i === 14 ? 'hi' : ''}" style="height:${h * 1.6}%"></i>`).join('')}</div><span class="th">good: 2.5 s</span><span class="mk">75th percentile</span></div>
    <div class="lf"><span class="lb">lab: a test run</span><span class="fl">field: real users ✓</span></div>
    <span class="tagx t2 ok">Chrome User Experience Report: real user data</span>
    <div class="sc"><small>Search Console</small><b>Core Web Vitals report</b></div>
    <span class="tagx t4 warn">good scores don't guarantee top rankings</span>`,
  pe: () => `
    <div class="qq"><p class="a">Good Core Web Vitals?</p><p class="a">Served securely?</p><p class="a">Displays well on mobile?</p><p class="b">Avoids excessive ads?</p><p class="b">Avoids intrusive interstitials?</p></div>
    <div class="rs"><small>Google's ranking systems</small><b>no single signal</b><span>Core Web Vitals are used</span></div>
    <div class="cm"><p class="w1"><b>1</b>most relevant · slower page</p><p class="w2"><b>2</b>less relevant · fast page</p><small>relevance can still win (hypothetical)</small></div>
    <span class="tagx t4 ok">more satisfying to use · generally aligned with what's rewarded</span>`,
  mob: () => `
    <div class="dk"><small>desktop</small><i class="h"></i><i></i><i class="rv2">reviews</i><i class="sd">structured data</i></div>
    <div class="mb"><small>mobile · indexed and ranked</small><i class="h"></i><i></i><i class="rv2">reviews</i><i class="sd">structured data</i></div>
    <div class="rb2"><code>robots.txt: CSS and JS crawlable</code><b>✓</b></div>
    <span class="tagx t4 warn">missing on mobile = missing for indexing</span>`
};
const HOOKS = {};
