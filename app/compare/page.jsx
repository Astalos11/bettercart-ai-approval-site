import Link from "next/link";
import { comparisons } from "../../lib/content";

export const metadata = {
  title: "Food Comparison Examples",
  description: "Example product comparisons showing how nutrition facts and ingredient context can support grocery decisions."
};

export default function CompareIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Compare</div>
          <h1>Food Comparison Examples</h1>
          <p className="lead">Example product comparisons showing how nutrition facts and ingredient context can support everyday grocery decisions.</p>
        </div>
        <div className="grid two">
          {comparisons.map((comparison) => (
            <Link className="card" href={`/compare/${comparison.slug}`} key={comparison.slug}>
              <h3>{comparison.title}</h3>
              <p>{comparison.intro}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
