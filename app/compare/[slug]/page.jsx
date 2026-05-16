import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisons } from "../../../lib/content";

function metricTone(metric, value) {
  if (value === null || value === undefined) return "blue";
  if (metric === "sugar") {
    if (value <= 2) return "green";
    if (value <= 8) return "blue";
    return "orange";
  }
  if (metric === "protein") {
    if (value >= 15) return "green";
    if (value >= 6) return "blue";
    return "orange";
  }
  if (metric === "sodium") {
    if (value <= 120) return "green";
    if (value <= 260) return "blue";
    return "orange";
  }
  if (metric === "calories") {
    if (value <= 130) return "green";
    if (value <= 220) return "blue";
    return "orange";
  }
  return "blue";
}

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export function generateMetadata({ params }) {
  const comparison = comparisons.find((item) => item.slug === params.slug);
  return {
    title: comparison?.title || "Comparison",
    description: comparison?.intro,
    alternates: {
      canonical: comparison ? `/compare/${comparison.slug}` : "/compare"
    },
    openGraph: {
      title: comparison?.title || "Comparison",
      description: comparison?.intro,
      type: "article"
    }
  };
}

export default function ComparisonPage({ params }) {
  const comparison = comparisons.find((item) => item.slug === params.slug);
  if (!comparison) notFound();
  const lowestSugar = comparison.products.reduce((best, product) => product.totalSugar < best.totalSugar ? product : best, comparison.products[0]);
  const highestProtein = comparison.products.reduce((best, product) => product.protein > best.protein ? product : best, comparison.products[0]);
  const highestSodium = comparison.products.reduce((best, product) => product.sodium > best.sodium ? product : best, comparison.products[0]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.intro,
    dateModified: "2026-05-16",
    author: {
      "@type": "Organization",
      name: "BetterCart AI"
    },
    publisher: {
      "@type": "Organization",
      name: "BetterCart AI"
    }
  };

  return (
    <article className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="eyebrow">Comparison example</div>
      <h1>{comparison.title}</h1>
      <div className="article-meta">
        Updated May 16, 2026 · <Link href="/authors/bettercart-editorial-team">BetterCart AI Editorial Team</Link> · Sample editorial data
      </div>
      <p className="lead">{comparison.intro}</p>
      <div className="sample-data-note">
        <strong>Sample data notice:</strong> This page demonstrates comparison format and editorial logic. It is not a paid product placement, live retailer feed, or hands-on product test.
      </div>
      <div className="comparison-highlights" aria-label="Quick comparison highlights">
        <div>
          <span aria-hidden="true">🍬</span>
          <strong>Lowest sugar</strong>
          <p>{lowestSugar.name}: {lowestSugar.totalSugar}g per serving</p>
        </div>
        <div>
          <span aria-hidden="true">💪</span>
          <strong>Highest protein</strong>
          <p>{highestProtein.name}: {highestProtein.protein}g per serving</p>
        </div>
        <div>
          <span aria-hidden="true">🧂</span>
          <strong>Sodium watch</strong>
          <p>{highestSodium.name}: {highestSodium.sodium}mg per serving</p>
        </div>
      </div>
      {comparison.criteria?.length ? (
        <div className="callout">
          <h2>Comparison criteria</h2>
          <ul>
            {comparison.criteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="table-wrap">
        <table>
          <caption>Sample product comparison fields used for shopping education.</caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Calories</th>
              <th scope="col">Total sugar</th>
              <th scope="col">Added sugar</th>
              <th scope="col">Protein</th>
              <th scope="col">Sodium</th>
              <th scope="col">Fit</th>
            </tr>
          </thead>
          <tbody>
            {comparison.products.map((product) => (
              <tr key={product.name}>
                <td>
                  <strong>{product.name}</strong>
                  <div className="metric">{product.category}</div>
                </td>
                <td><span className={`metric-cell ${metricTone("calories", product.calories)}`}>{product.calories}</span></td>
                <td><span className={`metric-cell ${metricTone("sugar", product.totalSugar)}`}>{product.totalSugar}g</span></td>
                <td>{product.addedSugar === null || product.addedSugar === undefined ? <span className="metric-cell blue">Not listed</span> : <span className={`metric-cell ${metricTone("sugar", product.addedSugar)}`}>{product.addedSugar}g</span>}</td>
                <td><span className={`metric-cell ${metricTone("protein", product.protein)}`}>{product.protein}g</span></td>
                <td><span className={`metric-cell ${metricTone("sodium", product.sodium)}`}>{product.sodium}mg</span></td>
                <td>{product.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{comparison.conclusion}</p>
      {comparison.buyingNotes?.length ? (
        <div className="callout">
          <h2>Before buying</h2>
          <ul>
            {comparison.buyingNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="disclaimer">Example comparison for editorial demonstration. Verify current labels and retailer information before purchase.</div>
      <div className="grid three article-next-steps" aria-label="Comparison next steps">
        <Link className="card" href="/guides">
          <div className="card-icon" aria-hidden="true">📚</div>
          <h2>Read guides</h2>
          <p>Use buying guides to understand serving size, ingredients, and label context.</p>
        </Link>
        <Link className="card" href="/tools/food-comparison-demo">
          <div className="card-icon" aria-hidden="true">🧪</div>
          <h2>Try the demo</h2>
          <p>Change shopping intent and watch the sample product set reorder.</p>
        </Link>
        <Link className="card" href="/affiliate-disclosure">
          <div className="card-icon" aria-hidden="true">🧾</div>
          <h2>Review disclosure</h2>
          <p>See how affiliate links will be disclosed when they are added.</p>
        </Link>
      </div>
    </article>
  );
}
