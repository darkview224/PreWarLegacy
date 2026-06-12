import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import iconicCards from "/iconicCards.png"
import Card from "../components/card"

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
              <li>25 cards with the Card Type <a href="https://gatherer.wizards.com/search?instanceType=eq~Conspiracy">Conspiracy</a>.</li>
              <li>9 cards that reference "playing for <a href="https://scryfall.com/search?q=o%3A%22+ante%22">ante</a>.</li>
            </ul>
            <div className="bannedCardsGrid">
              <Card imageSource="BannedCards/AncestralRecall.jpg"></Card>
              <Card imageSource="BannedCards/Balance.jpg"></Card>
              <Card imageSource="BannedCards/BazaarOfBaghdad.jpg"></Card>
              <Card imageSource="BannedCards/BlackLotus.jpg"></Card>
              <Card imageSource="BannedCards/Channel.jpg"></Card>
              <Card imageSource="BannedCards/ChaosOrb.jpg"></Card>
              <Card imageSource="BannedCards/DeathriteShaman.jpg"></Card>
              <Card imageSource="BannedCards/DemonicConsultation.jpg"></Card>
              <Card imageSource="BannedCards/DemonicTutor.jpg"></Card>
              <Card imageSource="BannedCards/DigThroughTime.jpg"></Card>
              <Card imageSource="BannedCards/Earthcraft.jpg"></Card>
              <Card imageSource="BannedCards/FallingStar.jpg"></Card>
              <Card imageSource="BannedCards/Fastbond.jpg"></Card>
              <Card imageSource="BannedCards/Flash.jpg"></Card>
              <Card imageSource="BannedCards/FranticSearch.jpg"></Card>
              <Card imageSource="BannedCards/GitaxianProbe.jpg"></Card>
              <Card imageSource="BannedCards/GoblinRecruiter.jpg"></Card>
              <Card imageSource="BannedCards/Gush.jpg"></Card>
              <Card imageSource="BannedCards/HermitDruid.jpg"></Card>
              <Card imageSource="BannedCards/ImperialSeal.jpg"></Card>
              <Card imageSource="BannedCards/LibraryOfAlexandria.jpg"></Card>
              <Card imageSource="BannedCards/ManaCrypt.jpg"></Card>
              <Card imageSource="BannedCards/ManaDrain.jpg"></Card>
              <Card imageSource="BannedCards/ManaVault.jpg"></Card>
              <Card imageSource="BannedCards/MemoryJar.jpg"></Card>
              <Card imageSource="BannedCards/MentalMisstep.jpg"></Card>
              <Card imageSource="BannedCards/MindsDesire.jpg"></Card>
              <Card imageSource="BannedCards/MindTwist.jpg"></Card>
              <Card imageSource="BannedCards/MishrasWorkshop.jpg"></Card>
              <Card imageSource="BannedCards/MoxEmerald.jpg"></Card>
              <Card imageSource="BannedCards/MoxJet.jpg"></Card>
              <Card imageSource="BannedCards/MoxPearl.jpg"></Card>
              <Card imageSource="BannedCards/MoxRuby.jpg"></Card>
              <Card imageSource="BannedCards/MoxSapphire.jpg"></Card>
              <Card imageSource="BannedCards/MysticalTutor.jpg"></Card>
              <Card imageSource="BannedCards/Necropotence.jpg"></Card>
              <Card imageSource="BannedCards/OathOfDruids.jpg"></Card>
              <Card imageSource="BannedCards/SenseisDiviningTop.jpg"></Card>
              <Card imageSource="BannedCards/Shahrazad.jpg"></Card>
              <Card imageSource="BannedCards/Skullclamp.jpg"></Card>
              <Card imageSource="BannedCards/SolRing.jpg"></Card>
              <Card imageSource="BannedCards/StripMine.jpg"></Card>
              <Card imageSource="BannedCards/SurvivalOfTheFittest.jpg"></Card>
              <Card imageSource="BannedCards/Timetwister.jpg"></Card>
              <Card imageSource="BannedCards/TimeVault.jpg"></Card>
              <Card imageSource="BannedCards/TimeWalk.jpg"></Card>
              <Card imageSource="BannedCards/Tinker.jpg"></Card>
              <Card imageSource="BannedCards/TolarianAcademy.jpg"></Card>
              <Card imageSource="BannedCards/TreasureCruise.jpg"></Card>
              <Card imageSource="BannedCards/VampiricTutor.jpg"></Card>
              <Card imageSource="BannedCards/WheelOfFortune.jpg"></Card>
              <Card imageSource="BannedCards/Windfall.jpg"></Card>
              <Card imageSource="BannedCards/YawgmothsBargain.jpg"></Card>
              <Card imageSource="BannedCards/YawgmothsWill.jpg"></Card>
            </div>
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
