---
id: S501
url: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
title: Robots meta tag, data-nosnippet, and X-Robots-Tag specifications
publisher: Google Search Central
grade: A
page_date: 2026-03-24
opened: 2026-10-25
status: used
---
Summary: Google specification of snippet controls. Says nosnippet and max-snippet also affect use as direct input to AI Overviews and AI Mode. Does not discuss featured snippets.
## Passages
### P1 nosnippet scope
> This applies to all forms of search results (at Google: web search, Google Images, Discover, AI Overviews, AI Mode)
### P2 nosnippet AI input
> and will also prevent the content from being used as a direct input for AI Overviews and AI Mode.
### P3 max-snippet
> Use a maximum of [number] characters as a textual snippet for this search result.
### P4 max-snippet AI
> and will also limit how much of the content may be used as a direct input for AI Overviews and AI Mode.
### P5 max-snippet zero
> 0: No snippet is to be shown. Equivalent to nosnippet.
### P6 data-nosnippet
> You can designate textual parts of an HTML page not to be used as a snippet.
