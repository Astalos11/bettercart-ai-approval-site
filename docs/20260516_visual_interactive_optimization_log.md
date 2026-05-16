# BetterCart AI Visual And Interactive Optimization Log

Date: 2026-05-16

## Direction

This pass shifts the approval website away from text-heavy trust pages and toward a more visual, reviewable product site.

Primary goals:

- improve first-glance readability
- add tasteful emoji and visual cards
- add concrete shopping scenarios
- make the demo feel interactive
- use USDA-derived static sample data where useful

## Completed So Far

- Added visual shopping scenario cards to the homepage.
- Added a color-coded metric preview for sugar, sodium, protein, and calories.
- Replaced the main hero asset with a generated packaged-food comparison visual.
- Optimized the generated image from a large PNG to a 116KB WebP.
- Added image banners to the guide and comparison index pages.
- Added emoji topic cards to guide, comparison, and topic pages.
- Added color-coded metric cells to comparison tables.
- Added automatic comparison highlight cards:
  - lowest sugar
  - highest protein
  - sodium watch
- Expanded the demo from tiny fictional examples to rounded USDA-derived static samples.
- Added demo category filtering, intent sorting, selected-product comparison, top-sample result card, and metric bars.
- Added USDA FDC sample provenance inside the demo.
- Added footer trust badges and updated social image metadata.
- Added QA coverage for oversized public images and USDA demo provenance.

## Current QA

Local QA passes:

```text
npm run check:local
```

Coverage includes:

- production build
- required static routes
- internal links
- placeholder checks
- high-risk claim checks
- image alt checks
- external anchor checks
- sitemap critical paths
- disclosure checks
- image size checks
- docs index checks

## Live Deployment Note

The temporary Netlify live site still showed stale-route behavior during this pass:

- `/program-compliance/` returned 404
- `/humans.txt` returned 404

Local static export continues to pass. Treat this as a Netlify deploy/settings issue unless a fresh deploy proves otherwise.

## Remaining Useful Work

- More visual polish on long trust/policy pages without weakening legal clarity.
- Optional additional generated category imagery if the site still feels too text-heavy.
- More demo sample coverage if USDA-derived static examples need broader categories.
- Live Netlify QA after deployment catches up.

