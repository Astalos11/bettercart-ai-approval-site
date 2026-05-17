# Affiliate Target Advertiser Matrix

Date: 2026-05-17

## Purpose

This is a first-pass target matrix for advertiser / merchant approval after network acceptance.

It is not a list of approved partners.

The goal is to guide:

```text
which programs to apply to first
what data fields to inspect
how many useful approvals are enough for MVP
```

## What Counts As Useful For MVP

A program is useful if it supports at least one of these:

- stable product deep links
- product feed / catalog export
- product URL + image + price
- UPC / GTIN / SKU / MPN fields
- packaged food, grocery, supplement, beverage, pantry, snack, or wellness product coverage
- advertiser terms compatible with comparison / shopping guide content

Nutrition facts and ingredients are not required from the affiliate feed because those should come from USDA / OFF / official labels.

## First-Pass Target Groups

### Group A: Broad Commerce / High Product Count

These are useful if available because they can cover many categories.

Examples / candidates:

- iHerb
- Walmart-like marketplace routes if accessible through a network or aggregator
- specialty grocery marketplaces
- large health / wellness retailers

Why useful:

- many SKUs
- many brands
- potential deep-link flexibility
- strong supplement / pantry / packaged product coverage

Risks:

- may require stronger publisher history
- feed access may be restricted
- product fields may be commerce-oriented rather than UPC-oriented
- nutrition and ingredients still need external enrichment

### Group B: DTC Packaged Food / Beverage Brands

Examples observed publicly:

- FlavCity on Awin
- Grounded Foods on Awin
- 310 Nutrition on Awin
- food / drink programs surfaced through FlexOffers category pages

Why useful:

- brand fit is close to BetterCart AI's content niche
- easier to write relevant guides
- terms may accept content / editorial publishers
- good for category-specific demo pages

Risks:

- small catalog
- may not expose UPC
- brand may dislike negative comparison or competitor tables
- may prefer positive content / review framing

### Group C: Meal Delivery / Prepared Food

Examples observed publicly:

- Inspired Go on Awin
- seafood subscription / meal-style programs

Why useful:

- often accepts content, lifestyle, wellness, family, and convenience publishers
- can validate affiliate workflow quickly

Risks:

- weaker fit for packaged-food UPC enrichment
- nutrition data semantics can differ from retail packaged goods
- not ideal for canonical UPC workflow

### Group D: Supplements / Protein / Wellness

Examples / candidates:

- iHerb
- 310 Nutrition
- protein / shake / bar programs
- wellness marketplaces

Why useful:

- high affiliate program density
- strong fit for high-protein / low-sugar content
- often has deep-linkable product pages

Risks:

- higher compliance risk
- avoid medical / disease / guaranteed benefit claims
- supplement labels may not map cleanly to USDA branded foods
- user trust risk if the site appears too sales-driven

### Group E: Aggregators / Auto-Monetization

Examples:

- Skimlinks
- Sovrn-style commerce aggregation

Why useful:

- can reduce one-by-one advertiser application friction
- useful fallback for broad link coverage
- can monetize existing editorial links

Risks:

- acceptance still reviewed
- field-level product data may be weaker than direct feeds
- merchant terms may still matter
- not a substitute for verified food evidence

## Recommended Application Order

1. Awin account approval.
2. FlexOffers account approval / verification.
3. Within approved networks, apply to 10-20 food / health / grocery-adjacent advertisers.
4. Prioritize 3-5 likely fast approvals for MVP proof:
   - one broad retailer / marketplace if available
   - one supplement / health marketplace
   - one DTC packaged food brand
   - one beverage or protein brand
   - one pantry / specialty food brand
5. Inspect feed fields before building any import pipeline.

## Feed Inspection Checklist

For each approved advertiser / feed, record:

- network
- advertiser name
- advertiser id
- approval status
- product count
- feed update frequency
- product URL
- image URL
- price
- sale price
- category
- SKU
- UPC
- GTIN
- MPN
- brand
- title
- description
- deep link format
- affiliate URL format
- data usage restrictions
- negative comparison / content restrictions

## MVP Threshold

Minimum:

```text
3-5 approved and useful commerce surfaces
```

Better:

```text
8-15 approved and useful advertisers / merchants
```

Not enough:

```text
network approval only
```

because network approval does not guarantee advertiser approval, feed availability, or useful product identifiers.

## Decision Rule

Do not start generalized feed ingestion until at least 3 real feeds or deep-link surfaces are inspected.

Before that, use manual review and small samples.
