# Review R3 (fact-check of T42, T16, T18, T26, T1, T2, T17, T19)

Checked 48 items (4 kept topics x 10, 4 condensed x 2) against research/sources S016, S200-S223. Result: 33 pass, 15 fix, 0 cut. Level counts (3/3/2/2; condensed 1+1) are correct, summaries are all under 150 words, all cited passage ids exist.

| item_id | verdict | reason |
|---|---|---|
| T42-L1-01 | fix | S202#P4 quote ("corresponds to no length normalization.") has no "b = 0" subject; the answer depends on it. Re-save the quote with "b = 0". |
| T42-L1-02 | fix | Explanation says once-in-few-docs is "weighted lower than the highest case"; saved S200 quotes (P2, P3) do not say that. Drop or save the passage. |
| T42-L2-02 | fix | Explanation puts 'doesn't really matter or makes sense' in quotes as Mueller's words; S210#P1 reads "I don't think that really matters or makes sense." Use the exact text. |
| T42-L3-01 | fix | "A larger k1 moves toward using raw term frequency" is not in S202#P1/P2. Remove. |
| T42-L4-01 | fix | Same inexact Mueller quote as L2-02. |
| T42-L4-02 | fix | Evidence (3) and option D rely on "b = 0 corresponds to no length normalization", which the saved S202#P3/P4 text does not state in one passage. |
| T16-L1-02 | fix | "float" and "element_type" are not in any saved S216 quote (P2/P3); the answer and explanation depend on that qualifier. |
| T16-L3-02 | fix | Open answer "squared" has near-synonyms ("square") that exact-match would reject; convert to MCQ or fix accepted forms. |
| T16-L4-02 | fix | Wrong-option reasoning ("stated for float vectors, not integers") needs the missing "float" text; same gap as L1-02. |
| T18-L2-01 | fix | Explanation claims the paper "chose the simpler inner product function and improved the retriever by learning better encoders"; S212#P5 only has the definition. Also typed why_it_works but it is a recall of the formula. |
| T26-L1-02 | fix | S214#P2 quote is just "Defaults to 60"; it never names rank_constant. Re-save with the parameter name. |
| T1-L1-01 | fix | Answer is a three-item list ("AND, OR, NOT"); order and spacing make exact matching fragile. Reword to one term or MCQ. |
| T1-L2-01 | fix | Explanation says quotes are a Google Search feature but the item cites no source (S222 exists but is not cited). |
| T17-L1-01 | fix | "exact" and "brute-force" labels are not in the S218#P2 quote, which starts at "scores every matching document". Add the sentence start to the saved quote. |
| T19-L2-01 | fix | "after correcting an evaluation mistake" is not in S221#P2/P3 quotes (only in the note summary). Remove or quote the editor's note. |

Passes: 33 (T42: 4, T16: 7, T18: 9, T26: 9, T2: 2, T17: 1, T19: 1).

## Patterns

- Truncated quotes: several saved passages drop the subject (b = 0, rank_constant, float, exact), so items rest on text that is not saved. Fix the source notes first.
- Misquoted paraphrase: Mueller's line is quoted inexactly twice (T42).
- Redundancy: T16-L1-03/L2-01/L4-01 test the same <#> fact; T26-L1-03/L2-01 the same abstract sentence; T16-L2-02 repeats its myth. Several "why_it_works" and "spot_the_error" items are plain recall (T18-L2-01, T26-L2-01, T26-L3-02, T16-L3-02).
- Multi-word open answers ("full-text and vector", "document rankings", "Dense Passage Retrieval") risk matching failures.
- Summary claims not backed by a saved quote: T16 (Euclidean/Manhattan "measure gaps rather than angles", "so Elasticsearch requires unit length", "metric is set by how the model was trained"), T18 ("explains why semantic matching can find passages sharing meaning but not words").
- MCQ keys: 23 MCQs, correct letters A8/B5/C5/D5 (A slightly heavy; T16 has no A, T18 no B). The correct option is never the longest, but often the shortest (T42-L2-02, T42-L4-02, T17-L2-01, T18-L1-02, T18-L2-03, T26-L4-02).
- Honesty is generally good: "paper cannot show what Google uses" is stated; practitioner inference is labelled; no level-4 item has two defensible options.
