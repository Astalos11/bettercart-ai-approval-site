"use client";

import { useMemo, useState } from "react";
import { demoProducts } from "../../../lib/content";

const intents = [
  { id: "low_sugar", label: "Low sugar" },
  { id: "high_protein", label: "High protein" },
  { id: "low_sodium", label: "Low sodium" },
  { id: "balanced_snack", label: "Balanced snack" }
];

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

export default function DemoPage() {
  const [intent, setIntent] = useState("low_sugar");
  const sortedProducts = useMemo(() => {
    return [...demoProducts].sort((a, b) => {
      if (intent === "low_sugar") return a.totalSugar - b.totalSugar;
      if (intent === "high_protein") return b.protein - a.protein;
      if (intent === "balanced_snack") {
        const score = (product) => product.totalSugar * 10 + product.sodium / 20 + product.calories / 20 - product.protein * 2;
        return score(a) - score(b);
      }
      return a.sodium - b.sodium;
    });
  }, [intent]);

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

        <p className="small-note">{getMetricFocus(intent)} The demo shows tradeoffs rather than a universal food score.</p>

        <div className="grid three">
          {sortedProducts.map((product) => {
            const fit = getFit(product, intent);
            return (
              <div className="card" key={product.name}>
                <span className={`badge ${fit === "Better fit" ? "green" : fit === "Moderate fit" ? "blue" : "orange"}`}>
                  {fit}
                </span>
                <h3 style={{ marginTop: 14 }}>{product.name}</h3>
                <p>{product.note}</p>
                <p><strong>Tradeoff:</strong> {product.tradeoff}</p>
                <p className="metric">
                  {product.calories} calories · {product.totalSugar}g sugar · {product.protein}g protein · {product.sodium}mg sodium
                </p>
              </div>
            );
          })}
        </div>

        <div className="section-head" style={{ marginTop: 28 }}>
          <div className="disclaimer">
            This demo uses sample data to illustrate comparison logic. It does not use live retailer inventory, medical rules, or paid placement. Always verify current product labels and retailer information before purchase.
          </div>
        </div>
      </div>
    </section>
  );
}
