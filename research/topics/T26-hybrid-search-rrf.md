# T26 Hybrid search and Reciprocal Rank Fusion (hybrid-search-rrf)
Volatility: evolving. Stage 4.

## Idea to leave with
Hybrid merges keyword and vector ranked lists; RRF fuses ranks, not scores. Vendor docs (Azure, Elastic) are grade A only for those products.

## Findings
S213 RRF paper (k = 60); S214 Elastic RRF docs; S215 Azure hybrid docs; S212 complementarity; cross-stage L4 uses S016 (T7 note, existing quote).

## Conflicts
Elastic's formula is shown as code; the item uses the code line quoted in S214#P5. No saved source says how Google or Bing combine signals.

## Dead ends
OpenSearch hybrid docs not opened. Blog explainers on RRF seen in search results only (not used).

## Cut
Weighted fusion, normalisation techniques (no quotes).

## R3 fixes
S214#P2 re-saved but still does not name rank_constant, so items and summary say 'constant'; L1-02 now asks the paper's k; L2-01 uses the paper's 'consistently better' result instead of repeating the abstract sentence; L1-01 answer is one word. MCQ letters rebalanced (A7 B7 C6 D6) and correct option no longer the longest or shortest.
