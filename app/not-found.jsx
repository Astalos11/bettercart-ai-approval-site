import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Page not found</div>
          <h1>We could not find that page.</h1>
          <p className="lead">
            The page may have moved, or the link may be incomplete. Start with the main guide areas below.
          </p>
        </div>
        <div className="grid three">
          <Link className="card" href="/guides">
            <h2>Food Guides</h2>
            <p>Read practical packaged food buying guides.</p>
          </Link>
          <Link className="card" href="/compare">
            <h2>Comparisons</h2>
            <p>See sample food comparison formats.</p>
          </Link>
          <Link className="card" href="/for-reviewers">
            <h2>For Reviewers</h2>
            <p>Review the site purpose, policies, and affiliate use case.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
