/* Scenes for T8 Tokenization and normalization: SCENES maps scene.id to stage markup. */
const T8_WORDS = ["Fly", "to", "Leeds", "to", "ski"];
const SCENES = {
  tokens: () => `
    <div class="raw">Fly to Leeds to ski</div>
    <div class="toks">${T8_WORDS.map((w, i) => `<span class="tk w${i}${w === "to" ? " to" : ""}">${w}</span>`).join("")}</div>
    <div class="types"><small>Types</small><span class="ty">Fly</span><span class="ty dup">to <em>×2</em></span><span class="ty">Leeds</span><span class="ty">ski</span></div>
    <div class="dict"><small>Dictionary terms</small><span class="te">fly</span><span class="te">to</span><span class="te">leeds</span><span class="te">ski</span></div>
    <div class="hy"><span class="hw">t-shirt</span><span class="ho">t-shirt</span><span class="ho">t shirt</span><span class="ho">tshirt</span></div>
    <span class="tagx t1">5 tokens</span>
    <span class="tagx t2">4 types</span>
    <span class="tagx t4">Which split is right?</span>`,
  normalize: () => `
    <div class="pair p1"><span class="vr">USA</span><span class="vr">U.S.A.</span><i>→</i><span class="eq">usa</span></div>
    <div class="pair p2"><span class="vr">Leeds</span><span class="vr">LEEDS</span><span class="vr">leeds</span><i>→</i><span class="eq">leeds</span></div>
    <div class="pair p3"><span class="vr">C.A.T.</span><span class="vr">cat</span><i>→</i><span class="eq bad">cat</span></div>
    <div class="cons"><div class="side q"><small>Query</small><b>U.S.A.</b><em>usa</em></div><span class="mt">match ✓</span><div class="side d"><small>Document</small><b>USA</b><em>usa</em></div></div>
    <span class="tagx t0">Canonical form</span>
    <span class="tagx t3">Company or animal?</span>`,
  stems: () => `
    <div class="freq"><small>Sorted by collection frequency</small>${[["the", 96], ["to", 88], ["of", 80], ["and", 74], ["flights", 22], ["london", 14]].map(([w, v], i) => `<div class="fr f${i}"><b>${w}</b><span><i style="width:${v}%"></i></span></div>`).join("")}</div>
    <div class="qry"><small>Query</small><span>flights</span><span class="sw">to</span><span>London</span><em>flights London: from or to?</em></div>
    <div class="forms"><span>ski</span><span>skis</span><span>skiing</span><i>→</i><b>base form</b></div>
    <div class="cmp"><div class="cx st"><small>Stemming</small><span>flights → flight</span><em>chops off the ends</em></div><div class="cx lm"><small>Lemmatization</small><span>flew → fly</span><em>vocabulary and morphology</em></div></div>
    <div class="tr"><div class="bar rc"><small>Recall</small><span><i></i></span><b>up</b></div><div class="bar pr"><small>Precision</small><span><i></i></span><b>down</b></div></div>
    <span class="tagx t0">Stop list</span>`,
  stuffing: () => `
    <div class="brief"><small>Writer's brief</small><span>cheap flights</span><span>cheap flight</span><span>cheaper flights</span><em>in every paragraph</em></div>
    <div class="group"><span>cheap flights</span><span>cheap flight</span><i>→</i><b>cheap flight</b><small>Practitioner inference for Google</small></div>
    <div class="page"><small>Page copy</small><p>Cheap flights. Cheap flight deals. Cheap flights cheap flights. Book cheap flight...</p></div>
    <span class="tagx t2">Keyword stuffing</span>
    <span class="tagx t3">Sounds unnatural</span>
    <div class="fix"><div class="lane"><small>Query</small><span>Cheap-Flight</span><i>→</i><b>cheap flight</b></div><div class="lane"><small>Documents</small><span>cheap flight</span><i>→</i><b>cheap flight</b></div><em>Same rules, both sides</em></div>`
};
const HOOKS = {};
