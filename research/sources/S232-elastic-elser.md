---
id: S232
url: https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser
title: ELSER (Elastic Learned Sparse EncodeR) documentation
publisher: Elastic
grade: A
page_date: unknown
opened: 2026-10-29 (match after removing links and italics)
status: used
---
Summary: Elastic's documentation for ELSER, a learned sparse retrieval model that expands text into weighted terms. Grade A for Elasticsearch only.
## Passages
### P1 what
> Elastic Learned Sparse EncodeR - or ELSER - is a retrieval model trained by Elastic
### P2 expands
> ELSER expands the indexed and searched passages into collections of terms
### P3 weighted
> These expanded terms are weighted as some of them are more significant than others.
### P4 not synonyms
> The terms that the text is expanded into by the model are not synonyms for the search terms
### P5 out of domain
> ELSER is an out-of-domain model which means it does not require fine-tuning on your own data
### P6 512 tokens
> As ELSER encodes the first 512 tokens of a field, it may not provide as relevant of results for large fields.
### P7 english
> This model is recommended for English language documents and queries.
### P8 sparse vector field
> field type is used to store the terms and weights at index time
### P9 learned associations
> they are learned associations capturing relevance
