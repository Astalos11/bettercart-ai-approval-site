# BetterCart AI Approval Site Autonomous Optimization Plan

Date: 2026-05-15

## Goal

Use the next working window, up to 2 hours, to iteratively improve the current BetterCart AI approval website for affiliate network review readiness.

The goal is not to build the final product website. The goal is to make the current template-quality approval site more credible, complete, navigable, and review-friendly while preserving the ability to roll back each meaningful version.

## Operating Rules

- Keep the site deployable at every checkpoint.
- Do not touch the USDA pipeline data or generated CSV files.
- Work only inside the approval site repo unless explicitly needed.
- Save modular backups using git commits and/or tags after meaningful milestones.
- If a task finishes early, immediately move to the next task.
- If the planned task list finishes before the 2-hour window ends, run another improvement pass instead of idling.
- Avoid large architecture changes unless the benefit is clear and the change is isolated.
- Favor practical affiliate approval credibility over product architecture sophistication.

## Backup Strategy

Before edits:

- Confirm clean or understood git status.
- Run a build if the local environment allows it.
- Create baseline tag:
  - `snapshot-before-optimization`

During work:

- Commit after each stable improvement group.
- Add optional tags at major checkpoints:
  - `snapshot-after-trust-content`
  - `snapshot-after-guide-polish`
  - `snapshot-after-demo-polish`
  - `snapshot-after-final-qa`

If a larger or riskier feature is attempted, isolate it in one commit so it can be reverted without disturbing the rest of the work.

## Priority 1: Trust And Approval Readiness

Purpose: make the site look like a real publisher property, not an empty AI placeholder.

Tasks:

- Replace placeholder contact language with `contact@bettercartai.com`.
- Strengthen About, Contact, Editorial Policy, Methodology, Privacy, Terms, and Affiliate Disclosure pages.
- Make affiliate disclosure explicit but not alarming.
- Clarify that the site provides shopping research, not medical advice.
- Add concise editorial standards:
  - nutrition label based
  - ingredient list based
  - product comparison oriented
  - no paid ranking promise unless disclosed
- Ensure every trust page has enough substance to pass a quick manual review.

Exit criteria:

- No obvious placeholder trust text.
- Contact path is clear.
- Site purpose is clear within one minute.

## Priority 2: Homepage Credibility

Purpose: make the homepage communicate a clear content publisher concept.

Tasks:

- Make the first viewport say what BetterCart AI does in plain language.
- Add a short "how we compare products" section.
- Add visible links to guides, comparisons, and demo tool.
- Add a small trust section explaining data-driven comparison principles.
- Avoid implying final live retailer checkout if the site is not ready for it.

Exit criteria:

- Reviewer can understand the site's audience and content model quickly.
- Homepage does not feel like a thin landing page.

## Priority 3: Guide Content Polish

Purpose: reduce template smell and make articles look useful enough for a publisher application.

Tasks:

- Improve 6 existing guide pages with clearer intros and practical sections.
- Add concrete examples where useful, without pretending to have live product inventory.
- Keep content readable and non-medical.
- Avoid exaggerated health claims.

Exit criteria:

- Each guide feels like a real article, not a stub.
- Articles support the site's affiliate publisher positioning.

## Priority 4: Comparison Page Polish

Purpose: make comparison pages look like the natural affiliate content format.

Tasks:

- Improve low-sugar snacks and high-protein bars comparison pages.
- Add clearer comparison criteria.
- Add "what to check before buying" sections.
- Keep all product names as examples unless actual affiliate links exist.
- Avoid fake reviews or fake personal testing claims.

Exit criteria:

- Comparison pages demonstrate the business model without making unsupported claims.

## Priority 5: Demo Tool Polish

Purpose: make the interactive demo look intentional and useful.

Tasks:

- Improve the food comparison demo copy and layout.
- Make outputs feel structured:
  - nutrition fit
  - tradeoffs
  - label checks
  - what the assistant would compare next
- Do not overbuild scoring or recommendation systems.

Exit criteria:

- Demo helps a reviewer understand the AI-assisted comparison concept.
- Demo remains clearly a prototype/sample.

## Priority 6: Technical And SEO QA

Purpose: avoid deployment and crawler issues.

Tasks:

- Run production build.
- Check static export output.
- Check sitemap and robots routes.
- Confirm internal links do not point to missing pages.
- Improve metadata if obvious gaps exist.
- Keep Netlify compatibility intact.

Exit criteria:

- `npm run build` passes.
- No known critical route failures.

## Optional Evolution Passes If Time Remains

If the main work finishes before the 2-hour window ends, continue with one or more of these low-risk improvements:

- Add tasteful emoji, icons, colored cards, and visual summary blocks to reduce wall-of-text pages.
- Add application scenario examples using colorful tables or sample product cards.
- Expand the demo with more static product data and simple interactions if it remains low risk.
- Add one or two additional practical guide pages.
- Add a simple FAQ page if it improves approval credibility.
- Add a lightweight "Advertiser / partner policy" section explaining acceptable promotional methods.
- Add basic Open Graph metadata.
- Improve mobile spacing and scanability.
- Add a small content index or "Start here" page.

Do not add:

- Real affiliate links before approval.
- Fake traffic, fake testimonials, fake reviews, or fake author credentials.
- Medical recommendation claims.
- Complex personalization, scoring, graph, or nutrition engine logic.

## Potential Boundary-Breaking Ideas Allowed Only With Backup

These can be considered only after a stable checkpoint:

- Add a small static comparison dataset for demo-only examples.
- Add a simple "sample recommendation card" component.
- Add an "Editorial Review Checklist" page to demonstrate responsible review process.

Rules:

- Must be modular.
- Must be easy to remove.
- Must not introduce fake factual claims.
- Must be committed separately.

## Final Deliverables

At the end of the 2-hour optimization run:

- Site remains buildable.
- Stable changes are committed.
- Snapshot tags exist for important stages.
- A concise final summary lists:
  - files changed
  - improvements made
  - build result
  - remaining risks
  - next recommended manual actions
