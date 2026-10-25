# T5-inverted-index

## Single idea
Inverted index = dictionary plus postings lists, built after tokenization and normalization; being crawled is not being indexed.

## What practitioners do differently
Separate crawled/discovered/indexed statuses in audits; do not claim engine internals from the textbook.

## Key findings
S108, S122 (textbook), S120 (indexing not guaranteed), S119 (statuses), S101 (robots/noindex).

## Conflicts and resolution
None; textbook method vs Google index is flagged as unconfirmed in items.

## Dead ends
No Google doc describes its index structure; none sought.

## Merged or cut
Cut: compression, skip lists, positional indexes (no practitioner action).

## Volatility
stable

## R2 fixes (2026-10-25)
L2-01 rewritten to test sparsity (non-zero entries) instead of repeating L1-01; myth correction labelled as practitioner inference.
