"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function SiteIndexBrowser({ groups }) {
  const [query, setQuery] = useState("");
  const quickSearches = ["disclosure", "demo", "privacy", "methodology"];
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    if (!normalizedQuery) return groups;
    return groups
      .map((group) => ({
        ...group,
        links: group.links.filter((link) => {
          return `${link.label} ${link.href}`.toLowerCase().includes(normalizedQuery);
        })
      }))
      .filter((group) => group.links.length);
  }, [groups, normalizedQuery]);

  return (
    <>
      <div className="site-search">
        <label htmlFor="site-index-search">Find a page</label>
        <input
          id="site-index-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try disclosure, demo, protein, privacy..."
        />
        <span role="status">{filteredGroups.reduce((total, group) => total + group.links.length, 0)} pages shown</span>
        {query ? (
          <button type="button" onClick={() => setQuery("")}>Clear</button>
        ) : null}
        <div className="quick-searches" aria-label="Quick site index searches">
          {quickSearches.map((term) => (
            <button type="button" key={term} onClick={() => setQuery(term)}>{term}</button>
          ))}
        </div>
      </div>

      {filteredGroups.length ? (
        <div className="grid two">
          {filteredGroups.map((group) => (
            <div className="card" key={group.title}>
              <h2>{group.title}</h2>
              <div className="link-list vertical">
                {group.links.map((link) => (
                  <Link href={link.href} key={link.href}>{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="callout">
          <h2>No matching pages</h2>
          <p>Try a broader term such as guide, comparison, disclosure, privacy, or demo.</p>
        </div>
      )}
    </>
  );
}
