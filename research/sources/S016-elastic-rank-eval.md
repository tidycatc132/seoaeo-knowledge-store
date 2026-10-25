---
id: S016
url: https://www.elastic.co/docs/reference/elasticsearch/rest-apis/search-rank-eval
title: Ranking evaluation API
publisher: Elastic
grade: A
page_date: unknown
opened: 2026-10-24
status: used
---
Summary: Product documentation defining precision@k, recall@k, MRR and DCG/NDCG as used for evaluating ranked search results. Says unlabeled documents are treated as irrelevant when ignore_unlabeled is false; no default is stated in the text read.
## Passages
### P1 MRR
> For every query in the test suite, this metric calculates the reciprocal of the rank of the first relevant document.
### P2 P@k
> This metric measures the proportion of relevant results in the top k search results.
### P3 R@k
> It is the fraction of relevant documents in those first k results relative to all possible relevant results.
### P4 DCG
> discounted cumulative gain takes both the rank and the rating of the search results into account.
### P5 normalize
> If set to true, this metric will calculate the Normalized DCG.
### P6 unlabeled
> If set to true, unlabeled documents are ignored and neither count as relevant or irrelevant.
### P7 unlabeled false
> Set to false, they are treated as irrelevant.
