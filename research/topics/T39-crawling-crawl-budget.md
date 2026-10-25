# T39-crawling-crawl-budget

## Single idea
Crawl budget is the set of URLs Google can (server capacity) and wants (demand) to crawl; protect it by shrinking junk URL inventory, not with noindex. The frontier layer (priority plus politeness) is textbook design, not proof of Google's scheduler.

## What practitioners do differently
Audit where Googlebot spends requests; stop using noindex for crawl control; 404/410 removed pages; keep robots.txt reachable; do not treat sitemaps as guarantees.

## Key findings
S100 (budget definition, noindex, 404/410, soft 404, lastmod), S101 and S114 (robots.txt not for hiding; 5xx assumes disallow), S102 (sitemap no guarantee), S117/S118 (frontier, politeness, priority), S120 (no payment; indexing not guaranteed).

## Conflicts and resolution
Robots.txt vs noindex: both documented; RFC says 5xx means complete disallow but Google's exact handling not verified (flagged in item text). S116 (Googlebot) and S124 (Bing 2014 blog) saved but not used in items.

## Dead ends
Bing Webmaster Guidelines page is a JS app and returned no content; Bing JS blog not primary. Charikar not relevant here.

## Merged or cut
T34 (frontier/scheduling) merged here as the S117/S118 items. Cut: politeness numeric values, crawl-delay (no quote).

## Volatility
stable

## R2 fixes (2026-10-25)
Summary/actions reworded to the quoted scope (1 million+ unique pages, changes moderately often); frontier sentence attributed to the textbook; removed DNS/duplicate-elimination claim (L1-02), unsupported soft-404 'fix' advice (L3-02) and robots.txt-for-sorted-URLs claim (L4-01, now cites S104#P4 as faceted guidance plus inference); L4-02 now cites S114#P6 (full unreachable condition re-fetched).
