# T7 Retrieval evaluation metrics (retrieval-metrics)
Volatility: stable. Stage 8.

## Idea to leave with
Pick the metric that matches the question: precision/recall for sets, MRR for first good hit, MAP for binary relevance across ranks, NDCG when relevance is graded. Unlabeled results are not neutral by default.

## What a practitioner does differently
- When evaluating retrieval for a RAG or site search, use rank-aware metrics at a fixed k (S016, S015#P3).
- Use NDCG if judgments are graded (S004#P5, S015#P1-P2).
- Know that P@k is the least stable (S004#P2) and MAP stable (S004#P4).
- Check how unlabeled results are treated (S016#P6).

## Findings
S016 definitions of P@k, R@k, MRR, DCG/NDCG; S004 MAP, P@k stability, NDCG for non-binary; S015 rationale for nDCG@10.

## Conflicts
BEIR says MRR/MAP fail on graded relevance; textbook calls MAP stable. Both hold: MAP is stable for binary judgments only.

## Cut
Formulas (not in saved quotes), R-precision, interpolated precision, F-measure.

## R1 fixes
Elastic text read says unlabeled documents are treated as irrelevant when ignore_unlabeled is false (S016#P7); no default is stated, so the 'default' and 'tools generally' claims were removed. MRR worked example answer now a single value (0.583).
