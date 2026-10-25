# T42 Lexical relevance and keyword weighting (lexical-relevance-bm25)
Volatility: stable. Stage 4. Merged from T3.

## Idea to leave with
Lexical scoring rewards distinctive terms (idf), with diminishing returns for repeats (BM25 saturation) and length normalisation (b). There is no saved source that keyword density is a target; Google defines keyword stuffing as spam.

## What a practitioner does differently
Stops setting density targets; writes naturally (S209, S210). Tunes k1 and b on own site search (S202).

## Findings
S200 tf-idf extremes; S201 idf; S202 k1 and b; S206 bag of words; S207 proximity window (summary only); S211 BM25 as scoring function with saturation and length normalisation; S209 keyword stuffing; S210 Mueller via SEJ.

## Conflicts
No source says in so many words "keyword density is not a ranking factor". Myth correction is worded to what S209 and S210 support. S210 is grade B (secondary report of a video; no transcript opened), so no item answer relies on it alone.

## Dead ends
Matt Cutts/other Google transcripts and Google's SEO Starter Guide: not opened. Search results were mostly vendor blogs (rejected, grade D).

## Cut
Formulas, BM25F, Lucene defaults (no quote), proximity as an item (only one textbook quote).

## R3 fixes
S202#P4 re-saved with 'b = 0'; S200#P4 added; Mueller quoted exactly from S210#P1; unsupported larger-k1 and 'once in few docs' claims removed or sourced. MCQ letters rebalanced (A7 B7 C6 D6) and correct option no longer the longest or shortest.
