# T21-cross-encoder-reranking

**Single idea:** Retrieval is a fast first stage; a heavier model re-scores only the retrieved candidates. A document not retrieved cannot be promoted.

**Do differently:** Measure candidate recall separately from re-ranking quality; never claim Google uses a given re-ranker.

**Key findings / sources:** S303 (P1-P5), S300#P9

**Conflicts:** Paper vs engine use: resolved by treating the paper as a method description only.

**Dead ends:** SBERT docs (S312) body not retrievable, rejected. No Google statement about cross-encoders found.

**Cut / merged:** Cut: bi-encoder vs cross-encoder tradeoff detail (no readable source), ColBERT/late interaction.

**Volatility:** stable

## R4 fixes (2026-10-25)
L2-01 distractor D replaced and explanation matched; cost reason labelled practitioner inference.
