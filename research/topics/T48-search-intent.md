# T48 Search intent classification and spelling correction (search-intent)
Volatility: evolving. Stage 3.

## Idea to leave with
Intent types are a useful working model, but intent cannot be inferred with certainty from a query, and many queries have several meanings. Plan pages around the dominant interpretation and cover reasonable minor ones.

## What a practitioner does differently
- Label queries with intent as a hypothesis and check against what actually ranks (judgement; S013#P4 supports caution).
- For ambiguous terms, serve the dominant meaning and consider the others (S014#P1-P3).
- Treat misspelling variants as the same need; engines correct spelling with methods such as edit distance and k-gram overlap (textbook, S003).

## Findings
- Broder: navigational, informational, transactional definitions (S013#P1-P3); intent inference is inexact (S013#P4).
- 'Commercial investigation' is a later practitioner label, not in Broder's saved passages; item text calls it a common extension.
- Rater guidelines: queries may have more than one meaning; helpful results serve dominant or reasonable minor interpretations (S014). Raters inform evaluation; not a spec of ranking.
- Spelling: two textbook steps (S003#P1).

## Conflicts
Three classes (Broder) vs four (practitioner). Resolved by teaching Broder's three as sourced and the fourth as an extension.

## Dead ends
Know/Do/Website/Visit-in-person labels did not appear in the PDF text read; cut. Google blog on spelling failed to fetch.

## Volatility
Taxonomy stable; how engines classify evolving.

## R1 fixes
T48-L3-01 changed to an unambiguous navigational case (S013#P1). Spelling advice now says engine behaviour is unconfirmed (S003 describes methods only). 'Exactly three classes' not claimed as a quoted fact.
