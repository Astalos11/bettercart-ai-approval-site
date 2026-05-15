import Link from "next/link";
import { comparisons, guides } from "../../lib/content";

export const metadata = {
  title: "Food Comparison Topics",
  description:
    "Browse BetterCart AI topics for low sugar, high protein, lower sodium, cereal, pantry, kids snacks, and ingredient label reading."
};

const topics = [
  {
    title: "Low sugar shopping",
    text: "Guides and comparisons for shoppers trying to compare total sugar, added sugar when available, serving size, and sweetener context.",
    links: [
      ["/guides/how-to-choose-low-sugar-snacks", "Low sugar snack guide"],
      ["/compare/low-sugar-snacks", "Low sugar snack comparison"]
    ]
  },
  {
    title: "High protein options",
    text: "Protein-focused content for bars and packaged snacks, with calories, sugar, sodium, and ingredient style kept visible.",
    links: [
      ["/guides/how-to-compare-protein-bars", "Protein bar guide"],
      ["/compare/high-protein-bars", "High protein bar comparison"]
    ]
  },
  {
    title: "Lower sodium decisions",
    text: "Sodium-focused content for pantry foods, snacks, soups, sauces, and shelf-stable products where serving use matters.",
    links: [
      ["/guides/how-to-compare-lower-sodium-packaged-foods", "Lower sodium guide"],
      ["/compare/lower-sodium-pantry-foods", "Lower sodium pantry comparison"]
    ]
  },
  {
    title: "Beverage comparisons",
    text: "Ready-to-drink beverage content for comparing sugar, calories, serving size, protein drinks, and ingredient context.",
    links: [
      ["/guides/how-to-compare-ready-to-drink-beverages", "Ready-to-drink beverage guide"],
      ["/compare/lower-sugar-beverages", "Lower sugar beverage comparison"]
    ]
  },
  {
    title: "Label reading basics",
    text: "Educational content for understanding serving size, nutrition facts, ingredients, allergens, and category context.",
    links: [
      ["/guides/how-to-read-nutrition-labels", "Nutrition label guide"],
      ["/guides/ingredient-red-flags-in-packaged-foods", "Ingredient list guide"]
    ]
  },
  {
    title: "Household staples and kids snacks",
    text: "Practical packaged-food guides for pantry staples, kids snacks, cereals, and repeat household purchases.",
    links: [
      ["/guides/what-to-check-in-kids-snacks", "Kids snack guide"],
      ["/guides/how-to-choose-pantry-staples", "Pantry staples guide"],
      ["/guides/how-to-compare-breakfast-cereals", "Breakfast cereal guide"]
    ]
  },
  {
    title: "Frozen meal tradeoffs",
    text: "Frozen meal content for comparing sodium, calories, protein, serving realism, and meal role.",
    links: [
      ["/guides/how-to-compare-frozen-meals", "Frozen meal guide"],
      ["/compare/frozen-meal-tradeoffs", "Frozen meal comparison"]
    ]
  },
  {
    title: "Sauces and condiments",
    text: "Sauce and condiment content for comparing sodium, sugar, small serving sizes, and ingredient style.",
    links: [
      ["/guides/how-to-compare-sauces-and-condiments", "Sauce and condiment guide"],
      ["/compare/sauce-and-condiment-tradeoffs", "Sauce and condiment comparison"]
    ]
  },
  {
    title: "Nut butters and spreads",
    text: "Spread comparison content for sugar, protein, oils, sodium, serving size, and allergen context.",
    links: [
      ["/guides/how-to-compare-nut-butters-and-spreads", "Nut butter and spread guide"],
      ["/compare/nut-butter-and-spread-tradeoffs", "Nut butter and spread comparison"]
    ]
  }
];

export default function TopicsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Topics</div>
          <h1>Food Comparison Topics</h1>
          <p className="lead">
            Browse the main shopping topics currently covered by BetterCart AI. These topic groups show how guides, comparison pages, and future product tools fit together.
          </p>
        </div>

        <div className="grid two">
          {topics.map((topic) => (
            <div className="card" key={topic.title}>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
              <div className="link-list">
                {topic.links.map(([href, label]) => (
                  <Link href={href} key={href}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="callout">
          <h2>Current content inventory</h2>
          <p>
            BetterCart AI currently publishes {guides.length} food guides and {comparisons.length} comparison examples.
            More category-specific content can be added as product data coverage improves.
          </p>
        </div>
      </div>
    </section>
  );
}
