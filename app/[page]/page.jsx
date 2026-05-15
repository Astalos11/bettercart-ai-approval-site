import { notFound } from "next/navigation";
import { trustPages } from "../../lib/content";

export function generateStaticParams() {
  return Object.keys(trustPages).map((page) => ({ page }));
}

export function generateMetadata({ params }) {
  const content = trustPages[params.page];
  return {
    title: content?.title || "BetterCart AI",
    description: content?.body?.[0]
  };
}

export default function TrustPage({ params }) {
  const content = trustPages[params.page];
  if (!content) notFound();

  return (
    <article className="article">
      <div className="eyebrow">BetterCart AI</div>
      <h1>{content.title}</h1>
      <div className="article-meta">Updated May 15, 2026</div>
      {content.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}
