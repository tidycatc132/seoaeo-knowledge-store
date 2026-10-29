/* Scenes for T47 Passages and chunks: SCENES maps scene.id to stage markup. */
const SCENES = {
  needle: () => `
    <div class="qy">query: <b>how long to break in leather hiking boots</b></div>
    <div class="doc"><small>Hiking boot buying guide</small>${'<i></i>'.repeat(9)}<i class="ans">Most leather boots need about two weeks of short walks to break in.</i>${'<i></i>'.repeat(3)}</div>
    <span class="psg">passage</span>
    <span class="ndl">needle-in-a-haystack answer, found</span>
    <span class="tagx t4">2020: would improve 7% of queries</span>`,
  sections: () => `
    <div class="rs r0"><small>broader page on the topic</small><b>Everything about hiking boots</b></div>
    <div class="rs r1"><small>page with the right passage</small><b>Breaking in leather boots: two weeks</b><i>more relevant ✓</i></div>
    <span class="ov">→ applies to how pages rank overall</span>
    <div class="pg1"><small>one guide, clear sections</small><span class="h">H2 Fit</span><span class="h">H2 Waterproofing</span><span class="h hi">H2 Break-in</span><span class="h">H2 Care</span><em>helps judge the page's relevance</em></div>
    <div class="th"><small>twelve thin URLs</small><div>${'<i></i>'.repeat(12)}</div><b>not needed ✕</b></div>`,
  chunks: () => `
    <div class="lim"><small>embedding model input limit</small><b>8,191 tokens</b></div>
    <div class="dw"><small>manual, ~20,000 tokens</small><div class="bar"><span class="in"></span><span class="cut">lost to truncation</span></div></div>
    <div class="dc"><small>chunked</small><div class="pcs">${'<i></i>'.repeat(8)}</div><em>each piece under the limit ✓</em></div>
    <div class="sm"><small>short FAQ, 400 tokens</small><span>fits whole: chunking not required</span></div>
    <div class="st"><b>512</b><span>tokens per chunk</span><b>25%</b><span>overlap = 128 tokens</span><em>Azure's starting point</em></div>`,
  methods: () => `
    <div class="mt m0"><small>by heading</small><div class="sg"><i>## Fit</i><i>## Waterproofing</i><i>## Break-in</i></div></div>
    <div class="mt m1"><small>by sentence</small><div class="sg"><i>Boots stretch.</i><i>Wear thick socks.</i><i>Walk short routes.</i><i>Add distance.</i></div></div>
    <div class="mt m2"><small>by meaning</small><div class="sg"><i class="w">how boots stretch, and why socks matter</i><i class="w">a two-week walking plan</i></div></div>
    <div class="olp"><small>overlap</small><div class="ob"><span class="a">chunk 1</span><span class="x">shared</span><span class="b">chunk 2</span></div><em>continuity and context</em></div>
    <span class="tagx t4 ok">pick a size that works for all your models</span>`
};
const HOOKS = {};
