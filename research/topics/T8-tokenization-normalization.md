# T8-tokenization-normalization

## Single idea
Tokens are normalized into terms; stemming raises recall but costs precision; exact repetition of each word form is unnecessary (practitioner inference, Google's exact processing unconfirmed).

## What practitioners do differently
Write naturally; test site search for hyphens and case; normalize query and index alike.

## Key findings
S109, S110, S111 (textbook), S113 (keyword stuffing), S108.

## Conflicts and resolution
Whether Google stems: not confirmed in sources; items say so.

## Dead ends
Case-folding and synonym textbook pages not fetched/quoted; cut.

## Merged or cut
Cut: case folding specifics, synonym handling, stop words (no quotes).

## Volatility
stable

## R2 fixes (2026-10-25)
L1-01 now a one-word key; L1-02 explanation no longer claims shingle definition; L2-02 reframed around Google's keyword-stuffing definition with stemming for Google marked unconfirmed.
