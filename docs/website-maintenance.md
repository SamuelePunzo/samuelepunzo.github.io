# Website maintenance

## Profile photo

The homepage portrait is `assets/media/authors/bio.jpg`. Hugo generates a 320px
WebP image and displays it above the name in a circle: 160px on desktop, 128px
on mobile. Replace this file to update the photo.

## Research experience

The compact homepage path uses `data/authors/bio.yaml` → `experience`. It lists
research roles only; entries without an end date receive a Current badge. The
full timeline uses `data/authors/me.yaml` and also includes teaching. Keep the
two lists consistent. These roles and dates were checked against the supplied
academic CV on 2026-11-03. The MPI-INF end date was corrected to October 2026 by the site owner. The interests are stored in the same author files.

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
palette with the previous retro teal green (`#115e59`) for primary accents, and the existing retro dark palette. Visitors' explicit theme choices
are remembered by HugoBlox.

`assets/js/profile-particles.js` uses the particles.js 2.0.0 library and the
dot/line settings seen at https://giulionisi.me/ (no background photograph).
The library is self-hosted in `static/js/vendor/`, with its MIT license.
The animation respects reduced motion and pauses automatically when hidden or
scrolled out of view. It adapts to theme changes and has no visible pause button. Appearance is in `assets/css/custom.css`.

## Preview and build

Use the Hugo version pinned in `hugoblox.yaml` (currently 0.159.1 extended).
Run `pnpm dev` to preview. Run `pnpm build` to build the site and search index.
The existing GitHub Actions workflow deploys pushes to `main`; no hosting setup
has been changed.

## Research overview and article figures

The introduction is in the author data files. The Research goals section in
`content/_index.md` follows the owner's research proposal, separating completed
work from future research goals. The private proposal and CV are not published.

The three new publication bundles include original `featured.png` figures from
their articles. The animacy overview is Figure 1, Hi-LeWM architecture is Figure
4, and intuitive-physics comparison is Figure 3. Each image has a source link
and descriptive alt text in its paper's front matter. All publication previews
use the same rectangular frame and preserve the complete image. Author notes
render as superscript asterisks, with the explanation retained for accessibility.

The homepage interests sit between the social links and CV button. Research
roles appear as connected stops, newest first, with a filled current-role marker.
Header sizing and the path are styled in `assets/css/custom.css`; the about
and Research goals section padding is configured in `content/_index.md`.

Alternating section backgrounds begin at Research goals: shaded research goals,
plain publications, then shaded experience. Awards are not shown on the homepage. The first five authors
of the intuitive-physics and hierarchical-planning papers are marked as equal
contributors, as confirmed by the site owner.

Hover interaction listens across the whole About area, including text and links,
and maps pointer coordinates to the canvas pixels. It clears on mouse leave,
scroll, and paused/reduced-motion states. The footer credits Giulio Nisi and
links to his website.

## Combined experience and education path

The full Experience block merges `experience` and `education` from
`data/authors/me.yaml`, sorted by start date. On desktop, stops labeled with their starting month and year rise
from the bottom left to the top right; on narrow screens they read from top
to bottom in chronological order. Cards show titles and institutions; date ranges are omitted;
long descriptions remain in the author data and CV. The `lab` and `supervisor`
fields expand the titles of research assistant and visiting researcher roles.
The local `resume-experience` block, `assets/js/experience-journey.js`, and
the journey styles in `assets/css/custom.css` implement the route. The SVG
is decorative and recalculated when the layout or fonts resize. Education
with a future end date is marked In progress; open-ended roles are Current.

The downloadable `static/uploads/resume.pdf` was replaced with the owner's
supplied `CV_SamuelePunzo_academia.pdf` on 2026-11-03.
