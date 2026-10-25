---
id: S212
url: https://arxiv.org/abs/2004.04906
title: Dense Passage Retrieval for Open-Domain Question Answering
publisher: Karpukhin et al., arXiv / EMNLP 2020
grade: A
page_date: 2020-04-10
opened: 2026-10-25
status: used
---
Summary: Original DPR paper: a dual-encoder dense retriever scored by dot product that beats a Lucene-BM25 baseline and is complementary to sparse retrieval.
## Passages
### P1 dense alone
> retrieval can be practically implemented using dense representations alone
### P2 dual encoder
> embeddings are learned from a small number of questions and passages by a simple dual-encoder framework.
### P3 beats bm25
> our dense retriever outperforms a strong Lucene-BM25 system
### P4 gain
> largely by 9%-19% absolute in terms of top-20 passage retrieval accuracy
### P5 dot product
> We define the similarity between the question and the passage using the dot product of their vectors:
### P6 complementary
> the dense, latent semantic encoding is complementary to sparse representations by design.
### P7 hybrid
> Results can be improved further in some cases by combining DPR with BM25 in both single- and multi-dataset settings.
### P8 usual
> Retrieval in open-domain QA is usually implemented using TF-IDF or BM25
### P9 title
> Dense Passage Retrieval for Open-Domain Question Answering
