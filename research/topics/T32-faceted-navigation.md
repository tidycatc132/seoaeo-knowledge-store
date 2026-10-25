# T32-faceted-navigation

## Single idea
Faceted URLs cause overcrawling and less time for new URLs; Google prefers robots.txt disallow or fragments over canonical/nofollow.

## What practitioners do differently
Find filter/sort URL crawl share; disallow or fragment low-value combos; 404 empty combos; fixed filter order.

## Key findings
S104 (all), S100 (soft 404, noindex), S103 (pagination, saved for T41).

## Conflicts and resolution
Canonical vs robots.txt: Google says canonical may reduce crawl over time but is less effective long term.

## Dead ends
The nofollow sentence in S104 was truncated by the fetch, so nofollow requirements were not used. Filtered vector search is out of scope.

## Merged or cut
Cut: nofollow details, pagination (in T41).

## Volatility
stable

## R2 fixes (2026-10-25)
Removed 'crawlers cannot tell if URLs are useful' and nofollow claims from explanation/summary; stripped giveaway clauses from case-file options.
