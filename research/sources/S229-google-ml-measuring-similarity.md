---
id: S229
url: https://developers.google.com/machine-learning/clustering/dnn-clustering/supervised-similarity
title: Measuring similarity from embeddings (Google Machine Learning, Clustering)
publisher: Google for Developers
grade: A
page_date: unknown
opened: 2026-10-29 (match after removing line breaks)
status: used
---
Summary: Google ML course page comparing Euclidean distance, cosine and dot product for embeddings. Dot product grows with vector length and so reflects popularity; normalizing lengths makes the three measures proportional.
## Passages
### P1 dot length
> In contrast to the cosine, the dot product is proportional to the vector length.
### P2 choose dot
> If you want to capture popularity, then choose dot product.
### P3 skew risk
> However, the risk is that popular examples may skew the similarity metric.
### P4 normalized proportional
> Normalizing vector lengths makes Euclidean distance, cosine, and dot product proportional
### P5 euclidean ends
> Distance between ends of vectors
### P6 cosine angle only
> cosine similarity focuses solely on the angle between vectors, ignoring popularity
