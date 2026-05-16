# BetterCart AI Visual And Interactive Website Optimization Plan

Date: 2026-05-16

## Context

The current approval website is structurally complete but reads too text-heavy. It has many trust, policy, guide, and comparison pages, but limited visual hierarchy, almost no imagery or emoji, and only a small amount of interactive product experience.

The next autonomous improvement pass should shift from "more pages" to "more readable, visual, and product-like."

## Goal

Make the affiliate approval site easier to scan and more credible for reviewers by adding:

- tasteful images and emoji
- clearer visual examples of use cases
- colorful comparison blocks and tables
- a richer demo experience if implementation cost stays reasonable

The site should still avoid fake reviews, fake traffic claims, medical advice, and unsupported health claims.

## Priority 1: Readability Through Visual Hierarchy

Purpose: reduce the wall-of-text impression.

Tasks:

- Add small, restrained emoji markers to high-level sections where they improve scanning.
- Add lightweight visual cards for key site concepts:
  - compare labels
  - check sugar / sodium / protein
  - understand tradeoffs
  - prepare purchase decisions
- Break long trust/policy sections into shorter blocks.
- Use callouts, colored bands, and compact summary rows instead of paragraphs where appropriate.

Constraints:

- Do not make the site look childish or unserious.
- Do not use emoji inside legal/policy text where it weakens credibility.
- Keep the tone suitable for affiliate network reviewers.

## Priority 2: Application Scenario Examples

Purpose: show how the product would be used, not only explain it.

Tasks:

- Add visual scenario blocks for common shopping intents:
  - low sugar snack comparison
  - high protein bar comparison
  - low sodium pantry choice
  - beverage sugar comparison
- Prefer colorful comparison tables or product cards if real images are not available.
- Add example "user need -> comparison criteria -> output" flows.
- Make examples visibly labeled as sample/demo content.

Good implementation options:

- Color-coded metric badges.
- Simple table heatmap styles.
- Before/after comparison cards.
- "Use case" strips on homepage, demo page, and comparison index.

Avoid:

- fake product photography
- fake retailer screenshots
- fake user testimonials
- unverified product claims

## Priority 3: Image Strategy

Purpose: add visual credibility without creating legal or factual problems.

Preferred image sources:

- simple generated illustrations for abstract scenes
- CSS/HTML product-style cards
- neutral food category imagery if license-safe
- self-contained visual mockups, not real retailer screenshots

Best first step:

- Use CSS-based visual panels and icon-like emoji first.
- Add real/generated bitmap images only where they add clear review value.

Image placement candidates:

- homepage hero or feature strip
- guide category cards
- comparison examples
- demo tool explanation panel
- reviewer-facing overview page

## Priority 4: Interactive Demo Expansion

Purpose: make the site feel like a usable AI food comparison assistant.

Current boundary:

- This is still an approval-site demo, not the full product backend.

Potential improvements:

- Add 6-12 demo products instead of only a tiny sample.
- Add filters for:
  - low sugar
  - low sodium
  - high protein
  - lower calorie
- Add a simple "compare selected products" interaction.
- Show nutrition tradeoffs with color-coded rows.
- Add short generated review notes based only on displayed fields.

USDA access:

- The local project has access to existing USDA-derived outputs in the broader workspace.
- If used, demo data should be copied as a small static sample dataset, not connected to raw CSV at runtime.
- Keep UPC / USDA provenance clear if real canonical samples are used.
- Do not expose raw data processing complexity in the approval site.

Non-goals:

- no recommendation engine
- no personalized health advice
- no medical logic
- no live retailer inventory
- no affiliate links unless provided

## Priority 5: Execution Difficulty Order

Start with low-risk visual changes:

1. Add emoji and visual cards to homepage / demo / comparison index.
2. Add colorful use-case tables to existing comparison pages.
3. Improve demo UI with current static sample products.
4. If time remains, add a small static USDA-backed sample file and demo filter controls.
5. Only after stable QA, consider generated category images.

Do not start with image-heavy design or USDA data integration before improving visual structure.

## QA Requirements

After each meaningful stage:

- run `npm run check:local`
- confirm no fake claims were introduced
- confirm sample/demo labeling remains visible
- commit and tag major visual or interactive milestones

If live Netlify is stale, record it separately and continue local improvements.

## Success Criteria

The next version should make a reviewer understand within 30 seconds:

- this is a food comparison publisher site
- the site has concrete use cases
- comparisons are data-oriented
- monetization is transparent
- the current product is an early but credible approval-site MVP

