---
id: S114
url: https://www.rfc-editor.org/rfc/rfc9309.html
title: RFC 9309: Robots Exclusion Protocol
publisher: IETF
grade: A
page_date: 2022-09-01
opened: 2026-10-25
status: used
---
Summary: The standard for robots.txt: not access authorization; caching up to 24h; 5xx means assume disallow; 4xx means access allowed.
Note: quotes were returned by WebFetch extraction; fragments kept short.
## Passages
### P1 not-auth
> These rules are not a form of access authorization.
### P2 cache
> Crawlers SHOULD NOT use the cached version for more than 24 hours, unless the robots.txt file is unreachable.
### P3 5xx
> the crawler MUST assume complete disallow.
### P4 4xx
> then the crawler MAY access any resources on the server.
### P5 size
> The parsing limit MUST be at least 500 kibibytes.
### P6 unreachable
> the robots.txt file is undefined and the crawler MUST assume complete disallow
