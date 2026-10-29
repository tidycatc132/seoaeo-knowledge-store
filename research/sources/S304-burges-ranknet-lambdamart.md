---
id: S304
url: https://www.microsoft.com/en-us/research/?p=159784
title: From RankNet to LambdaRank to LambdaMART: An Overview
publisher: Chris Burges, Microsoft Research (MSR-TR-2010-82)
grade: A
page_date: 2010-06-23
opened: 2026-10-25 (extra passages 2026-10-29 from the report PDF, MSR-TR-2010-82; match after removing line breaks)
status: used
---
Summary: Microsoft Research overview of three learning-to-rank algorithms. A method paper; it does not say which algorithms any web search engine uses.
## Passages
### P1 lineage
> LambdaMART is the boosted tree version of LambdaRank, which is based on RankNet.
### P2 challenge
> an ensemble of LambdaMART rankers won Track 1 of the 2010 Yahoo! Learning To Rank Challenge
### P3 pairs
> each pair of urls Ui and U j with differing labels is chosen
### P4 cross entropy
> We then apply the cross entropy cost function,
### P5 flat measures
> they are everywhere either discontinuous or flat, so gradient descent appears to be problematic
### P6 learned probability
> mapped to a learned probability that Ui should be ranked higher than Uj via a sigmoid function
### P7 arrows
> you can think of the λ’s as little arrows (or forces)
### P8 NDCG change
> by simply multiplying by the size of the change in NDCG
### P9 swap
> the rank positions of U1 and U2 (while leaving the rank positions of all other urls unchanged)
### P10 trees
> the output of the model is a linear combination of the outputs of a set of regression trees
### P11 combines
> LambdaMART combines MART [8] and LambdaRank.
### P12 good results
> gives very good results
