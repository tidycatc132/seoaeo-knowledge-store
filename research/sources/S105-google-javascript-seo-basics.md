---
id: S105
url: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
title: Understand JavaScript SEO basics
publisher: Google Search Central
grade: A
page_date: 2026-03-04
opened: 2026-10-25 (extra passages 2026-10-29 P8-P15)
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
### P8 robots first
> it first checks if you allow crawling
### P9 200 queued
> Googlebot queues all pages with a 200 HTTP status code for rendering
### P10 queue time
> The page may stay on this queue for a few seconds, but it can take longer than that.
### P11 SSR
> server-side or pre-rendering is still a great idea because it makes your website faster
### P12 status codes
> To tell Googlebot if a page can't be crawled or indexed, use a meaningful status code,
### P13 History API
> Use the History API instead of fragments
### P14 title via JS
> You can use JavaScript to set or change the meta description as well as the <title> element.
### P15 links after render
> Googlebot parses the rendered HTML for links again and queues the URLs it finds for crawling.
