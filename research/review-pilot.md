# Pilot fact-check review (fact-checker F)

All 50 cited source id#passage refs exist in research/sources/. Level counts are 3/3/2/2 in all five topics. All summaries are under 150 words (T12 119, T29 128, T44 134, T48 111, T7 135). Verdicts below test whether the saved quote supports the fact the item depends on.

| item_id | verdict | reason |
|---|---|---|
| T12-L1-01 | pass | S001#P2 supports the answer verbatim. |
| T12-L1-02 | pass | S002#P3 supports B. "Expands the query" is implied by P2 (drift), not quoted. Distractor A rests loosely on S001#P1. |
| T12-L1-03 | pass | S002#P2/P4 support it. |
| T12-L2-01 | fix | S001#P4 says recall rises, but the stated mechanism ("different words become matchable") is not in any saved quote. The explanation's "mechanism" is only the definition. The answer is a long sentence and not exactly matchable. |
| T12-L2-02 | fix | S007#P2 (AI Overviews requirements) is stretched to refute a synonym-list claim. B is a long hedged option and the longest, so it is guessable. |
| T12-L2-03 | pass | D is clearly spelling correction. The claim that PRF "adds terms" is implied only by S002#P3. |
| T12-L3-01 | pass | Supported by S002#P2-P4. |
| T12-L3-02 | pass | S006#P1/P2 support B. B is the longest option. |
| T12-L4-01 | fix | The action (cover sub-questions) is inference, not documented. S007#P2 says no special optimization is needed, and no passage says fan-out coverage helps inclusion. The explanation says it "fits the documented fan-out" without labelling the step as inference. S009#P2 is not cited for the hidden-text claim. |
| T12-L4-02 | fix | S005#P2 is about prepositions in queries, with "for" and "to" and not "from". Moving that to title wording is inference and is not labelled. The dated 2019 announcement is used as the basis for present-tense action. |
| T7-L1-01 | pass | S016#P2 verbatim. |
| T7-L1-02 | fix | The explanation calls "average of graded gains" DCG-style, which is wrong (DCG is a discounted sum). The distractor D explanation ("closer to average precision") is unsupported by cited passages. |
| T7-L1-03 | pass | S004#P5 and S015#P2 support it. |
| T7-L2-01 | fix | The answer restates the definition rather than explaining "why best-first is rewarded". The explanation claims normalisation makes scores "comparable across queries"; S016#P5 does not say that. |
| T7-L2-02 | pass | S015#P3 supports B. B is the longest option. |
| T7-L2-03 | fix | A, B and C are three spellings of NDCG, so the item is trivially guessable and tests nothing. D is unambiguous, but the item is low value. |
| T7-L3-01 | fix | The arithmetic is right (0.583). The answer string "0.583 (7/12)" holds two formats, which breaks exact matching. The averaging step is not in S016#P1, which quotes only the per-query reciprocal. |
| T7-L3-02 | pass | S016#P2/P3 support it. |
| T7-L4-01 | fix | The "unlabeled counted irrelevant by default" fact is not in S016#P6. The saved quote says only that setting true ignores unlabeled. Evidence (3) and the T7 summary/action ("a common default") rest on an unsaved sentence, and generalising Elastic's default to "tools" is unsupported. |
| T7-L4-02 | pass | The answer is unique. S017#P3 supports the faithfulness definition. |
| T29-L1-01 | pass | S017#P3 verbatim. |
| T29-L1-02 | pass | S018#P1 verbatim. |
| T29-L1-03 | pass | S017#P1/P2. |
| T29-L2-01 | fix | The answer is a long sentence and not matchable. S017#P5 is truncated ("exclusively contains information"), and the explanation adds "needed", which is not in the saved quote. |
| T29-L2-02 | pass | S017#P3/P4 support B. |
| T29-L2-03 | pass | Supported by S018#P1. D is an obvious distractor. |
| T29-L3-01 | pass | Supported by S017#P3/P5. The "context relevance / faithfulness" key could miss the ARES wording "answer faithfulness". |
| T29-L3-02 | pass | The paper-vs-engine attribution is correctly labelled unconfirmed. |
| T29-L4-01 | pass | The answer is unique and the sample size is flagged as hypothetical. |
| T29-L4-02 | pass | B is the only viable option. The "judges are estimates" caution is labelled as not quoted. ARES is not shown to be reference-free in the saved quotes. |
| T44-L1-01 | pass | S008#P1 is truncated at "classifying", so "its content" is not in the saved quote. The answer is long. |
| T44-L1-02 | pass | S008#P3 and S010#P2 support C. |
| T44-L1-03 | pass | S007#P2/P3 support it. |
| T44-L2-01 | fix | S011#P2 says "some properties" disambiguate and does not name sameAs. The answer and explanation fuse S011#P2 and P3. The answer is also a long sentence. |
| T44-L2-02 | fix | S008#P4 begins "otherwise ...", so the antecedent ("follow the general guidelines") is not in the saved quote. The item's central claim is only partly supported. |
| T44-L2-03 | pass | S009#P1-P3 support it. |
| T44-L3-01 | pass | S011#P4 verbatim. |
| T44-L3-02 | pass | S009#P1/P2/P4 support B. |
| T44-L4-01 | pass | The answer is unique. S009#P5 and S007#P3 support the distractor refutations. |
| T44-L4-02 | fix | Same sameAs-equals-disambiguation conflation as T44-L2-01 ("documented purpose of sameAs and disambiguation"). Evidence (3) is worded accurately, but the explanation overclaims. |
| T48-L1-01 | pass | S013#P1 verbatim. |
| T48-L1-02 | pass | S013#P3 supports C. |
| T48-L1-03 | pass | S013#P4/P5. |
| T48-L2-01 | fix | The answer is a long sentence and not matchable. The causal "because" is the item's inference from P1/P3. |
| T48-L2-02 | pass | S013#P4 and S014#P1/P2 support B. B is the longest option. |
| T48-L2-03 | fix | "Exactly three classes" is not in any saved Broder passage; S013's own summary admits this. The item duplicates T48-L1-02's options, so it adds nothing. |
| T48-L3-01 | fix | "Download = web-mediated activity" is not in the saved quotes, and "informational" is defensible from them alone (the key depends on an unsaved Broder download subcategory). The key has two parts. |
| T48-L3-02 | fix | S003#P1 does not say spelling correction is a query-side engine step. The 229-char hedged B is a giveaway. The matching action ("spelling correction is handled by the engine") states engine behaviour from a textbook only. |
| T48-L4-01 | pass | The answer is unique. S014#P1/P3 support the multiple-meanings point. |
| T48-L4-02 | pass | The answer is unique and S013#P4 supports it. |

