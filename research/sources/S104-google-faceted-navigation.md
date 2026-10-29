---
id: S104
url: https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation
title: Managing crawling of faceted navigation URLs
publisher: Google Search Central
grade: A
page_date: 2025-12-18
opened: 2026-10-25 (extra passages 2026-10-29 P12-P17)
status: used
---
Summary: Faceted URLs cause heavy overcrawling. Preferred fixes: robots.txt disallow or URL fragments; canonical and nofollow are less effective long term.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 overcrawl
> the crawlers will typically access a very large number of faceted navigation URLs
### P2 cost
> crawling faceted URLs tends to cost sites large amounts of computing resources
### P3 less-time
> the crawlers have less time to spend on new, useful URLs
### P4 robots
> Use robots.txt to disallow crawling of faceted navigation URLs.
### P5 fragments
> Use URL fragments to specify filters.
### P6 fragment-effect
> If your filtering mechanism is based on URL fragments, it will have no impact on crawling (positive or negative).
### P7 canonical
> may, over time, decrease the crawl volume of non-canonical versions of those URLs
### P8 less-effective
> these methods are generally less effective in the long term than the previously mentioned methods
### P9 404
> Return an HTTP `404` status code when a filter combination doesn't return results.
### P10 separator
> Use the industry standard URL parameter separator '`&`'.
### P11 order
> ensure that the logical order of the filters always stays the same and that no duplicate filters can exist.
### P12 definition
> Faceted navigation is a common feature of websites that allows its visitors to change how items
### P13 combinations
> This often means a very large number of possible combinations of filters
### P14 infinite
> can generate infinite URL spaces
### P15 when to block
> If you don't need the faceted navigation URLs potentially indexed, prevent crawling of these URLs.
### P16 nofollow
> every anchor pointing to a specific URL must have the rel="nofollow" attribute
### P17 canonical option
> Using rel="canonical" to specify which URL is the canonical version of a faceted navigation URL
