"use client";

import { useMemo, useState } from "react";
import usdaDemoProducts from "../../../lib/usdaDemoProducts.json";

const demoProducts = usdaDemoProducts.products;

const intents = [
  { id: "low_sugar", label: "🍬 Low sugar" },
  { id: "high_protein", label: "💪 High protein" },
  { id: "low_sodium", label: "🧂 Low sodium" },
  { id: "balanced_snack", label: "⚖️ Balanced snack" }
];

const categories = ["all", ...Array.from(new Set(demoProducts.map((product) => product.category)))];
const defaultSelectedIds = demoProducts.slice(0, 2).map((product) => product.id);
const quickSearches = ["protein", "cereal", "chocolate", "juice", "salsa", "bar"];
const categoryIcons = {
  all: "🧭",
  bar: "🍫",
  beverage: "🥤",
  breakfast: "🥣",
  dessert: "🍪",
  meal: "🍽️",
  pantry: "🥫",
  snack: "🥨"
};

function getFit(product, intent) {
  if (intent === "low_sugar") {
    if (product.totalSugar <= 2) return "Better fit";
    if (product.totalSugar <= 6) return "Moderate fit";
    return "Not a strong fit";
  }
  if (intent === "high_protein") {
    if (product.protein >= 15) return "Better fit";
    if (product.protein >= 6) return "Moderate fit";
    return "Not a strong fit";
  }
  if (intent === "balanced_snack") {
    if (product.totalSugar <= 5 && product.sodium <= 220 && product.calories <= 180) return "Better fit";
    if (product.totalSugar <= 8 && product.sodium <= 260) return "Moderate fit";
    return "Not a strong fit";
  }
  if (product.sodium <= 120) return "Better fit";
  if (product.sodium <= 220) return "Moderate fit";
  return "Not a strong fit";
}

function getMetricFocus(intent) {
  if (intent === "low_sugar") return "Sorted by total sugar per serving.";
  if (intent === "high_protein") return "Sorted by protein per serving.";
  if (intent === "balanced_snack") return "Balanced view uses sugar, sodium, and calories together.";
  return "Sorted by sodium per serving.";
}

function getTopReason(product, intent) {
  if (!product) return "";
  if (intent === "low_sugar") return `${product.totalSugar}g total sugar per serving is the strongest match in this filtered sample.`;
  if (intent === "high_protein") return `${product.protein}g protein per serving rises to the top for this intent.`;
  if (intent === "low_sodium") return `${product.sodium}mg sodium per serving is the lowest match in this filtered sample.`;
  return "The balanced view weighs sugar, sodium, calories, and protein together for the sample set.";
}

function getIntentExplanation(product, intent) {
  if (!product) return "";
  if (intent === "low_sugar") {
    return `This intent looks first at total sugar. ${product.name} appears higher because its sugar value is lower than the other visible examples, while calories, sodium, and protein remain visible as tradeoffs.`;
  }
  if (intent === "high_protein") {
    return `This intent moves protein to the front. ${product.name} appears higher because it has more protein per serving in the current filtered set, but the demo still keeps sugar, sodium, and calories on screen.`;
  }
  if (intent === "low_sodium") {
    return `This intent sorts by sodium. ${product.name} appears higher because its sodium value is lower in this sample set, without hiding sugar, protein, or calorie context.`;
  }
  return `This view is intentionally conservative: it combines sugar, sodium, calories, and protein instead of declaring one universal winner.`;
}

function getEvidenceRows(product) {
  if (!product) return [];
  return [
    ["Product evidence", product.source, "Static USDA-derived sample used for demo context."],
    ["Nutrition fields", `${product.calories} kcal, ${product.totalSugar}g sugar, ${product.protein}g protein, ${product.sodium}mg sodium`, "Rounded serving-level display values."],
    ["Commerce link", "Not active", "No affiliate URL, live price, or retailer inventory is used in this demo."],
    ["Review status", "Sample only", "A production flow would verify current labels and retailer page details before linking."]
  ];
}

