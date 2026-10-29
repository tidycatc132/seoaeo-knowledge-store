/* Scenes for T53 Featured snippets and direct answers: SCENES maps scene.id to stage markup. */
const SCENES = {
  box: () => `
    <div class="qp">how often to water a fern</div>
    <div class="fs"><small>featured snippet: snippet first</small><p class="tx">Water a fern when the top of the soil feels dry, usually …</p><p class="sr">plant-guide.example › fern-care</p></div>
    <div class="rr"><small>regular result: title first</small><p class="tt">Fern care basics</p><p class="sr">fern-shop.example</p><p class="ds">Everything you need to know about …</p></div>
    <span class="tagx t1">a little piece of a website</span>
    <div class="pa"><small>People also ask</small><p>Do ferns like sun? <b>+</b></p><p class="op">Why are my fern's leaves brown? <b>−</b><span>snippet</span></p><p>Can ferns live indoors? <b>+</b></p></div>
    <span class="tagx t3">usually one box, sometimes more</span>
    <div class="pg2"><small>plant-guide.example</small><i></i><i></i><p>How often to water</p><i></i><i></i><em>← a click lands here</em></div>`,
  pick: () => `
    <div class="cd">${['page A', 'page B', 'page C'].map((t, i) => `<div class="cc c${i}"><small>${t}</small><i></i><i></i></div>`).join('')}</div>
    <div class="gs"><b>Google systems decide</b><small>for this search request</small></div>
    <div class="cr"><span>how well it answers</span><span>how helpful it is</span></div>
    <div class="mk"><code>&lt;featured-snippet&gt;</code><b>You can't.</b></div>
    <div class="ln"><small>exact minimum length</small><b>not provided</b></div>
    <span class="tagx t4 ok">only if enough text can be shown to be useful</span>`,
  ctrl: () => `
    <div class="cl l0"><code>nosnippet</code><span>whole page: no featured or regular snippets</span><div class="ai"><s>AI Overviews input</s><s>AI Mode input</s></div></div>
    <div class="cl l2"><code>data-nosnippet</code><span>only the marked text stays out</span></div>
    <div class="cl l3"><code>max-snippet</code><div class="sl"><i></i></div><span>shorter → less likely · no guarantee</span></div>
    <span class="tagx t4 warn">max-snippet:0 = nosnippet</span>`,
  trade: () => `
    <div class="fx"><small>featured snippet</small><p>…</p><b>taken down</b></div>
    <span class="tagx t1">policy: contradicting consensus on public interest topics</span>
    <div class="el"><small>AI supporting link needs</small><p>✓ indexed</p><p>✓ eligible to show with a snippet</p></div>
    <div class="pp p0"><small>nosnippet on the page</small>${'<i></i>'.repeat(5)}<em>all snippets and AI input blocked</em></div>
    <div class="pp p1"><small>data-nosnippet on one paragraph</small><i></i><i></i><i class="x"></i><i></i><i></i><em>only the disclaimer stays out</em></div>`
};
const HOOKS = {};
