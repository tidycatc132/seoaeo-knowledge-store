# T12 Semantic parsing, query rewriting and expansion (query-rewriting)
Volatility: evolving. Stage 3.

## Idea to leave with
Search systems can reinterpret and widen what a person typed (add synonyms, use word context, issue related searches). A page is therefore matched to a topic and its sub-questions, not to one exact string.

## What a practitioner does differently
- Write in natural language and keep small words that change meaning (S005#P2).
- Cover the sub-questions around a topic instead of one phrase (S007#P1, fan-out described for AI features).
- Do not stuff synonym lists; expansion is done by the system (S001#P2, S001#P3).
- Do not follow advice that claims engine behaviour from a paper alone (S006).

## Findings
- Expansion adds synonyms and related words automatically; it generally increases recall and needs no user input (S001#P2, P4, P5). Added terms may be weighted lower (S001#P6). Query logs of other users' reformulations are one source (S001#P3).
- Pseudo relevance feedback assumes the top k results are relevant and expands from them; mostly works but can drift (S002#P3, P4, P2).
- BERT in Search uses words before and after a word; prepositions can change meaning (S005#P1, P2). Launch scale: 1 in 10 US English searches (S005#P3), a 2019 figure.
- Google documents query fan-out for AI Overviews/AI Mode and says no special optimization or schema is needed (S007#P1-P3).
- HyDE paper: an LM writes a hypothetical document; may contain false details (S006). A method, not evidence of any engine.

## Conflicts and resolution
None direct. The IR-book describes classical methods (2008-09); modern engines' exact rewriting is unconfirmed. Resolved by marking engine behaviour unconfirmed except where Google documents it (S005, S007).

## Dead ends
Semantic parsing (formal meaning representations) had no practitioner-relevant source found; cut.

## Merged/cut
Synonym expansion and PRF merged in. Rocchio mathematics cut (not audit-relevant). Cut: statements about which engines use HyDE.

## R1 fixes
Fan-out to 'cover sub-questions' and BERT to 'keep prepositions' are labelled practitioner inference (S007 does not promise inclusion; S005 is a 2019 query-understanding post, not title advice). Synonym-list advice is judgement. Recall item reworded to what S001#P4 states.
