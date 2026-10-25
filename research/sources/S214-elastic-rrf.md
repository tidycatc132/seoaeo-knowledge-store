---
id: S214
url: https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion
title: Reciprocal rank fusion (Elasticsearch reference)
publisher: Elastic
grade: A
page_date: unknown
opened: 2026-10-25
status: used
---
Summary: Elastic documents its RRF feature: rank-based fusion, rank_constant defaults to 60. Grade A only for what Elasticsearch does.
## Passages
### P1 definition
> Reciprocal rank fusion (RRF) is a method for combining multiple result sets with different relevance indicators
### P2 default
> This value must be greater than or equal to 1 . Defaults to 60 .
### P3 no tuning
> RRF requires no tuning, and the different relevance indicators do not have to be related to each other.
### P4 formula intro
> RRF uses the following formula to determine the score for ranking each document:
### P5 formula
> score += 1.0 / ( k + rank( result(q), d ) )
