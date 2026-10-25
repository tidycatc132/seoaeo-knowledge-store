# T29 RAG evaluation (rag-evaluation)
Volatility: fast-moving. Stage 8.

## Idea to leave with
Evaluate a RAG pipeline in parts: did retrieval bring relevant, focused context (context relevance); is the answer grounded in that context (faithfulness); does the answer address the question (answer relevance). A fluent answer can fail any one.

## What a practitioner does differently
- Score the three dimensions separately and diagnose which stage failed (S017, S018#P1).
- Use LLM judges with awareness they are automated; ARES finetunes judges (S018#P2); RAGAS is reference-free (S017#P1-P2).
- Pair with retrieval metrics (T7) for retrieval stage.

## Findings
S017 definitions (P3-P5); S018 same three dimensions; No saved source states that "groundedness" is a synonym of faithfulness; claim removed (R1 fixes).

## Conflicts
Naming differs: Ragas "context relevance", "faithfulness"; ARES "answer faithfulness". Treated as the same dimension.

## Dead ends
Practitioner/vendor posts on groundedness thresholds not graded A/B; cut. Practitioner judgement (not quoted): LLM-judge scores are estimates. No evidence any answer engine uses these metrics internally.

## Cut
Exact metric formulas, judge calibration numbers (not quoted).
