---
id: S220
url: https://arxiv.org/abs/2107.05720
title: SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking
publisher: Formal, Piwowarski, Clinchant; SIGIR 2021 (arXiv)
grade: A
page_date: 2021-07-12
opened: 2026-10-25 (extra passages 2026-10-29 from the PDF; match after removing line breaks and hyphenation; P6 "they" = BOW models, P12 "its" = dense retrieval)
status: used
---
Summary: Original SPLADE paper: a first-stage ranker with explicit sparsity regularization, usable with inverted indexes, competitive with dense and sparse methods.
## Passages
### P1 title
> SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking
### P2 sparsity
> we present a new first-stage ranker based on explicit sparsity regularization
### P3 competitive
> competitive results with respect to state-of-the-art dense and sparse methods
### P4 inverted
> it can operate on inverted indexes
### P5 expansion
> SPLADE performs an efficient document expansion
### P6 vocabulary mismatch
> they suffer from the long standing vocabulary mismatch problem
### P7 bow strengths
> the exact matching of terms and the efficiency of inverted indexes
### P8 log saturation
> a log-saturation effect which prevents some terms to dominate
### P9 flops control
> its sparsity/FLOPS can be controlled explicitly through the regularization
### P10 expansion adds terms
> The document expansion adds new terms to documents – hence fighting the vocabulary mismatch –
### P11 reweighting
> as well as repeats existing terms, implicitly performing re-weighting by boosting important terms.
### P12 dense weakness
> its inability to explicitly model term matching
### P13 interpretability
> efficiency of inverted indexes and interpretability
