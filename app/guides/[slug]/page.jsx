import { notFound } from "next/navigation";
import { guides } from "../../../lib/content";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  return {
    title: guide?.title || "Guide",
    description: guide?.excerpt
  };
}

export default function GuidePage({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) notFound();

  return (
    <article className="article">
      <div className="eyebrow">Food guide</div>
      <h1>{guide.title}</h1>
      <div className="article-meta">Updated May 15, 2026 · BetterCart AI Editorial Team</div>
      <p className="lead">{guide.excerpt}</p>
      {guide.checklist?.length ? (
        <div className="callout">
          <h2>Quick checklist</h2>
          <ul>
            {guide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
