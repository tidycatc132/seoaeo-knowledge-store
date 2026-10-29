---
id: S217
url: https://github.com/pgvector/pgvector
title: pgvector README
publisher: pgvector project (GitHub)
grade: A
page_date: unknown
opened: 2026-10-25 (extra passages 2026-10-29; match after removing markdown)
status: used
---
Summary: Documentation of the pgvector Postgres extension: L2, inner product, cosine and L1 operators; exact search by default and approximate indexes that trade recall for speed.
## Passages
### P1 l2
> `<->` - L2 distance
### P2 ip
> `<#>` - (negative) inner product
### P3 cos
> `<=>` - cosine distance
### P4 l1
> `<+>` - L1 distance
### P5 neg
> `<#>` returns the negative inner product since Postgres only supports `ASC` order index scans on operators.
### P6 trade
> trades some recall for speed
### P7 exact default
> By default, pgvector performs exact nearest neighbor search, which provides perfect recall.
### P8 different results
> Unlike typical indexes, you will see different results for queries after adding an approximate index.
### P9 hnsw graph
> An HNSW index creates a multilayer graph.
### P10 hnsw speed-recall
> It has better query performance than IVFFlat (in terms of speed-recall tradeoff)
### P11 hnsw cost
> but has slower build times and uses more memory
### P12 ivfflat lists
> An IVFFlat index divides vectors into lists, and then searches a subset of those lists that are closest to the query vector.
### P13 ef_search
> Specify the size of the dynamic candidate list for search (40 by default)
### P14 higher value
> A higher value provides better recall at the cost of speed
### P15 m
> the max number of connections per layer (16 by default)
### P16 filtering
> queries with filtering can return less results since filtering is applied after the index is scanned
