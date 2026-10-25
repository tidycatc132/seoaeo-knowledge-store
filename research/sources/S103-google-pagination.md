---
id: S103
url: https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading
title: Pagination, incremental page loading, and their impact on Google Search
publisher: Google Search Central
grade: A
page_date: 2025-12-10
opened: 2026-10-25
status: used
---
Summary: Paginated pages need unique URLs, their own canonicals, and crawlable href links to the next page.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 unique
> Give each page a unique URL.
### P2 no-first
> Don't use the first page of a paginated sequence as the canonical page.
### P3 own-canonical
> Instead, give each page its own canonical URL.
### P4 href
> Google generally crawls URLs found in the `href` attribute of `<a>` elements.
