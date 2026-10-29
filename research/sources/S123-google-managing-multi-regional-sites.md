---
id: S123
url: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
title: Managing multi-regional and multilingual sites
publisher: Google Search Central
grade: A
page_date: 2025-12-10
opened: 2026-10-25 (extra passages 2026-10-29 P4-P16)
status: used
---
Summary: Google does not use lang attributes or the URL for language detection; avoid auto-redirecting by language; do not translate only boilerplate.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 lang
> We don't use any code-level language information such as `lang` attributes, or the URL.
### P2 redirect
> Avoid automatically redirecting users from one language version of a site to a different language version of a site.
### P3 boilerplate
> Translating only the boilerplate text of your pages while keeping the bulk of your content in a single language
### P4 visible content
> Google uses the visible content of your page to determine its language.
### P5 different URLs
> Google recommends using different URLs for each language version of a page
### P6 multilingual
> A multilingual website is any website that offers content in more than one language.
### P7 multi-regional
> A multi-regional website is one that explicitly targets users in different countries.
### P8 link versions
> Consider adding hyperlinks to other language versions of a page
### P9 not cookies
> rather than using cookies or browser settings to adjust the content language on the page.
### P10 URL options
> example.de
> de.example.com
> example.com/de/
> site.com?loc=de
### P11 parameters
> Not recommended.
### P12 signals
> Google relies on a number of signals to determine the best target audience for a page:
### P13 ccTLD
> Country-code top-level domain names (ccTLDs).
### P14 hreflang signal
> hreflang statements, whether in tags, headers, or sitemaps.
### P15 server
> Server location (through the IP address of the server).
### P16 server not definitive
> so it is not a definitive signal.
