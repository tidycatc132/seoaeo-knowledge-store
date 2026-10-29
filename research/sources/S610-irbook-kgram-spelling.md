---
id: S610
url: https://nlp.stanford.edu/IR-book/html/htmledition/k-gram-indexes-for-spelling-correction-1.html
title: k-gram indexes for spelling correction (Introduction to Information Retrieval, 3.3.4)
publisher: Manning, Raghavan, Schutze; Cambridge University Press
grade: B
page_date: 2009-04-07
opened: 2026-10-26
status: used
---
Summary: Textbook use of a k-gram index to find candidate corrections that share many k-grams with the query term, then rank candidates by edit distance. Describes a method, not any engine's behaviour.
## Passages
### P1 shared k-grams
> we will use the k-gram index to retrieve vocabulary terms that have many k-grams in common with the query.
### P2 bord example
> in the example of Figure 3.7 we would enumerate aboard, boardroom and border.
### P3 implausible candidate
> terms like boardroom, an implausible "correction" of bord, get enumerated.
### P4 candidates then edit distance
> One method that has some empirical support is to first use the k-gram index to enumerate a set of candidate vocabulary terms that are potential corrections of q.
### P5 rank by edit distance
> We then compute the edit distance from q to each term in this set, selecting terms from the set with small edit distance to q.
