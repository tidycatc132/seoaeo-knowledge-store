---
id: S105
url: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
title: Understand JavaScript SEO basics
publisher: Google Search Central
grade: A
page_date: 2026-03-04
opened: 2026-10-25
status: used
---
Summary: Google processes JS pages in crawling, rendering and indexing phases using headless Chromium. Links need <a href>; fragments should not load different content.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 phases
> Google processes JavaScript web apps in three main phases:
### P2 queue
> Googlebot queues pages for both crawling and rendering.
### P3 chromium
> Once Google's resources allow, a headless Chromium renders the page and executes the JavaScript.
### P4 noindex
> When Google encounters the `noindex` tag, it may skip rendering
### P5 links
> `<a>` HTML elements with an `href` attribute.
### P6 fragments
> don't use fragments to load different page content.
### P7 phase names
> Crawling
> Rendering
> Indexing