function barWidth(value, max) {
  return `${Math.max(4, Math.min(100, Math.round((value / max) * 100)))}%`;
}

function findByMetric(products, metric, direction) {
  if (!products.length) return null;
  return products.reduce((best, product) => {
    if (direction === "min") return product[metric] < best[metric] ? product : best;
    return product[metric] > best[metric] ? product : best;
  }, products[0]);
}

export default function DemoPage() {
  const [intent, setIntent] = useState("low_sugar");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState(defaultSelectedIds);
  const sortedProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return demoProducts.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const searchable = `${product.name} ${product.brand} ${product.usdaCategory}`.toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (intent === "low_sugar") return a.totalSugar - b.totalSugar;
      if (intent === "high_protein") return b.protein - a.protein;
      if (intent === "balanced_snack") {
        const score = (product) => product.totalSugar * 10 + product.sodium / 20 + product.calories / 20 - product.protein * 2;
        return score(a) - score(b);
      }
      return a.sodium - b.sodium;
    });
  }, [intent, category, query]);
  const selectedProducts = useMemo(() => {
    return demoProducts.filter((product) => selectedIds.includes(product.id));
  }, [selectedIds]);
  const topProduct = sortedProducts[0];
  const selectedLowestSugar = findByMetric(selectedProducts, "totalSugar", "min");
  const selectedHighestProtein = findByMetric(selectedProducts, "protein", "max");
  const selectedLowestSodium = findByMetric(selectedProducts, "sodium", "min");

  function toggleSelected(productId) {
    setSelectedIds((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }
      if (current.length >= 3) {
        return [current[1], current[2], productId];
      }
      return [...current, productId];
    });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Demo</div>
          <h1>Food Comparison Demo</h1>
          <p className="lead">
            Try a simple example of how BetterCart AI compares packaged foods by shopping intent. This demo uses {usdaDemoProducts.count} USDA FDC sample products from a cleaned canonical dataset and is not connected to live retailer inventory.
          </p>
        </div>

        <div className="demo-visual-card">
          <img
            src="/images/food-comparison-visual-v2.webp"
            alt="Illustration of packaged food comparison cards and nutrition metrics"
            loading="lazy"
            decoding="async"
          />
          <div>
            <div className="eyebrow">What to try</div>
            <h2>Change the intent and watch the sample set reorder</h2>
            <div className="chip-row">
              <span className="chip">intent controls</span>
              <span className="chip">category filter</span>
              <span className="chip">product search</span>
              <span className="chip">up to 3 selected products</span>
            </div>
            <p>
              This keeps the demo visual and reviewer-friendly while avoiding fake retailer inventory or undisclosed paid placement.
            </p>
          </div>
        </div>

        <div className="stats-row" aria-label="USDA demo dataset snapshot">
          <div><strong>{usdaDemoProducts.count}</strong><span>USDA-derived samples</span></div>
          <div><strong>{categories.length - 1}</strong><span>demo categories</span></div>
          <div><strong>0</strong><span>live affiliate links</span></div>
          <div><strong>0</strong><span>retailer inventory calls</span></div>
        </div>

        <div className="demo-controls" aria-label="Choose a shopping intent">
          {intents.map((item) => (
            <button
              key={item.id}
              className={item.id === intent ? "active" : ""}
              onClick={() => setIntent(item.id)}
              aria-pressed={item.id === intent}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="demo-controls compact" aria-label="Filter sample product category">
          {categories.map((item) => (
            <button
              key={item}
              className={item === category ? "active" : ""}
              onClick={() => setCategory(item)}
              aria-pressed={item === category}
              type="button"
            >
              {categoryIcons[item]} {item === "all" ? "All examples" : item}
            </button>
          ))}
        </div>

        <div className="site-search demo-search">
          <label htmlFor="demo-product-search">Search USDA-derived sample products</label>
          <input
            id="demo-product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try cereal, bar, chocolate, salsa, juice, protein"
          />
          <div className="quick-searches" aria-label="Quick demo searches">
            {quickSearches.map((term) => (
              <button
                key={term}
                type="button"
                className={query.toLowerCase() === term ? "active" : ""}
                onClick={() => setQuery(term)}
              >
                {term}
              </button>
            ))}
            {query ? (
              <button type="button" onClick={() => setQuery("")}>clear</button>
            ) : null}
          </div>
          <span>{sortedProducts.length} visible out of {usdaDemoProducts.count} static USDA FDC sample products.</span>
        </div>

        <p className="small-note">{getMetricFocus(intent)} Showing {sortedProducts.length} sample products. The demo shows tradeoffs rather than a universal food score.</p>

        <div className="metric-legend" aria-label="Demo color legend">
          <span><i className="legend-dot green" /> stronger sample fit</span>
          <span><i className="legend-dot blue" /> moderate sample fit</span>
          <span><i className="legend-dot orange" /> tradeoff to review</span>
        </div>

        {topProduct ? (
          <div className="top-result-card">
            <div className="top-result-icon" aria-hidden="true">✨</div>
              <div>
                <div className="eyebrow">Current top sample</div>
                <h2>{topProduct.name}</h2>
                {topProduct.brand ? <p className="metric">Brand / owner: {topProduct.brand}</p> : null}
                <p>{getTopReason(topProduct, intent)}</p>
                <div className="chip-row">
                  <span className="chip">{topProduct.calories} calories</span>
                  <span className="chip">{topProduct.totalSugar}g sugar</span>
                  <span className="chip">{topProduct.protein}g protein</span>
                  <span className="chip">{topProduct.sodium}mg sodium</span>
                  <span className="chip">serving {topProduct.serving}</span>
                </div>
              </div>
            </div>
        ) : null}

        {topProduct ? (
          <div className="reason-card" aria-live="polite">
            <strong>Why the demo ranked this sample first</strong>
            <p>{getIntentExplanation(topProduct, intent)}</p>
          </div>
        ) : null}

        {topProduct ? (
          <div className="evidence-panel" aria-label="Current sample evidence profile">
            <div>
              <div className="eyebrow">Evidence profile</div>
              <h2>{topProduct.name}</h2>
              <p>
                The demo separates label evidence from future commerce links. This is the same boundary a production affiliate flow needs before ranking or linking products.
              </p>
            </div>
            <div className="evidence-grid">
              {getEvidenceRows(topProduct).map(([layer, value, note]) => (
                <div className="evidence-row" key={layer}>
                  <strong>{layer}</strong>
                  <span>{value}</span>
                  <small>{note}</small>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="sample-data-note">
          <strong>Reviewer note:</strong> This is a static sample-data demo using rounded USDA FDC sample products from the local canonical nutrition dataset. It does not contain affiliate links, live retailer inventory, paid placement, or advertiser-specific ranking.
        </div>

        <div className="callout">
          <h2>What the demo reads</h2>
          <ul>
            <li>Serving-level calories, total sugar, protein, and sodium.</li>
            <li>A shopper intent such as low sugar, high protein, low sodium, or balanced snack.</li>
            <li>Simple tradeoff notes instead of a universal product grade.</li>
          </ul>
        </div>

        <div className="demo-table" aria-label="Sample product comparison table">
          <div className="demo-table-row head">
            <span>Product</span>
            <span>Sugar</span>
            <span>Protein</span>
            <span>Sodium</span>
            <span>Calories</span>
          </div>
          {sortedProducts.slice(0, 5).map((product) => (
            <div className="demo-table-row" key={product.name}>
              <strong>{product.name}<small>{product.usdaCategory}</small></strong>
              <span className={`metric-cell ${product.totalSugar <= 2 ? "green" : product.totalSugar <= 8 ? "blue" : "orange"}`}>{product.totalSugar}g</span>
              <span className={`metric-cell ${product.protein >= 15 ? "green" : product.protein >= 6 ? "blue" : "orange"}`}>{product.protein}g</span>
              <span className={`metric-cell ${product.sodium <= 120 ? "green" : product.sodium <= 260 ? "blue" : "orange"}`}>{product.sodium}mg</span>
              <span className={`metric-cell ${product.calories <= 130 ? "green" : product.calories <= 220 ? "blue" : "orange"}`}>{product.calories}</span>
            </div>
          ))}
        </div>

        <div className="compare-tray" aria-label="Selected sample products">
          <div>
            <div className="eyebrow">Selected comparison</div>
            <h2>Compare up to three sample products</h2>
            <p>
              Choose products below to see how the same label fields change across a small shopping set.
            </p>
            <p className="selection-status" role="status">
              Selected {selectedProducts.length} of 3 sample products.
            </p>
            <button
              className="button secondary"
              type="button"
              onClick={() => setSelectedIds(defaultSelectedIds)}
            >
              Reset selection
            </button>
          </div>
          <div className="selected-grid">
            {selectedProducts.map((product) => (
              <div className="selected-card" key={product.name}>
                <strong>{product.name}</strong>
                <span>{product.totalSugar}g sugar</span>
                <span>{product.protein}g protein</span>
                <span>{product.sodium}mg sodium</span>
              </div>
            ))}
          </div>
          <div className="selected-summary">
            <span>🍬 Lowest sugar: <strong>{selectedLowestSugar?.name || "Select products"}</strong></span>
            <span>💪 Highest protein: <strong>{selectedHighestProtein?.name || "Select products"}</strong></span>
            <span>🧂 Lowest sodium: <strong>{selectedLowestSodium?.name || "Select products"}</strong></span>
          </div>
        </div>

        <div className="grid three" style={{ marginTop: 22 }}>
          {sortedProducts.map((product) => {
            const fit = getFit(product, intent);
            const isSelected = selectedIds.includes(product.id);
            return (
              <div className="card" key={product.name}>
                <span className={`badge ${fit === "Better fit" ? "green" : fit === "Moderate fit" ? "blue" : "orange"}`}>
                  {fit}
                </span>
                <span className="badge blue" style={{ marginLeft: 8 }}>{categoryIcons[product.category]} {product.category}</span>
                <h3 style={{ marginTop: 14 }}>{product.name}</h3>
                {product.brand ? <p className="metric">Brand / owner: {product.brand}</p> : null}
                <p>{product.note}</p>
                <p><strong>Tradeoff:</strong> {product.tradeoff}</p>
                <p className="metric">
                  {product.calories} calories · {product.totalSugar}g sugar · {product.protein}g protein · {product.sodium}mg sodium · serving {product.serving}
                </p>
                <div className="metric-bars" aria-label={`Nutrition bars for ${product.name}`}>
                  <div>
                    <span>Sugar</span>
                    <i className="bar orange" style={{ width: barWidth(product.totalSugar, 25) }} />
                  </div>
                  <div>
                    <span>Protein</span>
                    <i className="bar green" style={{ width: barWidth(product.protein, 20) }} />
                  </div>
                  <div>
                    <span>Sodium</span>
                    <i className="bar blue" style={{ width: barWidth(product.sodium, 700) }} />
                  </div>
                </div>
                <p className="metric">{product.source}</p>
                <button
                  className={`button ${isSelected ? "" : "secondary"}`}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleSelected(product.id)}
                >
                  {isSelected ? "Selected" : "Add to compare"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="section-head" style={{ marginTop: 28 }}>
          <div className="disclaimer">
            This demo uses sample data to illustrate comparison logic. It does not use live retailer inventory, medical rules, or paid placement. Always verify current product labels and retailer information before purchase.
          </div>
        </div>

        <div className="grid two">
          <div className="card">
            <h2>What a full version would add</h2>
            <p>
              A production version would connect verified product data, retailer availability, UPC matching, and clearer product evidence before showing purchase links.
            </p>
          </div>
          <div className="card">
            <h2>What this demo avoids</h2>
            <p>
              It does not create medical recommendations, hidden paid rankings, or universal healthy/unhealthy scores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
