---
id: S108
url: https://nlp.stanford.edu/IR-book/html/htmledition/a-first-take-at-building-an-inverted-index-1.html
title: A first take at building an inverted index (Introduction to Information Retrieval, 1.2)
publisher: Manning, Raghavan, Schutze; Cambridge University Press
grade: B
page_date: 2008-01-01
opened: 2026-10-25
status: used
---
Summary: Textbook steps to build an inverted index: collect, tokenize, normalize, index into dictionary plus postings sorted by docID.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 tokenize
> Tokenize the text, turning each document into a list of tokens:
### P2 preprocess
> Do linguistic preprocessing, producing a list of normalized tokens, which are the indexing terms:
### P3 index
> Index the documents that each term occurs in by creating an inverted index, consisting of a dictionary and postings.
### P4 sorted
> The postings are secondarily sorted by docID.
