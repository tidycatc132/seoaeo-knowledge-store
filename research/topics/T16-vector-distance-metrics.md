# T16 Vector distance metrics (vector-distance-metrics)
Volatility: stable. Stage 4.

## Idea to leave with
Cosine, dot product, L2 and L1 are different calculations; tools differ in score formulas and in what they require (unit-length vectors).

## What a practitioner does differently
Checks the embedding model docs for the metric and each tool's conventions (S216, S217).

## Findings
S205 cosine as dot product over lengths; S216 Elastic options and formulas; S217 pgvector operators; S212 DPR uses dot product.

## Conflicts
None. No saved source ranks metrics or says which suits text embeddings; the item on Manhattan is the unsupported-statement distractor.

## Cut
Metric choice by model, curse of dimensionality, geometry (no quotes).

## R3 fixes
S216#P3 re-saved with 'When element_type is float'; duplicate <#> items replaced (max_inner_product true/false, cosine length-normalization MCQ); l2 score item now MCQ; summary trimmed to sourced claims. MCQ letters rebalanced (A7 B7 C6 D6) and correct option no longer the longest or shortest.