## Myths and actions

- T12 myth 1 (S007#P2/P3): supported. T12 myth 2 (S006): the passage only shows the method; the correction is logic from the source grade and no passage says anything about Google. Treat as weak.
- T7 myths (S015#P3, S004#P2/P4): supported.
- T29 myth 1 (S017): supported only by implication from the separate P3/P4 definitions. T29 myth 2 (S017/S018): an absence claim with no passage; it can only be backed by the source summaries.
- T44 myths (S007, S009): supported.
- T48 myth (S013#P4, S014#P1): supported.
- Unsourced or judgement actions: T12 "do not stuff synonym lists" (judgement); T29 "treat LLM-judge scores as estimates" (no source); T48 "spelling correction is handled by the engine" (textbook only); T7 "common default" (one vendor); T44 and T29 summary claims below.
- T29 summary: "Groundedness is commonly used as a near-synonym of faithfulness" has no source. T44 summary and action: sameAs "helping disambiguate" overreaches S011#P2. T7 summary and T48 summary: "Broder's three" and "commercial investigation" are flagged but unsourced as to the exact count.

## Summary

Counts: 33 pass, 17 fix, 0 cut (50 items).

Main patterns:

1. A fact depends on text outside the saved quote: truncated or missing antecedents (S008#P4, S016#P6 default, S017#P5, S013 "three classes", S011 sameAs).
2. Inference presented as documentation: fan-out to "cover sub-questions", BERT queries to title wording, and a 2019 blog used for present-tense advice.
3. Answer keys: long full-sentence "why" answers that cannot be exact-matched, two-format keys (T7-L3-01, T48-L3-01), and near-duplicate options (T7-L2-03, T48-L2-03 vs T48-L1-02).
4. Test-wise tells: the correct MCQ option is the longest in roughly 14 of 28 items, and B is the key in about 15 of 28. The long hedged options (T12-L2-02, T48-L3-02) are the worst.
5. Distractor explanations sometimes assert unsupported things (T7-L1-02 DCG "average", S007 used against synonym lists).
