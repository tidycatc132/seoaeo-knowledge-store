# Review D: fact-check of difficulty-editor rewrites

Script check across all 37 files in bank/items: JSON valid, every S###P# reference (items and myths) resolves to a saved passage, no malformed or non-passage-level ids.

Reviewed: 18 named items, 55 open-answer keys (L1/L2 items with no options and a non-True/False answer), 9 myths in T7, T12, T29, T44, T48.

| item_id | pass/fix | reason |
|---|---|---|
| T16-L2-01 | fix | Explanation uses the Elastic score formula (1 + dot)/2 and "cosine is a similarity", which sit in S216#P7 and S216#P4; neither is in source_ids. Add them or cut the parenthetical. |
| T53-L4-02 | fix | Evidence (2) "nosnippet applies to all forms of search results" is S501#P1, which is not cited (only S501#P2 is). Add S501#P1. |
| T32-L4-02 | fix | Wrong-option explanations use facts missing from the cited quotes: "a sitemap entry invites more crawling" has no source, and "canonical to the category keeps status 200" is unsupported. S104#P8 says "these methods" without the quoted text naming canonical; cite S104#P7 or drop the claim. |
| T55-L4-02 | fix | Correct option C is far the longest (breaks the rule). The label 'Crawled - currently not indexed' is not in S119#P1's quote (only "crawled by Google but not indexed"). |
| T56-L4-02 | fix | Prompt asks for a "single action", but D bundles two actions and B says "do nothing else"; the best answer is arguably the combined one, so the question is ambiguous. "Disallowing Googlebot hides pages" is also unsourced. Reword the question to "which step does the page tie to the Maps symptom" with option D as only "Claim the Business Profile". |
| T57-L3-02 | fix | Correct option A is the longest option. Shorten A or lengthen the others. Facts otherwise check out. |
| T12-L4-01 | fix | "Page text should be visible to readers" goes beyond S009#P2, which is about structured data only; reword the wrong-option explanation for the synonym list. Labelled as practitioner inference correctly. |
| T22-L1-01 | fix | Prompt quotes "each pair of urls" and the answer is "pair": the answer is given away. Remove the quoted phrase or ask for something else. |
| T44-L2-01 | fix | The property name "sameAs" appears only in the passage heading label of S011#P3; the quote itself does not contain it. Low risk, but strictly the answer is not in a quote. Add a quote naming sameAs or accept as heading. |
| T12-L1-01 | fix | "A different step from spelling correction" is not in S001#P2 and S003 is not cited. Cut or cite S003. |
| T56-L1-01 | fix | Key "400 million" mixes number and word; exact-match risk (400,000,000 / 400M). Ask for the number in millions, answer "400". |
| T5-L2-01 | fix | Key "Non-zero" has a hyphen; "nonzero" would not match. Change prompt to accept either or ask a different blank. |
| T32-L1-01 | fix | Cosmetic: explanation ends "URLs,." |
| Myth T7 #2 (precision at 10 unreliable) | fix | The quote "it is the least stable" (S004#P2) has no antecedent unless S004#P1 (precision at fixed low levels) is cited; add S004#P1. |
| Myth T29 #1 (fluent answer = working) | fix | "An answer can pass one and fail the other" is inference beyond S017#P3/P4; label it as practitioner inference. |

## Pass count

Passed with no change: 11 of 18 named items (T18-L4-02, T44-L1-03, T25-L2-02, T12-L3-02, T48-L2-03, T39-L2-01, T22-L3-01, T47-L3-01, T58-L3-01, T29-L3-01, T7-L4-02), 49 of 55 open-answer keys, and 7 of 9 myths. Fix rows: 7 named items, 6 open-answer keys, 2 myths (15 total).

Wording labels (Google says / paper describes / practitioner inference) were intact in all items checked. Worked-example answers (T22-L3-01 freshness, T47-L3-01 256, T58-L3-01 5, T29-L3-01 faithfulness) match their quotes.
