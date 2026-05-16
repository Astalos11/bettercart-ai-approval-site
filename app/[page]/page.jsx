import { notFound } from "next/navigation";
import Link from "next/link";
import { trustPages } from "../../lib/content";

const trustVisuals = {
  about: [
    ["🛒", "Packaged food comparison"],
    ["📊", "Label facts first"],
    ["🚫", "No universal food scores"]
  ],
  contact: [
    ["✉️", "Correction requests"],
    ["🤝", "Partner questions"],
    ["🏷️", "Product data updates"]
  ],
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
    ["📌", "Not medical advice"]
  ],
  methodology: [
    ["🎯", "Intent first"],
    ["📊", "Label fields"],
    ["⚖️", "Tradeoffs shown"]
  ],
  "editorial-policy": [
    ["🧾", "Evidence-based guides"],
    ["🚫", "No fake testing claims"],
    ["⚖️", "Tradeoffs allowed"]
  ],
  "publishing-standards": [
    ["📚", "Useful comparison content"],
    ["🏷️", "Sample data labeled"],
    ["🚫", "No pressure claims"]
  ],
  "review-process": [
    ["🔎", "Source check"],
    ["📋", "Editorial review"],
    ["🛠️", "Corrections path"]
  ],
  "program-compliance": [
    ["✅", "Allowed methods only"],
    ["🚫", "No spam tactics"],
    ["📌", "Advertiser rules reviewed"]
  ],
  "partner-policy": [
    ["🤝", "Publisher partnerships"],
    ["📊", "Comparison context"],
    ["🚫", "No guaranteed favorable rank"]
  ],
  privacy: [
    ["🔐", "Privacy-aware"],
    ["📉", "Basic analytics only"],
    ["🚫", "No direct checkout"]
  ],
  "cookie-policy": [
    ["🍪", "Cookie notice"],
    ["📈", "Analytics context"],
    ["🔗", "Affiliate tracking later"]
  ],
  terms: [
    ["📌", "Shopping information"],
    ["🚫", "Not medical advice"],
    ["🏷️", "Verify current labels"]
  ],
  "corrections-policy": [
    ["🛠️", "Correction path"],
    ["🏷️", "UPC helpful"],
    ["📎", "Source links preferred"]
  ],
  "content-calendar": [
    ["📅", "Repeatable topics"],
    ["🥣", "Category coverage"],
    ["📌", "Quality over volume"]
  ]
};

const publisherSnapshot = [
  ["Audience", "US grocery shoppers comparing packaged foods by label facts and shopping intent."],
  ["Content formats", "Buying guides, sample comparisons, topic hubs, trust pages, and a static demo."],
  ["Promotion method", "Clearly disclosed editorial links only after network and advertiser approval."],
  ["Current status", "No live affiliate links, no fake traffic claims, and no direct checkout."]
];

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
      <div className="article-meta">Updated May 16, 2026</div>
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
      {params.page === "publisher-kit" ? (
        <div className="readiness-matrix" aria-label="Publisher application snapshot">
          <div className="readiness-row head">
            <span>Application area</span>
            <span>Status</span>
            <span>Reviewer note</span>
          </div>
          {publisherSnapshot.map(([area, note]) => (
            <div className="readiness-row" key={area}>
              <strong>{area}</strong>
              <span className="badge green">Ready</span>
              <span>{note}</span>
            </div>
          ))}
        </div>
      ) : null}
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
