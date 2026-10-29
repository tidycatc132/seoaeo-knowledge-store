---
id: S502
url: https://arxiv.org/abs/2310.11511
title: Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection
publisher: arXiv (Asai et al.)
grade: A
page_date: 2023-10-17
opened: 2026-10-25 (extra passages 2026-10-29 P4-P7)
status: used
---
Summary: Paper describing a method in which a language model retrieves on demand and critiques passages and its own output using reflection tokens. Evidence of a method, not of any product's behaviour.
## Passages
### P1 reflection tokens
> using special tokens, called reflection tokens
### P2 on demand
> adaptively retrieves passages on-demand
### P3 reflects
> reflects on retrieved passages and its own generations
### P4 fixed retrieval
> indiscriminately retrieving and incorporating a fixed number of retrieved passages
### P5 cost of fixed retrieval
> diminishes LM versatility or can lead to unhelpful response generation
### P6 controllable
> Generating reflection tokens makes the LM controllable during the inference phase
### P7 gains
> significant gains in improving factuality and citation accuracy for long-form generations
