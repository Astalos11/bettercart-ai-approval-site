import Link from "next/link";
import { comparisons, guides, trustPages } from "../lib/content";

const previewProducts = [
  { name: "Sea Salt Lentil Crisps", metric: "1g sugar / serving", label: "Low sugar, check sodium" },
  { name: "Peanut Butter Protein Bar", metric: "20g protein / serving", label: "Better high-protein fit" },
  { name: "Chocolate Granola Clusters", metric: "12g sugar / serving", label: "Not a strong low-sugar fit" }
];

const shoppingScenarios = [
  {
    icon: "🍪",
    need: "Lower-sugar snack",
    checks: ["total sugar", "serving size", "fiber"],
    outcome: "Find options that keep sweetness visible without hiding tradeoffs."
  },
  {
    icon: "🥤",
    need: "Better beverage choice",
    checks: ["sugar", "calories", "serving"],
    outcome: "Compare drinks by label facts before treating them as everyday picks."
  },
  {
    icon: "🥫",
    need: "Lower-sodium pantry item",
    checks: ["sodium", "portion", "category"],
    outcome: "Spot when a convenient pantry food is mainly a sodium tradeoff."
  },
  {
    icon: "💪",
    need: "High-protein option",
    checks: ["protein", "calories", "sugar"],
    outcome: "Separate genuinely protein-forward products from sweet snacks with protein."
  }
];

const metricPreview = [
  { label: "Total sugar", low: "1g", mid: "5g", high: "12g" },
  { label: "Sodium", low: "85mg", mid: "180mg", high: "410mg" },
  { label: "Protein", low: "3g", mid: "8g", high: "20g" },
  { label: "Calories", low: "90", mid: "160", high: "260" }
];

const processSteps = [
  {
    title: "Start with intent",
    text: "A shopper may want lower sugar, higher protein, lower sodium, or a simpler ingredient list."
  },
  {
    title: "Compare similar products",
    text: "We keep category context visible so a cereal is compared with cereals and a protein bar with protein bars."
  },
  {
    title: "Show tradeoffs",
    text: "A product can be low in sugar but higher in sodium, or high in protein but higher in calories."
  }
];

export const metadata = {
  title: "BetterCart AI | Packaged Food Comparison Guides",
  description:
    "Compare packaged foods by nutrition facts, ingredients, and shopping intent. Browse guides, comparison examples, and reviewer-friendly trust pages.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "BetterCart AI | Packaged Food Comparison Guides",
    description:
      "AI-assisted packaged food comparison guides for everyday grocery decisions.",
    type: "website",
    url: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">AI-assisted food comparison</div>
            <h1>A clearer way to compare packaged foods.</h1>
            <p className="lead">
              BetterCart AI helps shoppers compare snacks, cereals, protein bars, pantry foods, and other packaged groceries using nutrition facts, ingredient context, and simple buying guides.
            </p>
            <div className="hero-actions">
              <Link href="/guides" className="button">Explore Food Guides</Link>
              <Link href="/tools/food-comparison-demo" className="button secondary">Try the Demo</Link>
              <Link href="/for-reviewers" className="button secondary">For Reviewers</Link>
            </div>
            <p className="small-note">
              Independent editorial shopping resource. Not medical advice. Product labels should be verified before purchase.
            </p>
          </div>
          <div className="product-panel" aria-label="Example product comparison">
            <img
              className="hero-visual"
              src="/images/food-comparison-visual-v2.webp"
              alt="Illustration of packaged food products, nutrition labels, and an AI comparison dashboard"
            />
            <div className="eyebrow">Example comparison</div>
            {previewProducts.map((product, index) => (
              <div className="panel-row" key={product.name}>
                <div>
                  <strong>{product.name}</strong>
                  <div className="metric">{product.metric}</div>
                </div>
                <span className={`badge ${index === 1 ? "green" : index === 2 ? "orange" : "blue"}`}>
                  {product.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Built for everyday grocery decisions</h2>
            <p className="lead">Simple context for common packaged food choices, without turning every product into a universal score.</p>
          </div>
          <div className="stats-row">
            <div>
              <strong>{guides.length}</strong>
              <span>food guides</span>
            </div>
            <div>
              <strong>{comparisons.length}</strong>
              <span>comparison examples</span>
            </div>
            <div>
              <strong>{Object.keys(trustPages).length}</strong>
              <span>trust and policy pages</span>
            </div>
          </div>
          <div className="grid three">
            <div className="card">
              <h3>📊 Nutrition context</h3>
              <p>Compare sugar, sodium, protein, calories, and serving sizes without reading every label from scratch.</p>
            </div>
            <div className="card">
              <h3>🔎 Ingredient awareness</h3>
              <p>Understand ingredient lists and spot items you may want to compare more carefully.</p>
            </div>
            <div className="card">
              <h3>🛒 Intent-based shopping</h3>
              <p>Look for products that better fit goals like lower sugar, higher protein, or lower sodium.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Use cases</div>
            <h2>Common shopping moments, shown visually</h2>
            <p className="lead">The site should help a reviewer immediately see what a shopper would compare and why.</p>
          </div>
          <div className="scenario-grid">
            {shoppingScenarios.map((scenario) => (
              <div className="scenario-card" key={scenario.need}>
                <div className="scenario-icon" aria-hidden="true">{scenario.icon}</div>
                <div>
                  <h3>{scenario.need}</h3>
                  <div className="chip-row">
                    {scenario.checks.map((check) => (
                      <span className="chip" key={check}>{check}</span>
                    ))}
                  </div>
                  <p>{scenario.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="metric-preview" aria-label="Example color-coded nutrition comparison">
            <div className="metric-preview-head">
              <strong>Example metric scan</strong>
              <span>Illustrative values per serving</span>
            </div>
            {metricPreview.map((metric) => (
              <div className="metric-preview-row" key={metric.label}>
                <span>{metric.label}</span>
                <span className="metric-cell green">{metric.low}</span>
                <span className="metric-cell blue">{metric.mid}</span>
                <span className="metric-cell orange">{metric.high}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Start with common packaged food categories</h2>
            <p className="lead">The early site focuses on categories where nutrition labels and ingredient lists are useful for everyday decisions.</p>
          </div>
          <div className="grid three">
            {["Low sugar snacks", "Protein bars", "Breakfast cereals", "Kids snacks", "Pantry staples", "Packaged beverages", "Frozen meals", "Sauces and condiments", "Nut butters and spreads"].map((category) => (
              <div className="card" key={category}>
                <h3>{category}</h3>
                <p>Compare similar products using facts that match the category and shopping intent.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <h2>Evidence first, not hype</h2>
            <p className="lead">
              Our guides focus on product facts such as nutrition labels, ingredient lists, serving sizes, and category comparisons.
            </p>
            <p>
              BetterCart AI is not a medical advisor and does not assign universal food grades. We help users understand tradeoffs and choose products that better match their shopping intent.
            </p>
            <Link href="/methodology" className="button">Read Our Methodology</Link>
          </div>
          <div className="disclaimer">
            Some links may be affiliate links. If you buy through those links, we may earn a commission. This does not change our editorial approach.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How the comparison approach works</h2>
            <p className="lead">The site is built around practical shopping questions instead of universal food grades.</p>
          </div>
          <div className="grid three">
            {processSteps.map((step) => (
              <div className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
