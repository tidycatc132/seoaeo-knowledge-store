# Review R4: T21, T22, T43, T50, T51

Counts: 50 items checked. 36 pass, 14 fix, 0 cut. Level counts 3/3/2/2 correct in all five files; summaries all under 150 words; all cited S###P# ids exist. MCQ answer letters are well spread (A6 B7 C7 D6 approx) and the correct option is never the longest.

| item_id | verdict | reason |
|---|---|---|
| T21-L2-01 | fix | Option D "Engines may not score every document" is arguably defensible; explanation quotes a different D ("not allowed") and never rebuts it. "Cost is the reason" is inference from "more computationally-intensive"; label it or reword. |
| T22-L1-01 | fix | S304#P3 quote does not say the pairs belong to RankNet, and "which is why RankNet is called pairwise" is not in any saved quote. Reword to what the quote says; accept "pair" as well as "pairs". |
| T22-L2-01 | fix | Prompt names NDCG; S304#P5/S305#P1 never mention NDCG. Say "ranking measures". |
| T22-L3-01 | fix | Prompt says freshness matters more "for current news"; saved S309#P1 is only "content freshness plays a bigger role than dictionary definitions". "Current news" is not in the quote. Also "recency" is a rival one-word answer. |
| T22-L4-02 | fix | "A correlation across keywords cannot recover one fixed formula" is unlabelled inference, not in S309/S300. Label as practitioner inference. |
| T43-L3-02 | fix | Typed spot_the_error but asks "which statement best corrects"; explanation says A and B "repeat the old figure" but B (non-English only) does not. |
| T43-L4-01 | fix | Explanation says "the sources say systems handle" matching phrasing variants. S005#P1/P2 and S300#P3 do not say that; near-duplicate pages are also not covered by any saved quote. Label as practitioner inference. |
| T50-L2-02 | fix | Absence claim ("no mention of dwell time") is cited to S306#P3 (counsel's question) and S307#P3 (exhibit text), which cannot support it. Cite nothing for the absence and label it "not found in saved sources". |
| T50-L4-01 | fix | Cites S306#P3 (counsel's question) and S307#P3 (exhibit text) for "records discuss clicks and user data". Use S306#P4 (witness answer) with P3, S307#P2, and mark exhibit text as exhibit. |
| T50-L4-02 | fix | Cites only S306#P3 (counsel's question), without the P4 answer. "Testimony says click data is a type of user feedback" reverses what was agreed (a document's "user feedback" means click data). |
| T51-L1-03 | fix | "35 percent of searches were affected at all" goes beyond saved P2 ("roughly 35 percent of searches"); context is not saved. Quote only. |
| T51-L2-01 | fix | Same gap as T22-L3-01: "current news topics" is not in saved S309#P1. Explanation's "page implies the opposite" for option D is unsupported. |
| T51-L3-02 | fix | Explanation and option B rest on Google advising dates in structured data (datePublished/dateModified); no S311 passage saved says this (P6 is only the visible date). Cut B's reliance or save the passage. |
| T51-L4-02 | fix | Correct option and explanation assert Google advises "accurate structured dates"/dateModified, with no saved quote. Explanation also names a different option C ("Back-date nothing"). |

## Non-item flags (same fixes needed)
- T50 myth 1 ("Dwell time and pogo-sticking are confirmed ranking signals") cites S306#P3 (counsel's question) and S307#P3 (exhibit text) as support for an absence. Reword as "not confirmed in saved sources" with no source claim.
- T50 actions: "Do not buy click manipulation or widgets" and "query-level click data" have no saved passage. Label as practitioner advice.
- T51 action and summary: "dateModified" has no saved passage. T51 summary "freshness matters more for current news" has the same partial-quote problem as S309#P1.
- T22 summary: "Learning to rank means ... hand-setting one formula" is not in a saved quote. Label as general description.
- T50 L1-01 and S307#P1/P2: saved notes do not show that these lines are witness answers (no speaker or question saved). Passed on the note's own labelling; recheck against the transcript if possible.

## Pattern summary
- Main pattern: partial-quote stretch. S309#P1 lacks "current news" (T22, T51 x2), S310#P2 lacks "affected", and no structured-data/dateModified passage from S311 is saved (T51 x3).
- T50: counsel's questions and exhibit text were cited as support where only the witness answer counts. Most uses are right (P3 with P4), but three items and one myth cite P3/S307#P3 alone.
- Unlabelled inference in L4 explanations (T22-L4-02, T43-L4-01).
- Two explanations discuss option wording that differs from the actual options (T21-L2-01, T51-L4-02, also minor T22-L1-02, T21-L1-02).
- Strengths: paper/patent-vs-engine honesty is good throughout; "unconfirmed" is labelled; answers are short and matchable; letter spread and option length are fine.
