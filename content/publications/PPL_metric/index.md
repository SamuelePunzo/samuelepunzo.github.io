---
title: "Is my model perplexed for the right reason? Contrasting LLMs' Benchmark Behavior with Token-Level Perplexity"

authors:
  - Z. Prins
  - samuele
  - F. Wildenburg
  - G. Cinà
  - S. Pezzelle

author_notes:
  - 'Equal contribution'
  - 'Equal contribution'
  - 'Equal contribution'

date: '2026-03-31T00:00:00Z'
publishDate: '2026-03-31T00:00:00Z'

publication_types: ['paper-conference']

publication: 'Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing'
publication_short: 'EMNLP 2026'

abstract: "Standard evaluations of Large language models (LLMs) focus on task performance, offering limited insight into whether correct behavior reflects appropriate underlying mechanisms and risking confirmation bias. We introduce a simple, principled interpretability framework based on token-level perplexity to test whether models rely on linguistically relevant cues. By comparing perplexity distributions over minimal sentence pairs differing in one or a few `pivotal' tokens, our method enables precise, hypothesis-driven analysis without relying on unstable feature-attribution techniques. Experiments on controlled linguistic benchmarks with several open-weight LLMs show that, while linguistically important tokens influence model behavior, they never fully explain perplexity shifts, revealing that models rely on heuristics other than the expected linguistic ones."

summary: "A principled interpretability framework based on token-level perplexity to test whether LLMs rely on linguistically relevant cues in benchmark evaluations."

tags:
  - Mechanistic Interpretability
  - Large Language Models
  - NLP
  - Perplexity

featured: true

links:
  - type: pdf
    url: https://aclanthology.org/2026.emnlp-main.110.pdf
  - type: site
    label: ACL Anthology
    url: https://aclanthology.org/2026.emnlp-main.110/
  - type: preprint
    url: https://arxiv.org/abs/2603.29396

image:
  caption: ''
  focal_point: ''
  preview_only: false

projects: []
slides: ""
---

This paper introduces a simple, principled interpretability framework based on **token-level perplexity** to test whether LLMs rely on linguistically relevant cues when solving benchmarks.

Key contributions:
- A hypothesis-driven analysis method using perplexity distributions over minimal sentence pairs
- No reliance on unstable feature-attribution techniques
- Experiments on controlled linguistic benchmarks with several open-weight LLMs
- Evidence that linguistically important tokens influence but never fully explain model behavior, revealing reliance on non-linguistic heuristics
