"use client";

import { useMemo, useState } from "react";
import { demoProducts } from "../../../lib/content";

const intents = [
  { id: "low_sugar", label: "🍬 Low sugar" },
  { id: "high_protein", label: "💪 High protein" },
  { id: "low_sodium", label: "🧂 Low sodium" },
  { id: "balanced_snack", label: "⚖️ Balanced snack" }
];

const categories = ["all", "snack", "bar", "pantry", "breakfast", "dessert"];

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

function barWidth(value, max) {
  return `${Math.max(4, Math.min(100, Math.round((value / max) * 100)))}%`;
}

export default function DemoPage() {
  const [intent, setIntent] = useState("low_sugar");
  const [category, setCategory] = useState("all");
  const [selectedNames, setSelectedNames] = useState([
    "Garlic Herb Pita Chips",
    "Double Dark Chocolate Protein Bar"
  ]);
  const sortedProducts = useMemo(() => {
    return demoProducts.filter((product) => category === "all" || product.category === category).sort((a, b) => {
      if (intent === "low_sugar") return a.totalSugar - b.totalSugar;
      if (intent === "high_protein") return b.protein - a.protein;
      if (intent === "balanced_snack") {
        const score = (product) => product.totalSugar * 10 + product.sodium / 20 + product.calories / 20 - product.protein * 2;
        return score(a) - score(b);
      }
      return a.sodium - b.sodium;
    });
  }, [intent, category]);
  const selectedProducts = useMemo(() => {
    return demoProducts.filter((product) => selectedNames.includes(product.name));
  }, [selectedNames]);
  const topProduct = sortedProducts[0];

  function toggleSelected(productName) {
    setSelectedNames((current) => {
      if (current.includes(productName)) {
        return current.filter((name) => name !== productName);
      }
      if (current.length >= 3) {
        return [current[1], current[2], productName];
      }
      return [...current, productName];
    });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Demo</div>
          <h1>Food Comparison Demo</h1>
          <p className="lead">
            Try a simple example of how BetterCart AI compares packaged foods by shopping intent. This demo uses sample products and is not connected to live retailer inventory.
          </p>
        </div>

        <div className="demo-controls" aria-label="Choose a shopping intent">
          {intents.map((item) => (
            <button
              key={item.id}
              className={item.id === intent ? "active" : ""}
              onClick={() => setIntent(item.id)}
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
              type="button"
            >
              {item === "all" ? "All examples" : item}
            </button>
          ))}
        </div>

        <p className="small-note">{getMetricFocus(intent)} Showing {sortedProducts.length} sample products. The demo shows tradeoffs rather than a universal food score.</p>

        {topProduct ? (
          <div className="top-result-card">
            <div className="top-result-icon" aria-hidden="true">✨</div>
            <div>
              <div className="eyebrow">Current top sample</div>
              <h2>{topProduct.name}</h2>
              <p>{getTopReason(topProduct, intent)}</p>
              <div className="chip-row">
                <span className="chip">{topProduct.calories} calories</span>
                <span className="chip">{topProduct.totalSugar}g sugar</span>
                <span className="chip">{topProduct.protein}g protein</span>
                <span className="chip">{topProduct.sodium}mg sodium</span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="sample-data-note">
          <strong>Reviewer note:</strong> This is a static sample-data demo using rounded USDA-derived examples. It does not contain affiliate links, live retailer inventory, paid placement, or advertiser-specific ranking.
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
              <strong>{product.name}</strong>
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
        </div>

        <div className="grid three" style={{ marginTop: 22 }}>
          {sortedProducts.map((product) => {
            const fit = getFit(product, intent);
            const isSelected = selectedNames.includes(product.name);
            return (
              <div className="card" key={product.name}>
                <span className={`badge ${fit === "Better fit" ? "green" : fit === "Moderate fit" ? "blue" : "orange"}`}>
                  {fit}
                </span>
                <span className="badge blue" style={{ marginLeft: 8 }}>{product.category}</span>
                <h3 style={{ marginTop: 14 }}>{product.name}</h3>
                <p>{product.note}</p>
                <p><strong>Tradeoff:</strong> {product.tradeoff}</p>
                <p className="metric">
                  {product.calories} calories · {product.totalSugar}g sugar · {product.protein}g protein · {product.sodium}mg sodium
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
                  onClick={() => toggleSelected(product.name)}
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
