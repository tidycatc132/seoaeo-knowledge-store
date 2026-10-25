# T40-rendering-javascript

## Single idea
Google crawls, queues for rendering, renders with headless Chromium, then indexes; use real links and do not depend on JS to remove noindex.

## What practitioners do differently
Check rendered HTML; use <a href>; avoid fragment content; do not ship noindex expecting JS to remove it.

## Key findings
S105, S121, S120.

## Conflicts and resolution
None. Render-queue delay length not quoted, so not used.

## Dead ends
Lazy-loading and interaction-hidden content not on the fetched page; cut. Bing JS guidance not fetched.

## Merged or cut
Cut: dynamic rendering, SSR options.

## Volatility
evolving

## R2 fixes (2026-10-25)
Re-fetched phase names, saved as S105#P7 and cited by L1-01; L3-02 option reworded to the S121#P3 quote; L4-02 evidence no longer states the answer.
