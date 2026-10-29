/* Scenes for T5 The inverted index: SCENES maps scene.id to stage markup. */
const T5_DICT = [["boiler", [2, 7, 15]], ["repair", [2, 9, 15, 21]], ["Leeds", [7, 15]], ["roof", [4]]];
const SCENES = {
  scan: () => `
    <div class="stack">${Array.from({ length: 6 }, (_, i) => `<span class="doc d${i}"></span>`).join("")}${Array.from({ length: 12 }, (_, i) => `<span class="doc more m${i}"></span>`).join("")}<span class="scanl"></span></div>
    <div class="qq">boiler repair</div>
    <span class="tagx t0">Linear scan: read every document</span>
    <span class="tagx t1">…for every single query</span>
    <div class="idx"><small>Built in advance</small><b>Index</b><span>boiler → 2, 7, 15</span><span>repair → 2, 9, 15</span></div>
    <span class="arr">→</span>
    <span class="tagx t3">The inverted index</span>`,
  postings: () => `
    <div class="mx">${Array.from({ length: 48 }, (_, i) => `<span class="${[3, 9, 14, 22, 29, 31, 40, 45].includes(i) ? "one" : ""}">${[3, 9, 14, 22, 29, 31, 40, 45].includes(i) ? 1 : 0}</span>`).join("")}</div>
    <span class="tagx t0">Extremely sparse: few non-zero entries</span>
    <div class="dict">${T5_DICT.map(([t, ds], i) => `<div class="drow r${i}"><b>${t}</b><span class="ar">→</span><span class="pl">${ds.map(d => `<i>${d}</i>`).join("")}</span></div>`).join("")}</div>
    <span class="tagx lab1">Dictionary</span>
    <span class="tagx lab2">Postings list</span>
    <span class="tagx t3">Sorted by docID</span>`,
  pipeline: () => `
    <div class="steps"><span class="st s0">Collect</span><span class="st s1">Tokenize</span><span class="st s2">Preprocess</span><span class="st s3">Index</span></div>
    <div class="out o0"><div class="docc">“Boiler-Repair for Leeds homes”</div></div>
    <div class="out o1">${["Boiler-Repair", "for", "Leeds", "homes"].map(t => `<span class="tok">${t}</span>`).join("")}</div>
    <div class="out o2">${["boiler", "repair", "for", "leeds", "home"].map(t => `<span class="tok n">${t}</span>`).join("")}</div>
    <div class="out o3">${[["boiler", "1"], ["home", "1"], ["leeds", "1"], ["repair", "1"]].map(([t, d]) => `<span class="pp"><b>${t}</b> → ${d}</span>`).join("")}</div>
    <span class="tagx note">Illustration: normalization choices vary</span>`,
  statuses: () => `
    <div class="lane"><span class="bx b-d">Discovered</span><span class="bx b-c">Crawled</span><span class="bx b-i">Indexed</span></div>
    <div class="url">/new-post</div>
    <span class="tagx t0">Indexing: working out what the page is about</span>
    <span class="tagx t1">Indexing isn’t guaranteed</span>
    <span class="tagx t2">Discovered – currently not indexed</span>
    <span class="tagx t3">Crawled – currently not indexed</span>
    <div class="keep"><div class="kc bad"><b>robots.txt Disallow</b><span>Can still be indexed if linked from other sites</span></div><div class="kc ok"><b>noindex or password</b><span>Keeps the page out of Google</span></div></div>`
};
const HOOKS = {};
