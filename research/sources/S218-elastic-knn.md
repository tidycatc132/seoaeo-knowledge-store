---
id: S218
url: https://www.elastic.co/docs/solutions/search/vector/knn
title: kNN search in Elasticsearch
publisher: Elastic
grade: A
page_date: unknown
opened: 2026-10-25 (extra passages 2026-10-29; match after removing italics)
status: used
---
Summary: Elastic describes approximate kNN as suited to low latency at scale and exact kNN as accurate but not scalable. Grade A for Elasticsearch only.
## Passages
### P1 approx
> best for most production workloads where low latency and scale matter more than perfect recall.
### P2 exact
> It scores every matching document, which guarantees accurate results but does not scale well for large datasets.
### P3 narrows
> It narrows the search to likely matches instead of scoring every document, reducing latency on large datasets.
### P4 k nearest
> finds the k nearest vectors to a query vector
### P5 filter exact
> can improve latency by filtering your data to a small subset of documents
