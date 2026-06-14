import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import iconicCards from "/iconicCards.png"
import Card from "../components/card"
import SearchCards from "~/components/searchCards";

const bannedCards = import.meta.glob<string>('../images/BannedCards/*.jpg', {
  import: 'default',
  eager: true,
})

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PreWar Legacy" }
  ];
}

export default function Home() {
  const [active, setActive] = useState("about");
  const bannedCardImagePaths = Object.values(bannedCards);

  const handleNav = (section: string) => {
    setActive(section);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <div className="navBar">
        <Link to="/" className="logo">PreWar Legacy</Link>
        <nav style={{display: "flex", gap: "50px"}}>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("rules")}>Rules</button>
          <button onClick={() => handleNav("cards")}>Cards</button>
          <button onClick={() => handleNav("decks")}>Decks</button>
          <button onClick={() => handleNav("social")}>Social</button>
        </nav>
      </div>
      
      <div className="content">


        {active === "about" && (
          <section id="about" className="sectionPanel">

            <img className="iconicCards" src={iconicCards}></img>

            <h2 className="sectionHeader">About</h2>
            <p className="sectionText">
              PreWar Legacy, or simply Prewar Magic, is a community-driven constructed Magic: The Gathering format including all cards which were tournament-legal prior to the release of the set War of the Spark (May 2019), 
              except those banned in Legacy at that time. In June 2019, soon after the release of Modern Horizons, Wizards of the Coast announced a new design philosophy that started with War of the Spark
              called <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">FIRE</a>. This design philosophy has been prevalent in Magic since, and has drastically shaped the entire game. 
            </p>
            <br></br>
            <p className="sectionText">
              Legacy during the time period leading up to War of the Spark offered a unique gameplay experience. The format was both balanced and diverse, with no deck maintaining a prevalence over 10% for long, and dozens 
              of contenders over 2%. Decks were powerful, but the format’s incredibly deep card pool and character allowed for a lot of success with brewing. This was evident in how the metagame and deck design shifted 
              significantly from week-to-week for at least 3 seasons prior. The format was also extremely rewarding for skilled players, both generalists and deck specialists alike. Combo, aggro, and control were all viable, 
              and games might take only two turns, or go on past twenty. To many, this was the game's high-water mark. Changes in design philosophy and sales strategy have made this experience impossible to recreate in contemporary Magic. 
              PreWar Legacy exists because it gives that feeling, the highest of highs, and special play patterns with highly strategic decision making.
            </p>
            <br></br>
            <p className="sectionText">
              With the explosion in popularity of <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">Premodern</a>, it is clear that many players crave for an alternative style of competitive Magic: The Gathering.
              Players are craving a format without FIRE design and Universes Beyond - even if it that means new cards will not be added. A closed format has now become a strength. Join the community today!
            </p>
          </section>
        )}

        {active === "rules" && (
          <section id="rules" className="sectionPanel">
            <h2 className="sectionHeader">Rules</h2>
            <p className="sectionText">
              PreWar Legacy is played with modern Magic: The Gathering rules. All tournament legal versions of cards (and reprints) may be used in decks as long as that card was originally printed before War of the Spark's release on May 3, 2019. 
              PreWar Legacy has the Legacy ban list that was present at the time of War of the Spark's release. 
            </p>
            <br></br>
            <p className="sectionText">
              The following cards are banned:
            </p>
            <ul className="list-disc pl-6 sectionText" style={{textAlign: "left", marginLeft: "50px"}}>
              <li>Cards with a name originally printed in the War of the Spark expansion, or any set released at a later date (May 3, 2019).</li>
              <li>25 cards with the Card Type <a href="https://scryfall.com/search?q=type%3Aconspiracy" target="_blank">Conspiracy</a>.</li>
              <li>9 cards that reference "playing for <a href="https://scryfall.com/search?q=o%3A%22+ante%22" target="_blank">ante</a>.</li>
            </ul>
            <div className="cardsGrid">
              {bannedCardImagePaths.map((path) => (<Card imageSource={path}></Card>))}
            </div>
          </section>
        )}

        {active === "cards" && (
          <section id="cards" className="sectionPanel">
            <h2 className="sectionHeader">Cards</h2>
            <p className="sectionText">
              Over time, this search will be updated with more functionality. For now, you can search for a card to see if it is legal in PreWar Legacy. This search uses <a href="https://scryfall.com/" target="_blank">Scryfall</a> and you may prefer to use 
              that with this <a href="https://scryfall.com/search?q=legal%3Alegacy+date%3C%3D2019-05-02&unique=cards&as=grid&order=name" target="_blank">starting query</a>. Keep in mind that using Scryfall directly will not entirely filter out the ban list.
            </p>
            <SearchCards></SearchCards>
          </section>
        )}

        {active === "decks" && (
          <section id="decks" className="sectionPanel">
            <h2 className="sectionHeader">Decks</h2>
          </section>
        )}

        {active === "social" && (
          <section id="social" className="sectionPanel">
            <h2 className="sectionHeader">Social</h2>
          </section>
        )}
        
      </div>
    </main>
  );
}

function handleNavigation (section: string){
  setActive
}