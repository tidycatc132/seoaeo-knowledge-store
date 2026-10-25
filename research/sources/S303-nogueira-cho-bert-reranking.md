---
id: S303
url: https://arxiv.org/abs/1901.04085
title: Passage Re-ranking with BERT
publisher: Rodrigo Nogueira and Kyunghyun Cho (arXiv)
grade: A
page_date: 2019-01-13
opened: 2026-10-25
status: used
---
Summary: Paper describing BERT used to re-rank passages already retrieved by a standard method such as BM25. Describes a method and benchmark results; says nothing about what any web search engine uses.
## Passages
### P1 abstract
> we describe a simple re-implementation of BERT for query-based passage re-ranking
### P2 first stage
> retrieved from a corpus by a standard mechanism, such as BM25
### P3 second stage
> each of these documents is scored and re-ranked by a more computationally-intensive method
### P4 input
> we feed the query as sentence A and the passage text as sentence B
### P5 result
> outperforming the previous state of the art by 27% (relative) in MRR@10
