import { notFound } from "next/navigation";
import Link from "next/link";
import { guides } from "../../../lib/content";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  return {
    title: guide?.title || "Guide",
    description: guide?.excerpt,
    alternates: {
      canonical: guide ? `/guides/${guide.slug}` : "/guides"
    },
    openGraph: {
      title: guide?.title || "Guide",
      description: guide?.excerpt,
      type: "article"
    }
  };
}

export default function GuidePage({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
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
      <div className="eyebrow">Food guide</div>
      <h1>{guide.title}</h1>
      <div className="article-meta">
        Updated May 16, 2026 · <Link href="/authors/bettercart-editorial-team">BetterCart AI Editorial Team</Link>
      </div>
      <p className="lead">{guide.excerpt}</p>
      <img
        className="article-visual"
        src="/images/packaged-food-guide-flatlay.webp"
        alt="Unbranded packaged foods and nutrition label cards used as a guide example"
      />
      {guide.checklist?.length ? (
        <div className="callout">
          <h2>✅ Quick checklist</h2>
          <div className="checklist-grid">
            {guide.checklist.map((item) => (
              <div key={item}>
                <span aria-hidden="true">✓</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {guide.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="disclaimer">
        This guide is for general shopping education and is not medical advice. Always verify current product labels before purchase.
      </div>
    </article>
  );
}
