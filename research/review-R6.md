# Review R6 (T25, T28, T47, T52, T53, T56)

Checked against research/sources and topics. No fetching, no bank edits. 60 items: 46 pass, 14 fix, 0 cut. Level counts (3/3/2/2) correct in all six files; summaries all under 150 words.

| item_id | verdict | reason |
|---|---|---|
| T25-L1-03 | fix | "used to retrieve real documents" is not in S006#P1 or P2 (P1 only says the LM generates a hypothetical document); reword or add a quote |
| T25-L4-02 | fix | "Disallow stops pages being crawled" needs S101#P1 (S007#P9 only says robots.txt is the access control); a disallowed URL can still be indexed (S101#P4), so cause is not fully pinned; add S101#P1 and say so |
| T28-L1-01 | fix | prompt says tokens "control retrieval and critique"; S502#P1 quote does not say this; cite S502#P2/P3 or trim prompt |
| T28-L4-02 | fix | symptom is an OUTDATED page; CRAG evaluator scores retrieved-document quality/confidence, not freshness; "on low confidence" trigger is inference; reword symptom to weak/irrelevant retrieval or label as analogy |
| T47-L1-01 | fix | ambiguous key: quote says "sections or passages", so "passages" is equally correct for "individual ___"; reword prompt or accept both |
| T52-L2-03 | fix | option D relies on S007#P10, whose saved quote ("they're reported on in the Performance report,") never names AI features; antecedent missing; save a fuller quote |
| T52-L4-02 | fix | evidence (3) and the answer depend on same incomplete S007#P10 |
| T53-L1-02 | fix | explanation says "Google says you cannot mark a page as one"; S500#P2 does not say this; no saved quote for "no markup / can't" |
| T53-L2-02 | fix | correct option "makes them less likely" is not in any saved quote (S500#P5 says only "doesn't guarantee ... stop"); S500#P6 is the enough-text quote and does not help |
| T53-L2-03 | fix | explanation cites "Google says you can't mark a page as one" with S500#P2, which does not say it (same gap as L1-02) |
| T53-L4-01 | fix | "Google says nosnippet blocks all snippets including featured" is unsupported: S501#P1 lists web search, Images, Discover, AIO, AI Mode, not featured snippets (S501 summary says it does not discuss them) |
| T56-L2-02 | fix | correct option "The paper never mentions Google" is an absence claim about a whole paper; only the abstract is saved, and the CLIP paper may well mention Google; reword to "no saved source says Google uses it" |
| T56-L3-01 | fix | "use an img element" is not in any saved S507 quote (P4 says only CSS images are not indexed); label as inference or save a quote; same for T56-L4-01 |
| T56-L4-01 | fix | same img-element inference; alt text and filenames (P1, P5) are fine |

Passes: 46.

## Bank-level (summary, actions, myths) issues
- T53 summary/actions/myth 1: "no markup to opt in" and "Google says you can't mark a page" have no saved quote. "nosnippet (all snippets)" for featured snippets and "max-snippet makes them less likely" also unsupported; T53 myth 2 correction uses only "doesn't guarantee", fine.
- T52 action "Track AI feature traffic in the Performance report" rests on incomplete S007#P10.
- T28 summary says Azure documents a multi-query agentic pipeline; that rests on S509#P1, which the researcher says was fixed by hand. No item cites S509#P1, so no item breaks, but the summary claim should cite P3/P5 or be softened. The P1 quote contains markdown asterisks (*agentic retrieval*), consistent with hand editing; treat as not verbatim until re-verified.
- T56 action "Claim and verify the Business Profile": "verify" is not in S512 quotes. Action "Use HTML img elements" lacks a quote. Myth "Google's image documentation does not mention CLIP" is an absence claim.
- T25 myth 2 "method for zero-shot dense retrieval" comes from the paper title, not the saved quote.

## Extra checks
- (a) S509#P1: not cited by any item; see above. S509#P2, P3 are cited and look clean ("(preview)" kept).
- (b) S505#P3 has "$40\%$" LaTeX; the number 40 is intact and T52 items read it as "up to 40%". No garbled number. OK.
- (c) Vendor docs: T25-L1-02 and L2-03, T47 Azure items, T52 OpenAI/Perplexity items, and T28-L4-01 all name the vendor and limit claims to its own product. OK.
- (d) Papers: T25, T28, T52, T56 items label papers as methods and do not say Google uses them. OK.

## Pattern summary
Wording honesty is good. The main weakness is supporting facts that live in the explanation or case evidence but not in any saved quote: T53 "can't mark up" and "makes less likely" and "nosnippet affects featured snippets", T52 Performance-report claim from a fragment quote, T56 img-element advice. Absence claims about papers ("never mentions Google") are used as correct options. Letter spread is acceptable (T25 B/C/C/B/D/A; T28 A/B/C/D/A/C; T47 B/D/C/A/B/C; T52 C/A/B/D/C/B/D; T53 B/C/D/A/B/C; T56 C/A/D/B/C/A/D); the correct option is never the longest.
