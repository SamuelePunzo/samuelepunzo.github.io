---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '5rem'

sections:
  - block: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: bio
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: 'Current Positions'
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: false
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: markdown
    id: research
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I am a Research Assistant at the [Institute for Logic, Language and Computation (ILLC)](https://www.illc.uva.nl/) at the University of Amsterdam, where I work on **mechanistic interpretability** of transformer models — specifically identifying the internal neural circuits responsible for linguistic disambiguation.

        Previously, at the University of Pisa, I developed **explainable machine learning pipelines** for biomedical applications, including novel biomarker discovery for Multiple Sclerosis using multi-omics data (Microarray & scRNA-seq) and interpretability tools such as SHAP and LIME.

        My research interests span **mechanistic interpretability, explainable AI, NLP, and biomedical applications of machine learning**.
    design:
      columns: '1'
      css_class: 'wide-content'
  - block: collection
    id: papers
    content:
      title: Publications
      text: 'See my [Google Scholar profile](https://scholar.google.com/citations?user=uBrcokoAAAAJ&hl=en) for the latest publications and citations.'
      count: 0
      sort_by: Date
      sort_ascending: false
      filters:
        folders:
          - publications
        featured_only: false
    design:
      view: compact
      columns: 1
      css_class: 'bg-zinc-50 dark:bg-zinc-900/50'
  - block: resume-experience
    id: experience
    content:
      username: me
    design:
      date_format: 'January 2006'
      is_education_first: false
  - block: resume-awards
    content:
      title: Awards
      username: me
    design:
      columns: '1'
      css_class: 'bg-zinc-50 dark:bg-zinc-900/50'

---
