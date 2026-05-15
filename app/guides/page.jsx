import Link from "next/link";
import { guides } from "../../lib/content";

export const metadata = {
  title: "Food Buying Guides",
  description: "Simple guides for comparing packaged foods by nutrition facts, ingredients, and shopping intent."
};

export default function GuidesIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Guides</div>
          <h1>Food Buying Guides</h1>
          <p className="lead">Simple guides for comparing packaged foods by nutrition facts, ingredients, and shopping intent.</p>
        </div>
        <div className="grid three">
          {guides.map((guide) => (
            <Link className="card" href={`/guides/${guide.slug}`} key={guide.slug}>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
