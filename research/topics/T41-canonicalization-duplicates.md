# T41-canonicalization-duplicates

## Single idea
Canonical signals vary in strength (redirect, rel=canonical strong; sitemap weak), none required, Google may choose differently. Near-duplicates detected by shingles/fingerprints in the textbook; Charikar describes hashing, not Google.

## What practitioners do differently
Redirect true duplicates; self-canonical paginated pages; read the Page indexing duplicate statuses.

## Key findings
S106, S103, S112, S115, S119.

## Conflicts and resolution
Textbook/paper vs engine behaviour: kept separate. L4-01 combines stage 1 (crawl waste) and stage 2 (index/canonical).

## Dead ends
SimHash fingerprint sentence not found in Charikar fetch; Broder's paper not fetched.

## Merged or cut
T35 merged here. Cut: Hamming distance thresholds.

## Volatility
stable

## R2 fixes (2026-10-25)
L1-01 explanation trimmed to quoted shingle/Jaccard statement; L1-02 incoherent option replaced; L3-01 changed to avoid repeating the strong-signal fact; L4-01/L4-02 evidence no longer gives the answer.
