---
id: S015
url: https://arxiv.org/abs/2104.08663
title: BEIR: A Heterogenous Benchmark for Zero-shot Evaluation of Information Retrieval Models
publisher: arXiv (Thakur et al.)
grade: A
page_date: 2021-04-17
opened: 2026-10-24
status: used
---
Summary: Benchmark paper using nDCG@10. Explains why: suits binary and graded relevance; precision/recall are rank-unaware; MRR and MAP are not for graded relevance. BM25 found a robust baseline.
## Passages
### P1 choice of nDCG
> We find that Normalised Cumulative Discount Gain (nDCG@k) provides a good balance
### P2 graded
> suitable for both tasks involving binary and graded relevance judgements.
### P3 rank unaware
> Decision support metrics such as Precision and Recall which are both rank unaware are not suitable.
### P4 MRR MAP
> fail to evaluate tasks with graded relevance judgements.
### P5 BM25
> Our results show BM25 is a robust baseline.
