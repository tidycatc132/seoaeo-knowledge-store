---
id: S400
url: http://infolab.stanford.edu/~backrub/google.html
title: The Anatomy of a Large-Scale Hypertextual Web Search Engine
publisher: Brin and Page (Stanford)
grade: A
page_date: unknown
opened: 2026-10-25
status: used
---
Summary: Original 1998-era paper describing PageRank, the random surfer and anchor text use.
Note: quotes returned by WebFetch extraction; fragments kept short.
## Passages
### P1 formula
> PR(A) = (1-d) + d (PR(T1)/C(T1) + ... + PR(Tn)/C(Tn))
### P2 surfer
> We assume there is a "random surfer" who is given a web page at random and keeps clicking on links, never hitting "back"
### P3 damping
> We usually set d to 0.85.
### P4 prob
> Note that the PageRanks form a probability distribution over web pages, so the sum of all web pages' PageRanks will be one.
### P5 anchors
> First, anchors often provide more accurate descriptions of web pages than the pages themselves.
