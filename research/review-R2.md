# Review R2 (T39, T32, T5, T8, T40, T41, T58)

70 items checked. Pass 52, fix 18, cut 0. All cited S#P# ids exist; level counts 3/3/2/2 and summaries (<150 words) correct everywhere; MCQ correct letters A7 B10 C10 D8, correct option never the longest.

| item_id | verdict | reason |
|---|---|---|
| T39 summary/actions | fix | "1M+ or fast-changing", "smaller sites rarely need it" go beyond S100#P1 (quote has only the 1M+ clause); frontier/priority/politeness sentence has no cite |
| T39-L1-02 | fix | explanation claims duplicate-URL elimination step and DNS module; S117#P3 ("add it to the frontier.") and nothing on DNS support this |
| T39-L2-01 | fix | explanation says guide offers robots.txt for never-wanted URLs; no saved S100 quote says so (P6 is the opposite caution) |
| T39-L3-02 | fix | "Google recommends fixing soft 404s" not in S100#P8 (it only says they waste budget); soften or add quote |
| T39-L4-01 | fix | "guide says block sorted versions via robots.txt" not in saved S100 quotes; correct key only supportable by S104#P4 (not cited) |
| T39-L4-02 | fix | S114#P3 quote lacks the server-error/unreachable condition the prompt and action rely on; also "new sitemap doesn't override robots" unquoted |
| T32-L1-01 | fix | explanation "crawlers cannot tell whether URLs are useful without crawling" not in S104#P4; summary same plus "nofollow help less" (nofollow text truncated per topic note) |
| T5-L2-01 | fix | same answer ("Postings") as L1-01, near-duplicate fact; rewrite to test sparsity differently |
| T8-L1-01 | fix | answer is a sentence, not exact-matchable |
| T8-L1-02 | fix | explanation says shingle = phrase of consecutive words; S112#P2 does not say that |
| T8-L2-02 | fix | key "False" rests on inference that engines stem; sources only show textbook method and keyword-stuffing definition; reframe to what sources state |
| T40-L1-01 | fix | S105#P1 ends at "three main phases:"; the phase names are not in the saved quote |
| T40-L3-02 | fix | "Google's testing tools" not in S121#P3 quote ("to check if the rendered HTML has all content you expect") |
| T41-L1-01 | fix | explanation "shingles are consecutive sequences of terms" not in S112#P2/P3 |
| T41-L1-02 | fix | option D "Neither: all three are strong signals" is incoherent, a throwaway distractor |
| T58-L1-02 | fix | explanation does not say why A, B, C are wrong individually |
| T58-L2-01 | fix | S107#P4 quote ends at "three ways ... to Google:"; names HTML/HTTP header/sitemap are not saved |
| T58-L2-03 | fix | option D (HTML, HTTP header, sitemap equivalent) same missing method names |
| T58-L3-02 | fix | option D (sitemap hreflang) relies on the unsaved method names |

Passes: T39 5, T32 9, T5 9, T8 7, T40 8, T41 8, T58 6 (total 52; counted per item, summary/actions row not counted).

## Patterns
1. Quotes are fragments that omit the very list or condition the item uses (phase names, method names, 5xx condition, shingle definition). Re-save fuller quotes.
2. Wrong-option rationales often assert unquoted mechanics (robots blocking stops rendering, sitemap cannot override robots, DNS module).
3. Several case-file options carry giveaway clauses ("which Google still requests", "less effective long term") and some case files state the answer in evidence (T41-L4-02, T40-L4-02).
4. Near-duplicate facts within a topic (T5 postings, T58 lang attribute L1-03/L2-02, T41 strong signal L1-02/L3-01).
5. Myth correction "textbook does not state how any engine is built" (T5) is an absence claim with no quote; acceptable only as labelled inference.
