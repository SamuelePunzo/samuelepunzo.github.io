# Website maintenance

## Profile photo

The homepage is ready for a real portrait. Add the chosen photo as
`assets/media/authors/bio.jpg` (or `bio.png` / `bio.webp`; keep only one).
Hugo crops it to a circle and generates a 400px WebP image automatically.
Until then, no placeholder or broken image appears.

## Publications

Each paper lives in `content/publications/<slug>/index.md` with a neighboring
`cite.bib`. Update the title, author order, venue, short venue label, summary,
PDF link, and citation together. Keep the existing folder name when updating a
paper so its URL remains stable. The homepage lists all publications newest first.

Metadata was checked against the six records at
https://scholar.google.com/citations?user=uBrcokoAAAAJ&hl=en on 2026-11-03.
The EMNLP citation is the official ACL Anthology BibTeX; other new citations
refer to their arXiv versions and record workshop status in the note field.
Dates use first public release dates for stable sorting. New paper descriptions
are editorial summaries, not verbatim abstracts. Publication updates are manual;
the Scholar link always leads to the live profile.

## Theme and animation

`config/_default/params.yaml` defaults to light mode, using the white default
palette and the existing retro dark palette. Visitors' explicit theme choices
are remembered by HugoBlox.

`assets/js/profile-particles.js` uses the particles.js 2.0.0 library and the
dot/line settings seen at https://giulionisi.me/ (no background photograph).
The library is self-hosted in `static/js/vendor/`, with its MIT license.
The animation supports a pause button, reduced motion, theme changes, and
pausing when hidden or scrolled out of view. Appearance is in `assets/css/custom.css`.

## Preview and build

Use the Hugo version pinned in `hugoblox.yaml` (currently 0.159.1 extended).
Run `pnpm dev` to preview. Run `pnpm build` to build the site and search index.
The existing GitHub Actions workflow deploys pushes to `main`; no hosting setup
has been changed.
