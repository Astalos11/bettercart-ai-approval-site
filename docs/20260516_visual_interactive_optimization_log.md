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
- Added a second generated WebP flat lay image for guide index and guide article pages.
- Removed the unused old PNG workspace image.
- Added visual summaries to key trust pages and the editorial team page.
- Converted FAQ entries to native expandable details.
- Added a searchable Site Index client component.
- Added searchable guide, comparison, and topic index components with visible result counts.
- Added quick search chips, clear controls, and active states to searchable indexes.
- Added demo selected-product summary cards.
- Added a visual intro panel, selected-count status, and dynamic top-result reasoning to the demo.
- Added a demo reset selection control.
- Added reviewer-facing interactive checkpoints for demo, site search, and comparison pages.
- Expanded visual summary cards across most trust and policy pages.
- Added a publisher application snapshot matrix to the Publisher Kit page.
- Added a data source coverage snapshot matrix to the Data Sources page.
- Added content-type chips and next-step cards to guide and comparison detail pages.
- Added basic Netlify security headers and QA coverage for their contents.
- Added WebSite structured data and QA coverage for its presence.
- Added image loading hints for generated visual assets.
- Added reduced-motion handling for hover interactions.
- Added QA coverage for forbidden medical-symbol visuals.
- Expanded live QA expectations for demo provenance and image assets.

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
- homepage sample provenance checks
- interactive search control checks
- demo reset control checks
- security header checks
- structured data checks
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
