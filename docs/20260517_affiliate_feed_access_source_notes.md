# Affiliate Feed / Advertiser Access Source Notes

Date: 2026-05-17

Purpose:

Record current public sources that support the affiliate application / feed-access strategy.

This is not an exhaustive market map. It is a source appendix for the current Main Thread decision:

```text
apply first
inspect real approved feeds
then decide whether feed ingestion is worth building
```

## Source Notes

### FlexOffers

Source:

- https://support.flexoffers.com/hc/en-us/articles/360042472112-Data-Feeds-Subscriptions

Observed:

- FlexOffers Data Feed Subscriptions are tied to approved affiliate programs.
- Product Files are described as including product pricing, images, UPC, SKU, MPN, and other product attributes.

Implication:

```text
FlexOffers is one of the strongest early candidates for UPC / identifier feed testing.
```

But:

```text
field support does not mean every approved advertiser populates UPC / GTIN consistently.
```

### Awin

Sources:

- https://www.awin.com/us/news-and-events/program-news/310-nutrition-affiliate-program-now-live-on-awin
- https://ui.awin.com/merchant-profile/109888

Observed:

- Awin has public examples of nutrition / health-food-adjacent programs such as 310 Nutrition and FlavCity.
- FlavCity's public merchant profile is categorized around health food, nutrition, protein, lifestyle, and healthy snacks.

Implication:

```text
Awin is a reasonable first application target for packaged-food / nutrition-adjacent advertisers.
```

But:

```text
network approval still needs advertiser approval and real feed inspection.
```

### Skimlinks

Sources:

- https://support.skimlinks.com/hc/en-us/articles/360015643238-How-do-I-know-if-I-m-approved-for-a-particular-merchant
- https://www.skimlinks.com/merchants/
- https://www.skimlinks.com/program-policies/

Observed:

- Skimlinks says approved publishers are automatically approved for most merchant programs it works with.
- Skimlinks merchant material describes broad merchant/network scale.
- Skimlinks also has program policies and publisher quality controls.

Implication:

```text
Skimlinks may reduce one-by-one advertiser application friction and can be a fallback monetization / link-coverage path.
```

But:

```text
Skimlinks should not be treated as a guaranteed structured product feed or nutrition data source.
```

### ShareASale

Source:

- https://shareasale.com/step3.pdf

Observed:

- ShareASale is historically datafeed-oriented, but merchant feed access and field quality are merchant-specific.

Implication:

```text
ShareASale may be useful after direct Awin / FlexOffers checks, but should still be evaluated advertiser by advertiser.
```

## Practical Takeaway

The project should continue to separate:

```text
commerce access
```

from:

```text
food evidence
```

Affiliate networks can help with commerce access and product identity seeds.

Nutrition facts, ingredients, and label evidence still need USDA / OFF / official label enrichment.

## Next Validation Step

After account approval, inspect at least:

```text
3 real advertiser feeds
```

before building any importer.

Record each feed in:

```text
docs/20260517_affiliate_application_tracker.csv
```

