---
id: S112
url: https://nlp.stanford.edu/IR-book/html/htmledition/near-duplicates-and-shingling-1.html
title: Near-duplicates and shingling (Introduction to Information Retrieval, 19.6)
publisher: Manning, Raghavan, Schutze; Cambridge University Press
grade: B
page_date: 2009-04-07
opened: 2026-10-25
status: used
---
Summary: Textbook description of near-duplicate detection by shingles and Jaccard coefficient, with fingerprints/sketches to avoid pairwise comparison.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 phenomenon
> a crucial and widespread phenomenon on the Web: near duplication.
### P2 def
> Intuitively, two documents are near duplicates if the sets of shingles generated from them are nearly the same.
### P3 jaccard
> to compute this Jaccard coefficient.
### P4 infeasible
> Short of exhaustively comparing all pairs of web pages, an infeasible task at the scale of billions of pages.
### P5 fingerprint
> compute, for each web page, a fingerprint that is a succinct (say 64-bit) digest of the characters on that page.
### P6 shingles
> the set of all consecutive sequences of terms in
