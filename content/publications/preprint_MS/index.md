---
title: 'A Machine Learning Pipeline for Multiple Sclerosis Biomarker Discovery: Comparing explainable AI and Traditional Statistical Approaches'

authors:
  - samuele
  - S.G. Galfrè
  - F. Massafra
  - A. Maglione
  - C. Priami
  - A. Sîrbu

date: '2025-09-26T00:00:00Z'
publishDate: '2025-09-26T00:00:00Z'

publication_types: ['paper-conference']

publication: '20th Conference on Computational Intelligence Methods for Bioinformatics and Biostatistics (CIBB 2025), oral presentation'
publication_short: 'CIBB 2025 · Oral presentation'

abstract: We present a machine learning pipeline for biomarker discovery in Multiple Sclerosis (MS), integrating eight publicly available microarray datasets from Peripheral Blood Mononuclear Cells (PBMC). After robust preprocessing we trained an XGBoost classifier optimized via Bayesian search. SHapley Additive exPlanations (SHAP) were used to identify key features for model prediction, indicating thus possible biomarkers. These were compared with genes identified through classical Differential Expression Analysis (DEA). Our comparison revealed both overlapping and unique biomarkers between SHAP and DEA, suggesting complementary strengths. Enrichment analysis confirmed the biological relevance of SHAP-selected genes, linking them to pathways such as sphingolipid signaling, Th1/Th2/Th17 cell differentiation, and Epstein-Barr virus infection all known to be associated with MS. This study highlights the value of combining explainable AI (xAI) with traditional statistical methods to gain deeper insights into disease mechanism.

summary: A Machine Learning pipeline comparing explainable AI and traditional statistical approaches for Multiple Sclerosis biomarker discovery.

tags:
  - Explainable AI
  - Multiple Sclerosis
  - Biomarkers
  - Machine Learning

featured: true

links:
  - type: pdf
    url: https://arxiv.org/pdf/2509.22484

image:
  caption: ''
  focal_point: ''
  preview_only: false

projects: []
slides: ""
---

This paper presents a comprehensive machine learning pipeline for biomarker discovery in Multiple Sclerosis, comparing **explainable AI** methods (SHAP, LIME) with traditional statistical approaches. The pipeline was applied to Microarray and scRNA-seq transcriptomics data, evaluating different feature selection and interpretation strategies.

Key contributions:
- Systematic comparison of XAI-based vs. statistical biomarker identification
- Integration of multiple data modalities (Microarray, scRNA-seq)
- Biological validation through enrichment analysis tools (DAVID, StringDB, Cytoscape)
