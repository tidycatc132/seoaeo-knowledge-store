# T18 Dense retrieval and bi-encoders (dense-retrieval)
Volatility: evolving. Stage 4.

## Idea to leave with
Dense retrievers encode query and passage separately and score by dot product; they are complementary to BM25, not a replacement (S212). A paper is not evidence of what Google uses.

## Findings
S212 DPR paper (arXiv abstract plus body quotes); S218 Elastic exact vs approximate kNN for the L4 case.

## Conflicts
None.

## Dead ends
Contriever paper not opened (no quotes saved); topic taught via DPR only.

## Cut
Contriever, negatives sampling, training details.

## R3 fixes
L1-01 answer now one word (Passage); L2-01 reworked to MCQ without the unsourced 'chose the simpler inner product' claim; summary inference labelled. MCQ letters rebalanced (A7 B7 C6 D6) and correct option no longer the longest or shortest.
