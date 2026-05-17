# BetterCart AI Approval Site

Fast publisher-site MVP for affiliate network approval testing.

## Purpose

This repo contains the early BetterCart AI affiliate approval website.

It is a static Next.js site for:

- packaged food buying guides
- sample comparison pages
- affiliate disclosure and trust pages
- an AI-assisted food comparison demo
- reviewer-facing approval context

It is not the full BetterCart AI product backend and does not contain live retailer inventory.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export directory is:

```text
out
```

## Demo Data

The interactive food comparison demo uses a static USDA-derived sample dataset:

```text
lib/usdaDemoProducts.json
```

Regenerate it from the local cleaned canonical nutrition dataset with:

```bash
npm run build:demo-data
```

The source dataset is expected at:

```text
/home/astalos/usda_food_pipeline/outputs/mvp_hard_filter_nutrition_v0_1.csv
```

This does not modify raw USDA files or generated CSV outputs.

## Static QA

After building, run:

```bash
npm run check:static
```

This checks required exported routes, internal links, and obvious placeholder text.
It also checks sample-data disclosures, provenance notes, image alt text, interactive search controls, structured data, image size limits, and security header artifacts.

## Docs QA

After editing README document references, run:

```bash
npm run check:docs
```

This verifies that README-listed `docs/*.md` files exist.

## Live QA

After uploading the latest static export to Alibaba Cloud OSS, run:

```bash
npm run check:live
```

This checks the live `www.bettercartai.com` site for key pages, expected content, and stale invalid-domain metadata.

If recently uploaded routes return old content but `npm run build` and `npm run check:static` pass, confirm the OSS zip was extracted into the bucket root rather than an extra `out/` directory.

## Full QA

For local build, static export, and docs-index validation, run:

```bash
npm run check:local
```

Before a final application submission or domain cutover, run the full local and live suite:

```bash
npm run check:all
```

This runs the production build, static export QA, docs QA, and live site QA in sequence.

## OSS Zip QA

After `npm run build`, regenerate and verify the Alibaba Cloud OSS upload package:

```bash
npm run build:zip
```

Before manually uploading an existing package to Alibaba Cloud OSS, run:

```bash
npm run check:zip
```

This confirms `approval-site-out.zip` contains `index.html`, `_next/`, and route folders at zip root, without an outer `out/` directory.

## Deployment Notes

Current hosting target:

- Alibaba Cloud OSS static website hosting
- Bucket: `bettercartai-site`
- Region: US East / Virginia
- Public URL: `https://www.bettercartai.com`

Manual OSS deployment package:

```text
approval-site-out.zip
```

The zip must contain files from inside `out/`, not an outer `out/` directory.

Affiliate application baseline:

- use `https://www.bettercartai.com`
- use `contact@bettercartai.com`
- keep the bare domain out of application forms until it is explicitly configured
- keep FlexOffers verification meta in the homepage head

## Application Docs

- `docs/20260515_launch_and_affiliate_application_checklist.md`
- `docs/20260516_affiliate_application_submission_draft.md`
- `docs/20260517_affiliate_application_submission_copy_v2.md`
- `docs/20260517_affiliate_application_strategy_update.md`
- `docs/20260515_current_site_snapshot.md`
- `docs/20260515_boss_site_status_summary_cn.md`
- `docs/20260515_affiliate_application_notes.md`
- `docs/20260515_approval_site_review_checklist.md`
- `docs/20260515_domain_cutover_runbook.md`
- `docs/20260517_aliyun_oss_deployment_runbook.md`
- `docs/20260517_current_oss_upload_note.md`
- `docs/20260515_netlify_stale_deploy_troubleshooting.md`
- `docs/20260515_optimization_qa_report.md`
- `docs/20260516_visual_interactive_optimization_plan.md`
- `docs/20260516_visual_interactive_optimization_log.md`
- `docs/20260516_visual_content_guidelines.md`
- `docs/20260516_autonomous_visual_evolution_run_report.md`
- `docs/20260516_final_pre_application_audit.md`
- `docs/20260516_shutdown_summary.md`
- `docs/20260517_main_thread_autonomous_plan.md`
- `docs/20260517_affiliate_approval_reality_check.md`
- `docs/20260517_affiliate_target_advertiser_matrix.md`
- `docs/20260517_affiliate_feed_access_source_notes.md`
- `docs/20260517_awin_application_runbook.md`
- `docs/20260517_affiliate_application_tracker_template.md`
- `docs/20260517_affiliate_application_tracker.csv`
- `docs/20260517_affiliate_advertiser_seed_list.csv`
- `docs/20260517_affiliate_advertiser_seed_list_notes.md`
- `docs/20260517_affiliate_comparison_content_policy.md`
- `docs/20260517_boss_affiliate_application_summary_cn.md`
- `docs/20260517_evening_change_summary_cn.md`

## Important Pages

- `/for-reviewers`
- `/publisher-kit`
- `/site-index`
- `/humans.txt`
- `/affiliate-disclosure`
- `/editorial-policy`
- `/review-process`
- `/methodology`
- `/partner-policy`
- `/data-sources`
- `/corrections-policy`
- `/privacy`
- `/terms`

## Content Boundaries

Avoid adding:

- fake reviews
- fake traffic claims
- medical advice
- disease-treatment claims
- undisclosed paid placements
- universal healthy/unhealthy food scores
