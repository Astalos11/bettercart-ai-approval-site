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

const publisherFacts = [
  ["Site URL", "https://www.bettercartai.com"],
  ["Contact", "contact@bettercartai.com"],
  ["Publisher type", "Content publisher / shopping guide / comparison site"],
  ["Current links", "No live affiliate links"],
  ["Commerce model", "Future disclosed editorial links only"],
  ["Data boundary", "Sample data and USDA-derived demo examples are labeled"]
];

const dataSourceSnapshot = [
  ["Nutrition facts", "Used in demo", "Rounded USDA-derived sample examples for product experience only."],
  ["Ingredient lists", "Planned", "Used when reliable product labels or structured sources are available."],
  ["Retailer availability", "Future", "Not connected in the current approval site."],
  ["Affiliate feeds", "Future", "Only after network and advertiser approval, with disclosure."]
];

const programComplianceSnapshot = [
  ["Allowed methods", "Ready", "Editorial guides, comparison pages, label education, and disclosed links where permitted."],
  ["Not used", "Blocked", "Forced clicks, cookie stuffing, spam, fake reviews, and undisclosed sponsored claims."],
  ["Needs review", "Per program", "Trademark bidding, coupon wording, paid social, email, and negative comparison rules."],
  ["Food claims", "Bounded", "No disease-treatment claims, medical advice, or unsupported health-effect claims."]
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
        <>
          <div className="publisher-facts" aria-label="Publisher application facts">
            {publisherFacts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

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
        </>
      ) : null}
      {params.page === "data-sources" ? (
        <div className="readiness-matrix" aria-label="Data source coverage snapshot">
          <div className="readiness-row head">
            <span>Data area</span>
            <span>Status</span>
            <span>Current boundary</span>
          </div>
          {dataSourceSnapshot.map(([area, status, note]) => (
            <div className="readiness-row" key={area}>
              <strong>{area}</strong>
              <span className={`badge ${status === "Used in demo" ? "green" : status === "Planned" ? "blue" : "orange"}`}>{status}</span>
              <span>{note}</span>
            </div>
          ))}
        </div>
      ) : null}
      {params.page === "program-compliance" ? (
        <div className="readiness-matrix" aria-label="Program compliance snapshot">
          <div className="readiness-row head">
            <span>Compliance area</span>
            <span>Status</span>
            <span>Boundary</span>
          </div>
          {programComplianceSnapshot.map(([area, status, note]) => (
            <div className="readiness-row" key={area}>
              <strong>{area}</strong>
              <span className={`badge ${status === "Ready" ? "green" : status === "Blocked" ? "orange" : "blue"}`}>{status}</span>
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
