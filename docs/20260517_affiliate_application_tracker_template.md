# Affiliate Application Tracker Template

Date: 2026-05-17

Use this after applying to Awin / FlexOffers / other networks.

## Network-Level Tracker

| Network | Submitted at | Website URL | Contact email | Status | Verification method | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Awin |  | https://www.bettercartai.com | contact@bettercartai.com |  |  |  |
| FlexOffers |  | https://www.bettercartai.com | contact@bettercartai.com |  | homepage meta / file |  |
| Skimlinks |  | https://www.bettercartai.com | contact@bettercartai.com |  |  |  |
| Sovrn |  | https://www.bettercartai.com | contact@bettercartai.com |  |  |  |
| Impact |  | https://www.bettercartai.com | contact@bettercartai.com |  |  |  |
| CJ |  | https://www.bettercartai.com | contact@bettercartai.com |  |  |  |

## Advertiser-Level Tracker

| Network | Advertiser | Category | Applied at | Status | Auto/manual | Response time | Reason / notes | Content restrictions |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | grocery / supplement / snack / beverage / pantry |  |  |  |  |  |  |

## Feed Inspection Tracker

| Network | Advertiser | Feed available | Product count | Update frequency | Product URL | Image | Price | SKU | UPC | GTIN | MPN | Brand | Category | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | yes / no / unknown |  |  | yes / no | yes / no | yes / no | yes / no | yes / no | yes / no | yes / no | yes / no | yes / no |  |

## MVP Usefulness Score

Use this simple internal label after inspecting a real advertiser/feed.

### Useful

Criteria:

- relevant to packaged food, grocery, supplement, beverage, pantry, or wellness shopping
- stable product links or product feed
- terms allow editorial shopping-guide content
- at least one useful product identifier or stable product URL

### Partial

Criteria:

- relevant advertiser but feed is weak
- deep links exist but no product identifiers
- small catalog but useful category fit
- manual product linking possible

### Not useful now

Criteria:

- irrelevant category
- no approval
- no feed and poor deep-link workflow
- terms conflict with comparison content
- requires traffic / sales history the site does not have yet

## Decision Threshold

Do not build feed import until at least:

```text
3 useful or partial commerce surfaces
```

Do not build automated UPC enrichment until at least:

```text
3 real feeds expose UPC / GTIN / reliable product URL fields
```

## Notes To Preserve

For every rejection, save:

- exact rejection text
- date
- network
- advertiser
- site URL used
- publisher description used
- whether reviewer URLs were included
- whether ownership verification passed

This will show whether rejection is a website issue, traffic issue, niche fit issue, or advertiser policy issue.
