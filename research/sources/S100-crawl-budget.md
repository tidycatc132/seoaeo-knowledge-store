---
id: S100
url: https://developers.google.com/crawling/docs/crawl-budget
title: Managing crawl budget for large sites
publisher: Google Search Central
grade: A
page_date: 2026-07-22
opened: 2026-10-25 (extra passages 2026-10-29 P11-P17)
status: used
---
Summary: Google's guide for large or fast-changing sites. Defines crawl budget as capacity plus demand and lists ways to protect it (consolidate duplicates, 404/410, fix soft 404s, lastmod).
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 scope
> Large sites (1 million+ unique pages) with content that changes moderately often (once a week)
### P2 capacity
> This limits the total amount of time your server spends holding connections open for Google
### P3 demand
> For Googlebot, demand varies based on a site's size, update frequency, page quality, and relevance
### P4 definition
> Google defines a site's crawl budget as the set of URLs that Google can and wants to crawl.
### P5 noindex
> Don't use noindex, as Google will still request, but then drop the page
### P6 robots-realloc
> Don't use robots.txt to temporarily reallocate crawl budget for other pages
### P7 404
> Return a 404 or 410 status code for permanently removed pages.
### P8 soft404
> soft 404 pages will continue to be crawled, and waste your budget.
### P9 lastmod
> If your site includes updated content, we recommend including the <lastmod> tag.
### P10 inventory
> Without guidance from you, Google tries to crawl all or most of the URLs that it knows about on your site.
### P11 limit up
> the limit goes up, meaning more connections can be used to crawl
### P12 limit down
> the limit goes down and Google crawls less
### P13 popularity
> URLs that are more popular on the Internet tend to be crawled more often
### P14 site moves
> site-wide events like site moves may trigger an increase in crawl demand
### P15 crawled not indexed
> not every page that is crawled will necessarily be indexed
### P16 load faster
> If Google can load and render your pages faster, we might be able to read more content from your site
### P17 who needs it
> your site doesn't have a large number of pages that change rapidly
