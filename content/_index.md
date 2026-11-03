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
        research_experience: 'Research Experience'
        interests: ''
    design:
      spacing:
        padding: ['2rem', '0', '1.25rem', '0']
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
      title: 'Research goals'
      subtitle: ''
      text: |-
        My research asks how we can develop robust explanations of model behavior and turn them into practical improvements in reliability, oversight, and safety. I am particularly interested in three connected directions:

        **Interpretability that generalizes.** My work on animacy circuits showed that mechanisms recovered for one task can fail to transfer when contexts and expected completions change. I want to develop causal interpretability methods that remain reliable across prompts, tasks, and data distributions, combining circuit discovery across tasks with interventions that test which mechanisms are stable.

        **How multimodal models reason about the world.** Building on my work on token-level perplexity, intuitive physics in video models, and spatial representations at MPI-INF, I aim to understand how models represent and use objects, spatial relations, and physical events. I am interested in when visual evidence guides reasoning, when it gives way to parametric knowledge, and whether explicit representations or causal interventions can help preserve relevant visual information.

        **Mechanistic interpretability for AI safety.** At SPAR, I investigate refusal circuits in encoder-free models. A longer-term goal is to understand how refusal mechanisms emerge and change during reinforcement learning from human feedback, and when they influence a model's response. I want to use these insights to inform alignment methods and improve oversight and safeguards while preserving useful capabilities.
    design:
      columns: '1'
      css_class: 'wide-content bg-zinc-50 dark:bg-zinc-900/50'
      spacing:
        padding: ['1.5rem', '0', '4rem', '0']
  - block: collection
    id: papers
    content:
      title: Publications
      text: ''
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
  - block: resume-experience
    id: experience
    content:
      username: me
    design:
      css_class: 'bg-zinc-50 dark:bg-zinc-900/50'
      date_format: 'January 2006'
      is_education_first: false
  - block: resume-awards
    content:
      title: Awards
      username: me
    design:
      columns: '1'

---
