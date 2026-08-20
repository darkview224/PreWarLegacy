import type { Route } from "./+types/cards";

import SearchCards from "../components/searchCards";

export function meta({}: Route.MetaArgs) {
  const title = "Cards – Prewar Magic";
  const description = "Search for a Magic: The Gathering card and see if it is legal in Prewar, the community-driven Legacy format frozen just before War of the Spark.";
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
      <p className="sectionText">
        This site offers a search powered by <a href="https://scryfall.com/" target="_blank">Scryfall</a>. Currently, you can search for a card to see if it is legal in Prewar Legacy. Over time, this search will be updated with more
        functionality. You may prefer to use Scryfall directly with this <a href="https://scryfall.com/search?q=legal%3Alegacy+date%3C%3D2019-05-02&unique=cards&as=grid&order=name" target="_blank">starting query</a>, though it may be
        inaccurate regarding the banned list.
      </p>
      <SearchCards></SearchCards>
    </section>
  );
}
