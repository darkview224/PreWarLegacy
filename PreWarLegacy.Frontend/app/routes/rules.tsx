import type { Route } from "./+types/rules";

import Card from "../components/card"
import SetIcon from "../components/setIcon"
import { legalSets } from "../data/legalSets";

const bannedCards = import.meta.glob<string>('../images/BannedCards/*.jpg', {
  import: 'default',
  eager: true,
});

const legalSetIcons = import.meta.glob<string>('../images/LegalSets/*.svg', {
  import: 'default',
  eager: true,
});

function getSetIcon(code : string){
  return legalSetIcons["../images/LegalSets/" + code + ".svg"];
}

export function meta({}: Route.MetaArgs) {
  const title = "Rules – Prewar Magic";
  const description = "The rules, legal card pool, and banned list for Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/rules";
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

export default function Rules() {
  const bannedCardImagePaths = Object.values(bannedCards);

  return (
    <section id="rules" className="sectionPanel">
      <h2 className="sectionHeader">Rules</h2>
      <p className="sectionText">
        Prewar is played with the current Magic: The Gathering tournament rules. Prewar decks may consist of cards from <a href="#legal-sets">all Magic card sets released prior to <em>War of the Spark</em></a>; plus the following cards: Sewers of Estark,
        Windseeker Centaur, and Nalathni Dragon. This includes cards from expansions and special sets (like Portal, Commander 2011-2018, Conspiracy, etc.). It does not include any cards with a
        first tournament legal printing in or after <em>War of the Spark</em>, nor does it include silver bordered cards. There is also a <a href="#banned-cards">list of banned cards</a>, which are not legal for play in the format.
      </p>
      <br></br>
      <h3 id="legal-sets" className="sectionText sectionSubheading">
        The following sets are legal:
      </h3>
      <div className="setsGrid">
        {legalSets.map((set) => (
          <SetIcon
            key={set.code}
            imageSource={getSetIcon(set.code)}
            name={set.name}
            code={set.code}
            year={set.year}
          ></SetIcon>
        ))}
      </div>
      <br></br>
      <h3 id="banned-cards" className="sectionText sectionSubheading">
        The following cards are banned:
      </h3>
      <ul className="list-disc pl-6 sectionText" style={{textAlign: "left", marginLeft: "50px"}}>
        <li>25 cards with the Card Type <a href="https://scryfall.com/search?q=type%3Aconspiracy" target="_blank">Conspiracy</a>.</li>
        <li>9 cards that reference "playing for <a href="https://scryfall.com/search?q=o%3A%22+ante%22" target="_blank">ante</a>.</li>
      </ul>
      <div className="cardsGrid">
        {bannedCardImagePaths.map((path) => (<Card imageSource={path}></Card>))}
      </div>
    </section>
  );
}
