import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import iconicCards from "/iconicCards.png"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PreWar Legacy" }
  ];
}

export default function Home() {
  const [active, setActive] = useState("about");

  return (
    <main>
      <div className="navBar">
        <Link to="/" className="logo">PreWar Legacy</Link>
        <nav style={{display: "flex", gap: "50px"}}>
          <button onClick={() => setActive("about")}>About</button>
          <button onClick={() => setActive("rules")}>Rules</button>
          <button onClick={() => setActive("cards")}>Cards</button>
          <button onClick={() => setActive("decks")}>Decks</button>
          <button onClick={() => setActive("social")}>Social</button>
        </nav>
      </div>
      
      <div className="content">

        <img className="iconicCards" src={iconicCards}></img>

        {active === "about" && (
          <section id="about" className="sectionPanel">
            <h2 className="sectionHeader">About</h2>
            <p className="sectionText">
              PreWar Legacy is a community created closed format that started in April 2020 simply as a <a href="https://www.reddit.com/r/PreWAR_Legacy_MTG/" target="_blank">Reddit post.</a> For some players, the Companion mechanic was the 
              final straw after nearly a year of incredibly pushed and powerful cards starting with War of the Spark and Modern Horizons. In June 2019, soon after the release of Modern Horizons, Wizards of the Coast announced a new design philosophy 
              called <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">FIRE.</a> This design philosophy has been prevalent in Magic since, and has drastically shaped the entire game. 
            </p>
            <br></br>
            <p className="sectionText">
              After some time, PreWar Legacy fell off. At the time, Wizards of the Coast was making better decisions with how the Legacy format was being handled, and this ultimately was enough for most players to return to the format. 
              However, there are still players who crave a specific style of play that only PreWar Legacy is able to offer. Despite bans, erratas, and new cards, the PreWar Legacy feeling has been missing in current Legacy for years. PreWar Legacy exists because
              it gives that feeling, the highest of highs, and certain play patterns with highly strategic decision making.
            </p>
            <br></br>
            <p className="sectionText">
              With the explosion in popularity of <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">Premodern</a>, it is clear that many players crave for an alternative style of competitive Magic: The Gathering.
              Players are craving a format without FIRE design and Universes Beyond - even if it that means new cards will not be added. It took a long time for Premodern to become "mainstream" and popular across the Magic world, even if many people 
              knew it existed. A closed format may have sounded like a bad idea to many, but it is now a great strength. The hope is that PreWar Legacy can have the same fate. Slowly, PreWar may become big enough for 1Ks or even 5Ks 
              the same way Premodern currently is now. 
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
              <li>25 cards with the Card Type "Conspiracy."</li>
              <li>9 cards that reference "playing for ante."</li>
              <li>Ancestral Recall</li>
              <li>Balance</li>
              <li>Bazaar of Baghdad</li>
              <li>Black Lotus</li>
              <li>Channel</li>
              <li>Chaos Orb</li>
              <li>Deathrite Shaman</li>
              <li>Demonic Consultation</li>
              <li>Demonic Tutor</li>
              <li>Dig Through Time</li>
              <li>Earthcraft</li>
              <li>Falling Star</li>
              <li>Fastbond</li>
              <li>Flash</li>
              <li>Frantic Search</li>
              <li>Gitaxian Probe</li>
              <li>Goblin Recruiter</li>
              <li>Gush</li>
              <li>Hermit Druid</li>
              <li>Imperial Seal</li>
              <li>Library of Alexandria</li>
              <li>Mana Crypt</li>
              <li>Mana Drain</li>
              <li>Mana Vault</li>
              <li>Memory Jar</li>
              <li>Mental Misstep</li>
              <li>Mind Twist</li>
              <li>Mind's Desire</li>
              <li>Mishra's Workshop</li>
              <li>Mox Emerald</li>
              <li>Mox Jet</li>
              <li>Mox Pearl</li>
              <li>Mox Ruby</li>
              <li>Mox Sapphire</li>
              <li>Mystical Tutor</li>
              <li>Necropotence</li>
              <li>Oath of Druids</li>
              <li>Sensei's Divining Top</li>
              <li>Shahrazad</li>
              <li>Skullclamp</li>
              <li>Sol Ring</li>
              <li>Strip Mine</li>
              <li>Survival of the Fittest</li>
              <li>Time Vault</li>
              <li>Time Walk</li>
              <li>Timetwister</li>
              <li>Tinker</li>
              <li>Tolarian Academy</li>
              <li>Treasure Cruise</li>
              <li>Vampiric Tutor</li>
              <li>Wheel of Fortune</li>
              <li>Windfall</li>
              <li>Yawgmoth's Bargain</li>
              <li>Yawgmoth's Will</li>
            </ul>
          </section>
        )}

        {active === "cards" && (
          <section id="cards" className="sectionPanel">
            <h2 className="sectionHeader">Cards</h2>
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
