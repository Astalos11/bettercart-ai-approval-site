import { notFound } from "next/navigation";
import Link from "next/link";
import { trustPages } from "../../lib/content";

export function generateStaticParams() {
  return Object.keys(trustPages).map((page) => ({ page }));
}

export function generateMetadata({ params }) {
  const content = trustPages[params.page];
  return {
    title: content?.title || "BetterCart AI",
    description: content?.body?.[0],
    alternates: {
      canonical: content ? `/${params.page}` : "/"
    }
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
      {content.faq?.length ? (
        <div className="faq-list">
          {content.faq.map((item) => (
            <section className="faq-item" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </section>
          ))}
        </div>
      ) : (
        content.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))
      )}
      <div className="callout">
        <h2>Questions or corrections?</h2>
        <p>
          Contact <Link href="/contact">BetterCart AI</Link> if you have product data corrections, partnership questions, or feedback about this page.
        </p>
      </div>
    </article>
  );
}
