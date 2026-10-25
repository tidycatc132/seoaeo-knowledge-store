# Review R7b (second pass: T59-T64 + T56-L2-03)

Checked against S600-S608, S512, S007, S106, S101 and the R7 table. No fetching, no edits to bank/research files. 53 items: 45 pass, 8 fix, 0 cut. Level counts 3/3/2/2 correct (T63 = L1 + L2). Summaries under 150 words. R7 fixes held: "under any conditions" filler is gone (0 hits in all six files); T59 summary now says "mainly"; T64-L2-02 key now rests on S007#P2 and "300 million places" distractor corrected to 500 million contributors on the right item; T56-L2-03 option D is contradicted by S600#P6 (pass); T62-L4-01 key is now sourced (S106#P4), inference kept out of the key.

Letters (36 MCQ incl. T56-L2-03): A 9, B 9, C 9, D 9. Not cyclic. Correct option is longest in 0 of 35 MCQs in these files (T56-L2-03 not longest). No filler or padding text in options.

## Fix rows

| item_id | verdict | reason |
|---|---|---|
| T59-L2-01 | fix | S600#P7 is "This tells Google that you're authorized to represent the business"; the quote never names verification, so "verifying tells Google" is not carried by it. Cite S602 or save the sentence with its subject. |
| T60-L4-01 | fix | S601#P5 quote ends "from where"; explanation adds "the business is based", not in the quote. Save full sentence or drop the phrase. |
| T61-L4-01 | fix | Wrong-option rationale for D uses "ranking cannot be paid for" (S600#P6, not cited, and irrelevant to paid review cleanup); evidence (3) is padding. Reword D rationale as "no saved page describes a paid cleanup route" only. |
| T61-L4-02 | fix | S605#P2 is a verb-less fragment; "listed under Fake Engagement" joins P4/P5 (heading, "This includes:") to P2 by adjacency only, which the notes do not prove. Save the list item with its heading in one quote. |
| T62-L1-01 | fix | Answer "address" is not in any saved quote: P5 describes "the physical location of the business" and P6 "The name of the business"; the property names and "Required properties table" membership appear only in labels/summary. |
| T62-L2-03 | fix | Option B ("Required properties include address and name") rests on the same gap. |
| T62-L3-01 | fix | Key C (name + address in the Required table) same gap; other options rejected by absence. T62 summary/action repeat it. |
| T64-L4-02 | fix | Key assumes a nosnippet control removes snippet eligibility. S007#P7/P8 state the eligibility condition and list nosnippet as a control but never connect them; this is inference and is not labelled. "nosnippet control" is also ambiguous (page-level vs data-nosnippet vs max-snippet). Label as inference and specify the page-level meta tag. |

## Specific checks
- S603#P5 ("content and is strictly prohibited"): every prohibition claim (T61-L1-03, L3-01, L3-02, myth 1, summary) cites P3 as well, and P3 carries the subject (incentives ... in exchange for customers to post reviews), so the rule is met. Caveat: the join of P3 to P5 is by adjacency; the saved text does not show P5 completes P3's sentence. Recommend saving the full sentence. No item rests on P5 alone.
- T64-L4-02 nosnippet case: see fix row; only A defensible; B, C, D wrongly reasoned but fine.
- T61-L4-01 flagging case: one defensible answer (C, S604#P3); see fix row for D rationale.
- T62-L4-01: sound (S106#P4 supports "signals the homepage should be canonical"); evidence items (2),(3) are mild padding.
- T62-L4-02: key D (claim) supported by S512#P1/P2; "markup replaces profile" rejected by absence, acceptable.
- T64-L2-02: key B sourced; it is the only option not beginning "Google guarantees", a mild tell.
- T56-L2-03: pass; S507#P2, S508#P2, S512#P2, S600#P6 all exist and support the options.
- Practitioner inference backs no key. Inference appears only on wrong options (T59-L3-01 B, T64-L4-01 C, T64-L4-02 C), labelled.

## Difficulty calibration (read-only; compared with T40 and T53 L1-L4)
Reference: T40/T53 L2 items need a rule or mechanism; L3 apply a documented fix; L4 weigh evidence where a distractor is plausible (e.g. T53-L4-02 data-nosnippet vs nosnippet, T40-L4-01).
Too easy for level:
- L2 recall fill-ins that restate one quote with no reasoning: T59-L2-01, T60-L2-01, T61-L2-01, T62-L2-01, T64-L2-01.
- L3 that is L1 recall: T62-L3-01 (which pair is in the table), T62-L3-02 (phone has no codes), T64-L3-02 (restates T64-L1-03), T59-L3-01 (obvious).
- L4 where evidence states the answer and distractors are absurd (pay Google, wait, buy reviews): T59-L4-01, T59-L4-02, T60-L4-02, T61-L4-01, T64-L4-01.
Too hard: none. T64-L4-02 and T62-L4-01 are the best-calibrated L4s.
Also weak: T59-L3-02 (spot-the-error; key is a restated definition).

## Pattern summary
1. Remaining defects are quote-support gaps, not filler: required property names (T62), a subject-less "This tells Google" (T59), an unlabelled nosnippet inference (T64).
2. Fragment quotes (S603#P3/P5, S605#P2) still lack the sentence joins; items cite both halves, which is acceptable but fragile.
3. Difficulty is skewed low at L2-L4 in the local cluster; many L4 items are single-fact lookups with absurd distractors.
