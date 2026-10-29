---
id: S017
url: https://arxiv.org/abs/2309.15217
title: Ragas: Automated Evaluation of Retrieval Augmented Generation
publisher: arXiv (Es, James, Espinosa-Anke, Schockaert)
grade: A
page_date: 2023-09-26
opened: 2026-10-24 (extra passages 2026-10-29 P7-P12)
status: used
---
Summary: Paper presenting reference-free RAG evaluation along faithfulness, answer relevance and context relevance. Evidence of a method, not of any engine's behaviour.
## Passages
### P1 reference-free
> a framework for reference-free evaluation of Retrieval Augmented Generation (RAG) pipelines.
### P2 no labels
> without having to rely on ground truth human annotations.
### P3 faithfulness
> Faithfulness refers to the idea that the answer should be grounded in the given context.
### P4 answer relevance
> We say that the answer as(q) is relevant if it directly addresses the question in an appropriate way.
### P5 context relevance
> The context c(q) is considered relevant to the extent that it exclusively contains information
### P6 context relevance continued (page returned in two pieces)
> that is needed to answer the question.
### P7 two modules
> RAG systems are composed of a retrieval and an LLM based generation module
### P8 several dimensions
> Evaluating RAG architectures is, however, challenging because there are several dimensions to consider
### P9 retrieval ability
> the ability of the retrieval system to identify relevant and focused context passages
### P10 faithful use
> the ability of the LLM to exploit such passages in a faithful way
### P11 generation quality
> the quality of the generation itself
### P12 faster cycles
> faster evaluation cycles of RAG architectures
