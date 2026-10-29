---
id: S233
url: https://raw.githubusercontent.com/UKPLab/sentence-transformers/master/examples/cross_encoder/applications/README.md
title: Cross-Encoders (Sentence Transformers documentation source)
publisher: UKPLab, Sentence Transformers project (GitHub)
grade: B
page_date: unknown
opened: 2026-10-29
status: used
---
Summary: Library documentation contrasting bi-encoders (independent embeddings) with cross-encoders (both texts at once), and recommending bi-encoder retrieval followed by cross-encoder re-ranking. Grade B: project documentation, not peer reviewed.
## Passages
### P1 bi-encoder
> We pass to a BERT independently the sentences A and B, which result in the sentence embeddings u and v.
### P2 cross-encoder
> we pass both sentences simultaneously to the Transformer network.
### P3 better
> Cross-Encoder achieve better performances than Bi-Encoders.
### P4 no embedding
> A Cross-Encoder does not produce a sentence embedding
### P5 not practical
> for many application they are not practical as they do not produce embeddings
### P6 cost (clustering 10,000 sentences)
> would require computing similarity scores for about 50 Million sentence combinations, which takes about 65 hours
### P7 retrieve first
> First, you use an efficient Bi-Encoder to retrieve e.g. the top-100 most similar sentences for a query.
### P8 re-rank
> you use a Cross-Encoder to re-rank these 100 hits
