"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function TopicsBrowser({ topics }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredTopics = useMemo(() => {
    if (!normalizedQuery) return topics;
    return topics.filter((topic) => {
      const linkText = topic.links.map(([, label]) => label).join(" ");
      return `${topic.title} ${topic.text} ${linkText}`.toLowerCase().includes(normalizedQuery);
    });
  }, [topics, normalizedQuery]);

  return (
    <>
      <div className="site-search">
        <label htmlFor="topic-search">Find a topic</label>
        <input
          id="topic-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try sugar, beverage, sodium, frozen, spreads..."
        />
        <span role="status">{filteredTopics.length} topics shown</span>
      </div>

      {filteredTopics.length ? (
        <div className="grid two">
          {filteredTopics.map((topic) => (
            <div className="card" key={topic.title}>
              <div className="card-icon" aria-hidden="true">{topic.icon}</div>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
              <div className="link-list">
                {topic.links.map(([href, label]) => (
                  <Link href={href} key={href}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="callout">
          <h2>No matching topics</h2>
          <p>Try a broader term such as sugar, protein, beverage, sodium, cereal, sauce, or snack.</p>
        </div>
      )}
    </>
  );
}
