---
id: S215
url: https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview
title: Hybrid search using vectors and full text in Azure AI Search
publisher: Microsoft Learn
grade: A
page_date: 2026-08-31
opened: 2026-10-25 (extra passages 2026-10-29 P5-P10)
status: used
---
Summary: Azure AI Search documents hybrid as one request with full-text and vector queries merged with RRF. Grade A only for what Azure AI Search does.
## Passages
### P1 definition
> Hybrid search is a single query request configured for both full-text and vector queries.
### P2 parallel
> Runs full-text search and vector search in parallel.
### P3 merge
> Merges results from each query by using Reciprocal Rank Fusion (RRF).
### P4 single result set
> The query response provides just one result set, using RRF to rank the unified results.
### P5 strengths
> Hybrid search combines the strengths of vector search and keyword search.
### P6 keyword precision
> The advantage of keyword or full-text search is precision
### P7 exact-match cases
> querying over product codes, highly specialized jargon, dates, and people's names
### P8 exact matches
> because it can identify exact matches
### P9 vector concepts
> finding information that's conceptually similar to your search query
### P10 benchmark claim
> Benchmark testing on real-world and benchmark datasets indicates that hybrid retrieval with semantic ranker offers significant benefits in search relevance.
