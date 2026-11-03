---
title: 'Machine Learning for analysis of Multiple Sclerosis cross-tissue bulk and single-cell transcriptomics data'

authors:
  - F. Massafra
  - samuele
  - S.G. Galfrè
  - A. Maglione
  - S. Pernice
  - S. Forti
  - S. Rolla
  - M. Beccuti
  - M. Clerico
  - C. Priami
  - A. Sîrbu

author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2026-03-05T00:00:00Z'
publishDate: '2026-03-05T00:00:00Z'

publication_types: ['article']

publication: 'arXiv:2603.05572'
publication_short: 'arXiv preprint'

abstract: Multiple Sclerosis (MS) is a chronic autoimmune disease of the central nervous system whose molecular mechanisms remain incompletely understood. In this study, we developed an end-to-end machine learning pipeline to analyze transcriptomic data from peripheral blood mononuclear cells and cerebrospinal fluid, integrating both bulk microarray and single-cell RNA sequencing datasets (concentrating on CD4+ and B-cells). After rigorous preprocessing, batch correction, and gene declustering, XGBoost classifiers were trained to distinguish MS patients from healthy controls. Explainable AI tools, namely SHapley Additive exPlanations (SHAP), were employed to identify key genes driving classification, and results were compared with Differential Expression Analysis (DEA). SHAP-prioritized genes were further investigated through interaction networks and pathway enrichment analyses. The models achieved strong performance, particularly in CSF B-cells (AUC=0.94) and microarray (AUC=0.86). SHAP gene selection proved to be complementary to classical DEA. Gene clusters identified across multiple datasets highlighted immune activation, non-canonical immune checkpoints (ITK, CLEC2D, KLRG1, CEACAM1), ribosomal and translational programs, ubiquitin-proteasome regulation, lipid trafficking, and Epstein-Barr virus-related pathways. Our integrative and explainable framework reveals complementary insights beyond conventional analysis and provides novel mechanistic hypotheses and potential biomarkers for MS pathogenesis.

summary: Integrative multi-omics and explainable ML analysis for pathway-level signatures discovery in Multiple Sclerosis.

tags:
  - Machine Learning
  - Multiple Sclerosis
  - Multi-Omics
  - Explainable AI
  - Transcriptomics

featured: true

links:
  - type: pdf
    url: https://arxiv.org/pdf/2603.05572

image:
  caption: ''
  focal_point: ''
  preview_only: false

projects: []
slides: ""
---

This paper presents an integrative approach combining **multi-omics data** (Microarray and scRNA-seq) with **explainable machine learning** methods for the discovery of pathway-level signatures in Multiple Sclerosis.

Key contributions:
- Cross-tissue integration of bulk and single-cell transcriptomics data
- Explainable ML pipeline for pathway-level biomarker identification
- Comparison of Microarray integration methods (ComBat, XPN)
- Biological enrichment analysis for pathway discovery
