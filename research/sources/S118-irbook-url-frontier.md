---
id: S118
url: https://nlp.stanford.edu/IR-book/html/htmledition/the-url-frontier-1.html
title: The URL frontier (Introduction to Information Retrieval, 20.2.3)
publisher: Manning, Raghavan, Schutze; Cambridge University Press
grade: B
page_date: 2009-04-07
opened: 2026-10-25
status: used
---
Summary: The frontier orders URLs for fetching, balancing politeness (one host at a time) and priority for high-quality, frequently changing pages.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 role
> It maintains the URLs in the frontier and regurgitates them in some order whenever a crawler thread seeks a URL.
### P2 polite
> we must avoid repeated fetch requests to a host within a short time span.
### P3 fresh
> high-quality pages that change frequently should be prioritized for frequent crawling.
### P4 queues
> The front queues implement the prioritization, while the back queues implement politeness.
### P5 one-host
> only contains URLs from a single host.
