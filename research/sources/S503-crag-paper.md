---
id: S503
url: https://arxiv.org/abs/2401.15884
title: Corrective Retrieval Augmented Generation
publisher: arXiv (Yan et al.)
grade: A
page_date: 2024-01-29
opened: 2026-10-25 (extra passages 2026-10-29 P5-P9)
status: used
---
Summary: Paper describing CRAG: a lightweight evaluator grades retrieved documents, confidence triggers different actions including web search. Evidence of a method, not of any product's behaviour.
## Passages
### P1 evaluator
> a lightweight retrieval evaluator is designed to assess the overall quality of retrieved documents for a query
### P2 confidence
> returning a confidence degree based on which different knowledge retrieval actions can be triggered
### P3 web search
> large-scale web searches are utilized as an extension for augmenting the retrieval results
### P4 decompose
> a decompose-then-recompose algorithm is designed for retrieved documents to selectively focus on key information
### P5 hallucinations
> Large language models (LLMs) inevitably exhibit hallucinations
### P6 relevance reliance
> it relies heavily on the relevance of retrieved documents
### P7 static corpora
> retrieval from static and limited corpora can only return sub-optimal documents
### P8 filter
> selectively focus on key information and filter out irrelevant information
### P9 plug-and-play
> CRAG is plug-and-play and can be seamlessly coupled with various RAG-based approaches.
