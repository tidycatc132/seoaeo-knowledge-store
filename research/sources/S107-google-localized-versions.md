---
id: S107
url: https://developers.google.com/search/docs/specialty/international/localized-versions
title: Tell Google about localized versions of your page (hreflang)
publisher: Google Search Central
grade: A
page_date: 2026-09-21
opened: 2026-10-25 (extra passages 2026-10-29 P8-P11)
status: used
---
Summary: hreflang tells Google about language/region variants; every version must list itself and all others. x-default is the fallback; three equivalent methods.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 why
> Doing so will help Google Search point users to the most appropriate version of your page by language or region.
### P2 return-links
> Each language version must list itself as well as all other language versions.
### P3 x-default
> The reserved `x-default` value is used when no other language/region matches the user's browser setting.
### P4 methods
> There are three ways to indicate multiple language/locale versions of a page to Google:
### P5 equivalent
> The three methods are equivalent from Google's perspective.
### P6 codes
> Only language codes listed in ISO 639-1 and region codes listed in ISO 3166-1 Alpha 2 are supported.
### P7 method names
> HTML tags
> HTTP Headers
> Sitemap
### P8 fully-qualified
> Alternate URLs must be fully-qualified, including the transport method (http/https)
### P9 both point
> If two pages don't both point to each other, the tags will be ignored.
### P10 link syntax
> <link rel="alternate" hreflang="lang_code" href="url_of_page" />
### P11 region alone
> Specifying the region alone is not valid.
