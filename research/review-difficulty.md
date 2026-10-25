# Review D: difficulty calibration (whole bank)

Scope: 37 topics, 338 items (33 topics with 10 items; T1, T2, T17, T19 condensed with 2). No fetching, no new facts: every rewrite uses passages already saved in research/sources. No item was re-leveled (counts stay 3/3/2/2); levels were fixed by rewording, so every item_id is unchanged.

## Counts by stage and level

| Stage | Topics | L1 | L2 | L3 | L4 | Total |
|---|---|---|---|---|---|---|
| 1 | 2 | 6 | 6 | 4 | 4 | 20 |
| 2 | 5 | 15 | 15 | 10 | 10 | 50 |
| 3 | 3 | 9 | 9 | 6 | 6 | 30 |
| 4 | 8 | 16 | 16 | 8 | 8 | 48 |
| 5 | 5 | 15 | 15 | 10 | 10 | 50 |
| 6 | 6 | 18 | 18 | 12 | 12 | 60 |
| 7 | 6 | 18 | 18 | 12 | 12 | 60 |
| 8 | 2 | 6 | 6 | 4 | 4 | 20 |
| All | 37 | 103 | 103 | 66 | 66 | 338 |

## Cross-stage level-4 coverage (every stage now has one)

| Stage | Example L4 item combining another stage |
|---|---|
| 1 | T32-L4-02 (adds T40 JavaScript soft-404 evidence, S121#P1/P2) |
| 2 | T41-L4-01 (T39, T32) |
| 3 | T12-L4-01 (related_topics now lists T25; its evidence 1 is the AI-features page) |
| 4 | T26-L4-01 (T7); T18-L4-02 (T7, new) |
| 5 | T21-L4-01 (T12) |
| 6 | T45-L4-01 (T39); T55-L4-02 (T5, new) |
| 7 | T25-L4-01 (T39); T56-L4-02 (T40, new) |
| 8 | T7-L4-02 (T28 CRAG evaluator, new) |

## MCQ balance

- Correct letters across all 200 four-option items: A 50, B 50, C 50, D 50 (was A48/B52/C53/D47). Five items whose options are ordinal (Step/Part/Statement + None) were not reordered. Five items were reordered for balance: T29-L2-02, T22-L1-02, T40-L4-01 (B to D), T25-L2-02, T29-L2-03 (C to A); none has letters in its explanation.
- Length cue: the correct option was the shortest in 74 of 200 items and the longest in only 8. After editing, among the 195 non-ordinal items the correct option is strictly longest in 51 (26%) and strictly shortest in 24 (12%); ties and mid-length options make up the rest. Wording only, same meaning.

## Answer keys

Twelve open-answer keys were sentences or lists (T7-L1-01, T12-L1-01, T29-L1-01, T29-L3-01, T32-L2-01, T39-L1-01, T39-L3-01, T40-L1-01, T41-L3-01, T44-L1-01, T48-L1-01, T51-L1-01). Each prompt now asks for one token (or number). Remaining multiword keys are explicitly 'two words' prompts (two-word keys such as T5-L3-01 and T12-L3-01) or a numeric range (T18-L3-01 '69-79').

Myths in T7, T12, T29, T44, T48 cited bare source ids (S007); upgraded to passage ids (for example S007#P2).

## Table of changes

| item_id | change | reason |
|---|---|---|
| T7-L1-01 | prompt reworded so the key is the single token "precision" | answer was a sentence; not exact-matchable |
| T12-L1-01 | prompt reworded; key now "expansion" | answer was a sentence |
| T29-L1-01 | prompt reworded; key now "context" | answer was a sentence |
| T29-L3-01 | two-part answer "retrieval / answer" reduced to one token "faithfulness" | answer was not a single token |
| T32-L2-01 | prompt reworded; key now "useful" | answer was a phrase |
| T39-L1-01 | prompt reworded; key now "wants" | answer was a phrase |
| T39-L3-01 | asks for the single number "410" | answer was "404 or 410" (two tokens) |
| T40-L1-01 | asks for the middle phase; key "rendering" | answer was a three-item list |
| T41-L3-01 | prompt reworded; key now "content" | answer was a phrase |
| T44-L1-01 | prompt reworded; key now "format" | answer was a sentence |
| T48-L1-01 | prompt reworded; key now "site" | answer was a phrase |
| T51-L1-01 | prompt reworded; key now "freshness" | answer was a three-word phrase |
| T16-L2-01 | rewritten: now tests numerator/denominator vs unit-length vectors instead of document-length compensation | near-duplicate of T2-L2-01 (cosine compensates for document length) |
| T18-L4-02 | rewritten: now a dense-vs-BM25 evaluation case using S212#P3/P4 and S015#P5 (adds stage-8 evaluation evidence) | duplicate of T17-L1-01 (exact kNN scores every document); also was a one-step case |
| T44-L1-03 | rewritten to a different T44 fact (S008#P2) | duplicate of T52-L1-02 (no special schema / no extra requirements for AI features) |
| T25-L2-02 | rewritten around S007#P4 (markup must match visible text) with a different misconception | near-duplicate of T52-L1-02 / T44-L1-03 (no special schema, no extra requirements) |
| T12-L3-02 | rewritten: spot-the-error on expansion needing user input (S001#P5) | near-duplicate of T25-L3-02 (HyDE paper presented as Google behaviour) |
| T48-L2-03 | rewritten to test different facts (Mercury example, transactional definition, minor interpretations) | duplicated T48-L1-03 / T48-L2-02 / T48-L4-02 (intent cannot be inferred with certainty) |
| T39-L2-01 | rewritten to the robots.txt-reallocation advice (S100#P6) | duplicated T39-L3-02 and T39-L4-01 (noindex pages are still requested) |
| T22-L3-01 | prompt no longer quotes the answer phrase "content freshness" | prompt leaked the answer (L3 should require applying the rule) |
| T47-L3-01 | now applies 25% to a new chunk size (256) instead of restating Azure's 128 | L3 was pure recall of a stated figure |
| T58-L3-01 | four versions plus x-default (answer 5) instead of three versions | L3 was trivial counting that the prompt nearly stated |
| T57-L3-02 | rewritten: 75th percentile spot-the-error | duplicate of T57-L1-01 (INP replaced FID) |
| T53-L4-02 | added AI-feature eligibility evidence (S501#P2, S007#P7) so the choice is a trade-off; related T52 | L4 was a one-step lookup (nosnippet vs data-nosnippet) |
| T56-L4-02 | added a second symptom/evidence from T40 (<a href> links) and a trade-off between two real fixes; related T40 | L4 was a one-step lookup |
| T55-L4-02 | added indexing-status evidence from T5 (S119#P1, S120#P3); related T5 | L4 had one piece of evidence and no trade-off |
| T32-L4-02 | added JavaScript-rendered empty state (S121#P1/P2, T40) so noindex becomes a real trade-off; related T40 | stage 1 had no L4 combining another stage; case was single-step |
| T7-L4-02 | added evidence (4) from T28 (CRAG evaluator, S503#P1); related T28 | stage 8 had no L4 combining another stage |
| T12-L4-01 | related_topics now includes T25 (its evidence (1) is the AI-features fan-out passage S007) | stage 3 had no cross-stage L4; the evidence already came from the stage 7 topic |
| T5-L4-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T7-L2-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T8-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T12-L4-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T21-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T22-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T22-L4-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T25-L1-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L1-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L2-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L3-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T28-L4-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T29-L3-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T29-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T32-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T32-L3-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T32-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T39-L1-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T39-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T39-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T41-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T45-L1-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T46-L1-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T46-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T47-L2-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T47-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T47-L3-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T47-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T48-L3-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T49-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T50-L2-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T52-L2-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T52-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T53-L2-03 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T56-L2-02 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T56-L4-01 | correct option expanded (wording only, same meaning) | correct option was the shortest option (length cue) |
| T7-L2-03 | explanation repaired (duplicated phrase in the NDCG sentence) | garbled explanation |
| T29-L2-02 | options reordered, answer B to D | bank-wide letter balance |
| T22-L1-02 | options reordered, answer B to D | bank-wide letter balance |
| T40-L4-01 | options reordered, answer B to D | bank-wide letter balance |
| T25-L2-02 | options reordered, answer C to A | bank-wide letter balance |
| T29-L2-03 | options reordered, answer C to A | bank-wide letter balance |
| T7, T12, T29, T44, T48 (myths) | bare source ids replaced by passage ids | citation precision |

## Labels checked

'Google says' / 'the paper describes' / 'the textbook says' labels, 'unconfirmed' and 'practitioner inference' labels were read in all 338 items and preserved; the new T16-L2-01 and T7-L4-02 text carry explicit 'practitioner inference' and 'analogy, not evidence about any engine' labels.

## Not fixed (judgement calls for the editor)

- Overlap kept on purpose where an L2 fact is reused inside an L4 case: T5-L2-02 / T5-L3-02 / T5-L4-01 (indexing is not guaranteed), T5-L4-02 / T39-L2-02 (a disallowed page can be indexed), T43-L1-02 / T43-L2-02 / T43-L4-02 (MUM is not used for general ranking). Topics with few saved passages cannot avoid this without new sources.
- Slightly too easy for their level: T8-L3-01 (lemmatization is a definition recall), T42-L3-01 (k1=0 means binary, recall), T44-L3-01 ('none' required properties), T48-L3-01, T16-L4-02 (normalize both vectors; one-step), T54-L4-01 (policy naming, no trade-off), T26-L4-02, T40-L4-02, T47-L4-02. Making them harder needs another saved passage or a cross-topic fact; I did not invent one.
- Slightly too hard for L1 recall: T16-L1-01 (pgvector operator symbols), T39-L1-02 (textbook URL frontier queues), T47-L1-02 (Azure chunk size and overlap). They are multiple choice with a stated source, so left at L1.
- Many L2 'unsupported statement' items hold the correct option's cue in the form 'Google confirmed X'; this is consistent across the bank and was kept.
- R6 review items about unsupported claims in T52/T53/T56 (for example T52 action on Performance report, T56 actions) are bank-level text outside items and were not part of this pass.
