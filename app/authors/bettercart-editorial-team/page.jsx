import Link from "next/link";

export const metadata = {
  title: "BetterCart AI Editorial Team",
  description:
    "About the BetterCart AI editorial team and its packaged food comparison content standards."
};

export default function EditorialTeamPage() {
  return (
    <article className="article">
      <div className="eyebrow">Author</div>
      <h1>BetterCart AI Editorial Team</h1>
      <div className="article-meta">Updated May 15, 2026</div>
      <p className="lead">
        The BetterCart AI Editorial Team creates packaged food shopping guides, comparison examples, and label-reading resources for US grocery shoppers.
      </p>
      <p>
        The team focuses on practical product facts: serving size, nutrition labels, ingredient lists, category context, and shopping intent. Content should help readers compare tradeoffs clearly instead of treating every food as universally good or bad.
      </p>
      <p>
        BetterCart AI does not provide medical advice. Pages should avoid disease-treatment claims, fake hands-on testing claims, undisclosed paid placement, and unsupported health claims.
      </p>
      <div className="callout">
        <h2>Editorial references</h2>
        <div className="link-list">
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/publishing-standards">Publishing Standards</Link>
          <Link href="/corrections-policy">Corrections Policy</Link>
        </div>
      </div>
    </article>
  );
}
