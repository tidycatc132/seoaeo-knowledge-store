---
id: S217
url: https://github.com/pgvector/pgvector
title: pgvector README
publisher: pgvector project (GitHub)
grade: A
page_date: unknown
opened: 2026-10-25
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
