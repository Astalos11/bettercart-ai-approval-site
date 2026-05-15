import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisons } from "../../../lib/content";

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
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.intro,
    dateModified: "2026-05-15",
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
        Updated May 15, 2026 · <Link href="/authors/bettercart-editorial-team">BetterCart AI Editorial Team</Link> · Sample editorial data
      </div>
      <p className="lead">{comparison.intro}</p>
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
          <thead>
            <tr>
              <th>Product</th>
              <th>Calories</th>
              <th>Total sugar</th>
              <th>Protein</th>
              <th>Sodium</th>
              <th>Fit</th>
            </tr>
          </thead>
          <tbody>
            {comparison.products.map((product) => (
              <tr key={product.name}>
                <td>
                  <strong>{product.name}</strong>
                  <div className="metric">{product.category}</div>
                </td>
                <td>{product.calories}</td>
                <td>{product.totalSugar}g</td>
                <td>{product.protein}g</td>
                <td>{product.sodium}mg</td>
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
    </article>
  );
}
