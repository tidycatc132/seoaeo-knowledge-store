---
id: S106
url: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
title: What is URL canonicalization (consolidate duplicate URLs)
publisher: Google Search Central
grade: A
page_date: 2026-07-10
opened: 2026-10-25
status: used
---
Summary: Canonicalization methods differ in strength: redirects and rel=canonical are strong signals, sitemap inclusion weak. None is required.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 goal
> To consolidate signals for similar or duplicate pages.
### P2 crawl
> To avoid spending crawling time on duplicate pages.
### P3 redirect
> A strong signal that the target of the redirect should become canonical.
### P4 rel-canonical
> A strong signal that the specified URL should become canonical.
### P5 sitemap
> A weak signal that helps the URLs that are included in a sitemap become canonical.
### P6 optional
> none of them are required; your site will likely do just fine without specifying a canonical preference.
### P7 decides
> will decide which pages (if any) are duplicates, based on similarity of content.
