---
id: S202
url: https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html
title: Okapi BM25: a non-binary model (Introduction to Information Retrieval, 11.4.3)
publisher: Manning, Raghavan, Schutze; Cambridge University Press
grade: B
page_date: 2009-04-07
opened: 2026-10-25
status: used
---
Summary: Textbook description of BM25 with two tuning parameters: k1 for term frequency scaling and b for document length scaling.
## Passages
### P1 k1
> is a positive tuning parameter that calibrates the document term frequency scaling
### P2 k1 zero
> A k1 value of 0 corresponds to a binary model (no term frequency)
### P3 b one
> b = 1 corresponds to fully scaling the term weight by the document length
### P4 b zero
> b = 0 corresponds to no length normalization.
