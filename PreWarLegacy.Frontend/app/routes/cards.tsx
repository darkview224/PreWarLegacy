import type { Route } from "./+types/cards";

import SearchCards from "../components/searchCards";

export function meta({}: Route.MetaArgs) {
  const title = "Cards – Prewar Magic";
  const description = "Search for cards legal in Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/cards";
  const image = "https://prewarmagic.com/iconicCards_1200.png";

  return [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
  ];
}

export default function Cards() {
  return (
    <section id="cards" className="sectionPanel">
      <h2 className="sectionHeader">Cards</h2>
      <SearchCards></SearchCards>
    </section>
  );
}
