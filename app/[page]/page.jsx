import { notFound } from "next/navigation";
import Link from "next/link";
import { trustPages } from "../../lib/content";

const trustVisuals = {
  "affiliate-disclosure": [
    ["🤝", "Affiliate links disclosed"],
    ["🧾", "Editorial facts stay visible"],
    ["🚫", "No hidden paid ranking"]
  ],
  "how-we-make-money": [
    ["💵", "Commission may occur later"],
    ["🔎", "Current pages remain transparent"],
    ["📌", "No live affiliate links today"]
  ],
  "data-sources": [
    ["🏷️", "Nutrition labels"],
    ["📦", "Product facts"],
    ["🧪", "USDA sample demo data"]
  ],
  "publisher-kit": [
    ["📚", "Content publisher"],
    ["🛒", "Shopping comparison"],
    ["⚕️", "Not medical advice"]
  ],
  methodology: [
    ["🎯", "Intent first"],
    ["📊", "Label fields"],
    ["⚖️", "Tradeoffs shown"]
  ]
};

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
    },
    openGraph: {
      title: content?.title || "BetterCart AI",
      description: content?.body?.[0],
      type: "website",
      url: content ? `/${params.page}` : "/"
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
      {trustVisuals[params.page]?.length ? (
        <div className="trust-visual-grid" aria-label={`${content.title} summary`}>
          {trustVisuals[params.page].map(([icon, label]) => (
            <div key={label}>
              <span aria-hidden="true">{icon}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      ) : null}
      {content.faq?.length ? (
        <div className="faq-list">
          {content.faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      ) : (
        content.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))
      )}
      {params.page === "contact" ? (
        <div className="callout">
          <h2>Email BetterCart AI</h2>
          <p>
            Use <a href="mailto:contact@bettercartai.com">contact@bettercartai.com</a> for corrections, affiliate review questions, or partnership inquiries.
          </p>
        </div>
      ) : null}
      <div className="callout">
        <h2>Questions or corrections?</h2>
        <p>
          Contact <Link href="/contact">BetterCart AI</Link> if you have product data corrections, partnership questions, or feedback about this page.
        </p>
      </div>
    </article>
  );
}
