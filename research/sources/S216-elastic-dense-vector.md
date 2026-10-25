---
id: S216
url: https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/dense-vector
title: Dense vector field type (Elasticsearch reference)
publisher: Elastic
grade: A
page_date: unknown
opened: 2026-10-25
status: used
---
Summary: Elasticsearch's similarity options for dense vectors: l2_norm, dot_product, cosine, max_inner_product, with score formulas. Grade A for Elasticsearch only.
## Passages
### P1 l2
> Computes similarity based on the L2 distance (also known as Euclidean distance) between the vectors.
### P2 dot
> Computes the dot product of two unit vectors.
### P3 unit
> When element_type is float, all vectors must be unit length, including both document and query vectors.
### P4 cosine
> Computes the cosine similarity.
### P5 mip
> This is similar to dot_product, but doesn't require vectors to be normalized.
### P6 cosine normalizes
> During indexing Elasticsearch automatically normalizes vectors with cosine similarity to unit length.
### P7 dot score
> The document _score is computed as (1 + dot_product(query, vector)) / 2.
### P8 l2 score
> The document _score is computed as 1 / (1 + l2_norm(query, vector)^2).
