# Review R5 (T45, T46, T49, T54, T55, T57)

Checked against research/sources and topics. No fetching, no bank edits. 60 items: 41 pass, 19 fix, 0 cut. Level counts 3/3/2/2 correct in all six files; summaries all under 150 words (62-78); all cited S###P# ids exist (scripted); JSON parses. MCQ correct letters A10/B10/C10/D10 across the six files; the correct option is never the longest. S209 (P3-P16) and S014 (P4-P6) appended passages are present and match how items use them.

| item_id | verdict | reason |
|---|---|---|
| T45-L2-01 | fix | wrong-option reasons "surfer never goes back in that way" and "so the walk never gets stuck" are not in S403#P2; trim to what the quote says |
| T46-L4-01 | fix | explanation repeats the same claim twice ("Google says it can only crawl <a> links ... Google says only <a> links are crawlable"); tidy |
| T46-L4-02 | fix | prompt says spam policy "defines" keyword stuffing as repeating words; S209#P2 is only an example, the definition is S209#P1 (cite it); "varied" in the key is not in S405 |
| T49-L2-01 | fix | S414#P1 ("Don't worry about it.") has no topical-authority referent; also cite S414#P2 (title). Grade B use is acceptable here only because wording is "reportedly"; keep that wording |
| T49-L2-02 | fix | near-duplicate of T49-L1-03 (same fact, same S407#P3, inverted) and of T55-L2-02; replace with a different fact |
| T49-L4-02 | fix | key "third-party heuristic only" rests on S414 (grade B) plus an absence in saved Google pages; S300#P1 does not exclude a per-site signal; label "practitioner inference / as reported" in prompt and explanation |
| T54-L1-02 | fix | explanation about thin affiliation ("copied descriptions") needs S209#P14, not in source_ids |
| T54-L2-01 | fix | all three wrong-option reasons are just "not listed"; say why (HTTPS is a security matter, a single guest post is not many generated pages, alt text is accessibility) |
| T54-L3-01 | fix | wrong-option reasons use thin-affiliation (P14) and expired-domain (P16) text that is not in source_ids |
| T54-L3-02 | fix | wrong-option reasons "no video limit appears", "no such rule appears" are absence-only; give actual reasons (policy targets copied merchant text, not affiliate links as such) |
| T54-L4-02 | fix | "Missing rel=ugc - ugc is irrelevant" is terse; say ugc marks user-generated links and has no bearing on index status |
| T55-L1-02 | fix | wrong options explained only as "not in the patent text saved"; only the abstract is saved so absence cannot be asserted (option D "anchor text" is arguable for a link-related patent); explain that the abstract names an information gain score |
| T55-L2-01 | fix | key "It describes a technique, not what Search uses" has no antecedent in the prompt (name the patent) and asserts Search does not use it; reword to "a patent describes a technique and does not confirm Search uses it" |
| T55-L4-01 | fix | S407#P5 quote ("perhaps the most important question to answer about your content.") does not contain the word Why; the Who/How/Why quote was cut (topic note). Save the fuller quote or reword. Same gap in T55 summary and action |
| T57-L1-02 | fix | wrong-option explanations use INP 200 ms and CLS 0.1 thresholds (S409#P2, P3) not in source_ids |
| T57-L2-01 | fix | wrong options "not stated", "opposite", "not stated" give no reason; explain what field vs lab data are, per S410#P3 |
| T57-L3-02 | fix | all three wrong options "not stated"; S411#P1 does say INP replaced FID, so say why CLS cannot be the replacement; explain the other two |
| T57-L4-01 | fix | "Add noindex to mobile - would remove pages" has no saved quote (S105#P4 only says rendering may be skipped); cite or reword |
| T57-L4-02 | fix | "Cut content - not supported" is terse; option A "relevance always wins" is also close to S408#P3, so explain precisely why ignoring INP is wrong |

Passes: 41.

## Requested extra checks
- (a) Grade B S414: T49-L2-01 and T49-L4-02 and the T49 myth lean on it. L2-01 is worded "reportedly/SEJ reports", so grade is respected, but it needs S414#P2 for the topic referent. L4-02 states a platform conclusion in its explanation (fix). The myth correction cites S407#P3 (E-E-A-T not a factor), which says nothing about topical authority; rewrite as "no saved Google source confirms a topical authority score; SEJ reports Mueller replying 'Don't worry about it'" and cite S414#P1+P2 as reported (bank-level fix).
- (b) S413 patent: all T55 items use "describes"/"patent" language; no item calls information gain a Google factor. Only issue is T55-L2-01 key wording (above).
- (c) S415 (grade C) is not cited by any item, myth or action in any file. T49 summary mentions industry articles only as theory. Pass.
- (d) Terse wrong-option explanations: confirmed in T54 (5 items), T55 (2), T57 (5). Other items in these files give a reason per wrong option and pass.
- (e) "Trust is most important": S407#P2 ("Of these aspects, trust is most important.") contains it. Every item citing it (T49-L1-01, T49-L2-03, T55-L2-03) attributes it to the helpful content page, not the rater guidelines (S014 does not contain it, as the T55 topic note says). Pass.

## Pattern summary
- Biggest recurring weakness: wrong-option explanations that say only "not stated" (T54, T55, T57); also explanation facts whose passages are missing from source_ids.
- Referent gaps: S407#P5 lacks "Why"; S408#P1 "There is no single signal." lacks "page experience" (title gives it; accepted); S414#P1 lacks "topical authority".
- T45 summary says PageRank's "steady state" gives each score; S403 quotes do not contain "steady state" (bank-level, minor).
- T55 summary/action "avoid extensive automation across many topics": the S407#P6 quote is a question, not a directive; soften to "Google asks whether you use extensive automation...".
- Duplicate fact: E-E-A-T-not-a-factor appears as T49-L1-03, T49-L2-02, T55-L2-02.
- Strengths: numerical items (T45 L3) check out (1.425, 0.575); letter spread and option lengths are clean; patent and Mueller handling is honest.
