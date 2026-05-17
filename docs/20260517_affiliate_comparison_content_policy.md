# Affiliate Comparison Content Policy

Date: 2026-05-17

## Purpose

BetterCart AI needs to compare foods honestly without creating avoidable affiliate-program risk.

The product should not be framed as:

```text
negative product reviews
```

It should be framed as:

```text
intent fit based on evidence
```

## Core Rule

Use:

```text
fit / not a strong fit / tradeoff / evidence flag
```

Avoid:

```text
bad / unhealthy / worst / avoid this brand / dangerous / misleading brand
```

## Why

Affiliate network and advertiser terms commonly restrict misleading, defamatory, disparaging, harmful, or brand-damaging promotional content.

FTC rules also require honest, non-misleading endorsements and clear affiliate disclosure.

This creates a product boundary:

```text
facts and evidence-backed fit signals are acceptable
brand/product disparagement is high risk
```

## Safer Language

Use:

- `Not a strong fit for low_sugar.`
- `Higher sodium than the other visible examples.`
- `This product may not fit a low-sodium shopping intent.`
- `Contains ingredients some shoppers may want to compare more carefully.`
- `Better fit for high-protein intent than low-calorie intent.`

Avoid:

- `This product is unhealthy.`
- `Avoid this brand.`
- `Worst product in the category.`
- `This company misleads consumers.`
- `Dangerous ingredients.`

## Affiliate Link Boundary

Default policy:

```text
If a product is shown as a poor fit, avoid a strong purchase CTA next to that negative signal.
```

Allowed safer patterns:

- Show neutral evidence without a purchase CTA.
- Link only to better-fit alternatives when terms allow.
- Use `view product` only if advertiser terms allow neutral comparison.
- Always include affiliate disclosure when monetized links exist.

## Advertiser Policy Flags

When reviewing advertiser terms, track:

- `allows_comparative_content`
- `allows_editorial_review`
- `allows_negative_comparison`
- `requires_brand_positive_content`
- `requires_preapproval`
- `no_disparagement_clause`
- `unknown_terms`

Default:

```text
unknown_terms = conservative
```

## Public Site Implication

Current site content should continue using:

- sample comparison
- tradeoff
- fit for intent
- not medical advice
- not universal food score
- no fake reviews
- no fake paid placement

Do not add:

- worst-food rankings
- brand takedown pages
- disease claims
- fake testing claims
- fake user testimonials

## Product Implication

Future recommendation surfaces should separate:

```text
editorial evidence surface
```

from:

```text
monetized shopping surface
```

The user can still receive useful product guidance, but monetization should not depend on aggressive negative claims.
