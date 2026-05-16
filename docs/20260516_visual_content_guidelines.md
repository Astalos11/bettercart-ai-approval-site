# BetterCart AI Visual Content Guidelines

Date: 2026-05-16

## Purpose

Visuals should make the approval website easier to scan without weakening trust or creating unsupported product claims.

## Use

- Use optimized WebP assets when adding generated imagery.
- Keep public image files under 500KB unless there is a clear reason.
- Use unbranded packaged-food scenes, nutrition label cards, comparison tables, and UI-style product cards.
- Use emoji for scanability in topic cards, demo controls, and summaries.
- Use color-coded metric cells only as comparison hints, not universal health ratings.
- Label demo/sample data clearly.

## Avoid

- fake retailer screenshots
- fake product reviews
- fake user testimonials
- fake brand endorsements
- fake traffic or authority signals
- medical symbols or disease-treatment visuals
- real affiliate links before approval
- generated packages that look like real trademarked brands

## Current Assets

- `/images/food-comparison-visual-v2.webp`
  - homepage, comparison index, reviewer page, social preview
- `/images/packaged-food-guide-flatlay.webp`
  - guide index and guide article pages

## QA

Run before committing visual changes:

```bash
npm run check:local
```

Static QA checks:

- image alt text
- oversized public images
- high-risk claims
- required disclosures
- internal links

