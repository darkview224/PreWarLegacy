import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import iconicCards from "/iconicCards.png"

import Card from "../components/card"
import SearchCards from "../components/searchCards";
import Deck from "../components/deck"

const bannedCards = import.meta.glob<string>('../images/BannedCards/*.jpg', {
  import: 'default',
  eager: true,
});

const deckImagesPath = import.meta.glob<string>('../images/DeckImages/*.jpg', {
  import: 'default',
  eager: true,
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prewar" }
  ];
}

function getDeckImage(name : string){
  return deckImagesPath["../images/DeckImages/" + name + ".jpg"];
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
        <Link to="/" className="logo">Prewar</Link>
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
              Prewar is a community-driven, constructed Magic: The Gathering format; capturing what many players feel was the high-water mark for gameplay. The format recreates Legacy in one of its most balanced yet dynamic states. 
              Decks were powerful in a way that tended to reward rather than overwhelm skill. Combo, aggro, and control were all viable; games might take only two turns, or go on past twenty. Specialists could be rewarded for their intricate 
              knowledge of a deck of choice, while generalists who could nail a metagame shift could steal events.  
            </p>
            <br></br>
            <p className="sectionText">
              Prewar has dozens of viable deck types. While many decks had amazing longevity, It was rare for any one to be preeminent for long. Whether digging up overlooked and forgotten tech to get an edge with something classic, or 
              brewing up something spicy and new, there’s immense room for innovation. With over 18,000 cards, the depth of the format offers practically limitless exploration. 
            </p>
            <br></br>
            <p className="sectionText">
              Prewar is also a closed format. Once seen as a liability, closed formats now offer a shield from the effects of <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">FIRE Design</a> on gameplay 
              and balance, and from the effects of Universes Beyond on game aesthetics and release schedules. As release schedules have made the idea of “non-rotating” formats illusory, a closed format delivers. 
              With the explosion of <a href="https://premodernmagic.com/" target="_blank">Premodern</a>, it is clear that many players crave a classic Magic experience.
            </p>
            <br></br>
            <p className="sectionText">
              So does the idea of an extremely wide yet deep format, a massive card pool for brewing, intricate and complex gameplay, and a huge reward for skill appeal to you? If so, then join the Prewar community, and see if it’s for you!
              Want to play soon? Join the <a href="https://gatherling.com/prereg.php?action=reg&event=Prewar%20MTGO%20League%20July%202026" target="_blank">Prewar MTGO League July 2026</a>!
            </p>
          </section>
        )}

        {active === "rules" && (
          <section id="rules" className="sectionPanel">
            <h2 className="sectionHeader">Rules</h2>
            <p className="sectionText">
              Prewar is played with the current Magic: The Gathering tournament rules. Prewar decks may consist of cards from all Magic card sets released prior to War of the Spark; plus the following cards: Sewers of Estark, 
              Windseeker Centaur, and Nalathni Dragon. This includes cards from expansions and special sets (like From the Vault, Magic: The Gathering — Commander, Duel Decks, Conspiracy, etc.). It does not include any cards with a 
              first tournament legal printing in or after War of the Spark (WAR), nor does it include silver bordered cards. There is also a list of banned cards, which are not legal for play in the format.
            </p>
            <br></br>
            <p className="sectionText">
              The following cards are banned:
            </p>
            <ul className="list-disc pl-6 sectionText" style={{textAlign: "left", marginLeft: "50px"}}>
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
              This site offers a search powered by <a href="https://scryfall.com/" target="_blank">Scryfall</a>. Currently, you can search for a card to see if it is legal in Prewar Legacy. Over time, this search will be updated with more 
              functionality. You may prefer to use Scryfall directly with this <a href="https://scryfall.com/search?q=legal%3Alegacy+date%3C%3D2019-05-02&unique=cards&as=grid&order=name" target="_blank">starting query</a>, though it may be 
              inaccurate regarding the banned list.
            </p>
            <SearchCards></SearchCards>
          </section>
        )}

        {active === "decks" && (
          <section id="decks" className="sectionPanel">
            <h2 className="sectionHeader">Decks</h2>
            <p className="sectionText">
              While it is impossible to capture all the decks that people play in Magic, this is a good collection of decks that were played in Legacy before War of the Spark was released. To get an idea of the metagame at the time, 
              we can use the Wayback Machine to see <a href="https://web.archive.org/web/20190401023233/https://www.mtggoldfish.com/metagame/legacy#paper" target="_blank">MTG Goldfish's data from April 1, 2019</a>. We can also look 
              at <a href="https://web.archive.org/web/20190413122147/http://www.mtgtop8.com/format?f=LE" target="_blank">MTG Top 8's data from April 13, 2019</a>. All the decklists below have been sourced from tournament results reported
              around the time before War of the Spark was released. 
            </p>
            <br></br>
            <p className="sectionText">
              Note: Some decks from MTGO events may contain War of the Spark cards as it was released early on MTGO. 
              <br></br>
              <a href="https://www.mtggoldfish.com/tournament_searches/create?tournament_search%5Bname%5D=&tournament_search%5Bformat%5D=legacy&tournament_search%5Bdate_range%5D=01%2F01%2F2018+-+05%2F02%2F2019&commit=Search" target="_blank">MTG Goldfish Tournament Results</a>
              <br></br>
              <a href="https://mtgtop8.com/search" target="_blank">Search MTG Top 8</a> with the format set to "Legacy" and a date of "02/05/2019" in the "To" box.
            </p>
            <br></br>

            <div className="decksGrid">
              <Deck imagePath={getDeckImage("dnt")} deckName="Death and Taxes" decklists={["https://www.mtggoldfish.com/deck/1831188#online", "https://www.mtggoldfish.com/deck/1811498#online", "https://mtgtop8.com/event?e=21720&d=346005&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("grixisControl")} deckName="Grixis Control" decklists={["https://www.mtggoldfish.com/deck/1831202#online", "https://www.mtggoldfish.com/deck/1831198#online", "https://mtgtop8.com/event?e=21720&d=346004&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="Izzet Delver" decklists={["https://www.mtggoldfish.com/deck/1807549#online", "https://mtgtop8.com/event?e=21754&d=346305&f=LE", "https://mtgtop8.com/event?e=21680&d=345674&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("monoRedPrison")} deckName="Mono Red Prison" decklists={["https://www.mtggoldfish.com/deck/1811492#online", "https://www.mtggoldfish.com/deck/1811490#online", "https://mtgtop8.com/event?e=21701&d=345827&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("sneakAndShow")} deckName="Sneak and Show" decklists={["https://www.mtggoldfish.com/deck/1811468#online", "https://www.mtggoldfish.com/deck/1811497#online", "https://mtgtop8.com/event?e=21711&d=345920&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("miracles")} deckName="Miracles" decklists={["https://www.mtggoldfish.com/deck/1811471#online", "https://www.mtggoldfish.com/deck/1811486#online", "https://mtgtop8.com/event?e=21720&d=346003&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="Grixis Delver" decklists={["https://www.mtggoldfish.com/deck/1811482#online", "https://www.mtggoldfish.com/deck/1829368#online", "https://mtgtop8.com/event?e=21624&d=345187&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("golgariDepths")} deckName="Golgari Depths" decklists={["https://www.mtggoldfish.com/deck/1831206#online", "https://www.mtggoldfish.com/deck/1769886#online", "https://mtgtop8.com/event?e=21701&d=345822&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("storm")} deckName="Storm" decklists={["https://www.mtggoldfish.com/deck/1811472#online", "https://www.mtggoldfish.com/deck/1811494#online", "https://mtgtop8.com/event?e=21754&d=346303&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("stoneblade")} deckName="Stoneblade" decklists={["https://www.mtggoldfish.com/deck/1811469#online", "https://www.mtggoldfish.com/deck/1811474#online", "https://mtgtop8.com/event?e=21711&d=345914&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("reanimator")} deckName="Reanimator" decklists={["https://www.mtggoldfish.com/deck/1811470#online", "https://www.mtggoldfish.com/deck/1831186#online", "https://mtgtop8.com/event?e=21711&d=345915&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("maverick")} deckName="Maverick" decklists={["https://www.mtggoldfish.com/deck/1769914#online", "https://www.mtggoldfish.com/deck/1831189#online", "https://mtgtop8.com/event?e=21702&d=345831&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("lands")} deckName="Lands" decklists={["https://www.mtggoldfish.com/deck/1831176#online", "https://www.mtggoldfish.com/deck/1831195#online", "https://mtgtop8.com/event?e=21711&d=345921&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("deathsShadow")} deckName="Death's Shadow" decklists={["https://www.mtggoldfish.com/deck/1831196#online", "https://mtgtop8.com/event?e=21701&d=345824&f=LE", "https://mtgtop8.com/event?e=21754&d=346302&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="Delver Variants" decklists={["https://www.mtggoldfish.com/deck/1811493#online", "https://mtgtop8.com/event?e=21754&d=346301&f=LE", "https://mtgtop8.com/event?e=21658&d=345466&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("4cLoam")} deckName="4C Loam" decklists={["https://www.mtggoldfish.com/deck/1811500#online", "https://mtgtop8.com/event?e=21702&d=345829&f=LE", "https://mtgtop8.com/event?e=21676&d=345648&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("elves")} deckName="Elves" decklists={["https://www.mtggoldfish.com/deck/1811487#online", "https://www.mtggoldfish.com/deck/1831194#online", "https://mtgtop8.com/event?e=21711&d=345918&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("postEldrazi")} deckName="Post/Eldrazi" decklists={["https://www.mtggoldfish.com/deck/1811503#online", "https://www.mtggoldfish.com/deck/1811481#online", "https://mtgtop8.com/event?e=21711&d=345916&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("dredge")} deckName="Dredge" decklists={["https://www.mtggoldfish.com/deck/1811483#online"]}></Deck>
              <Deck imagePath={getDeckImage("burn")} deckName="Burn" decklists={["https://mtgtop8.com/event?e=21754&d=346306&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("infect")} deckName="Infect" decklists={["https://mtgtop8.com/event?e=21399&d=343201&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("painter")} deckName="Painter" decklists={["https://mtgtop8.com/event?e=21564&d=344657&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("bomberman")} deckName="Bomberman" decklists={["https://mtgtop8.com/event?e=21470&d=343798&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("czechPile")} deckName="Czech Pile" decklists={["https://mtgtop8.com/event?e=21423&d=343421&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("affinity")} deckName="Affinity" decklists={["https://mtgtop8.com/event?e=21381&d=343004&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("phoenix")} deckName="Phoenix" decklists={["https://mtgtop8.com/event?e=21381&d=343003&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("foodChain")} deckName="Food Chain" decklists={["https://mtgtop8.com/event?e=21384&d=343084&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("tinFins")} deckName="Tin Fins" decklists={["https://mtgtop8.com/event?e=21281&d=342301&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("merfolk")} deckName="Merfolk" decklists={["https://mtgtop8.com/event?e=21281&d=342303&f=LE"]}></Deck>
              <Deck imagePath={getDeckImage("enchantress")} deckName="Enchantress" decklists={["https://www.mtggoldfish.com/deck/1769884#online"]}></Deck>
              <Deck imagePath={getDeckImage("stryfoPile")} deckName="Stryfo Pile" decklists={["https://mtgtop8.com/event?e=21720&d=346002&f=LE"]}></Deck>
            </div>
          </section>
        )}

        {active === "social" && (
          <section id="social" className="sectionPanel">
            <h2 className="sectionHeader">Social</h2>
            <p className="sectionText">
              The following are the originally dedicated Prewar communities:
            </p>
            <ul className="list-disc pl-6 sectionText" style={{textAlign: "left", marginLeft: "50px"}}>
              <li><a href="https://discord.gg/d94t5dS" target="_blank">Discord</a></li>
              <li><a href="https://www.reddit.com/r/prewarmagic/" target="_blank">Reddit</a></li> 
            </ul>
            <br></br>
            <p className="sectionText">
              We may add additional communities (local or otherwise) as we become aware of them!
            </p>
            <br></br>
            <p className="sectionText">
              Want to play some games? Join the <a href="https://gatherling.com/prereg.php?action=reg&event=Prewar%20MTGO%20League%20July%202026" target="_blank">Prewar MTGO League July 2026</a>!
            </p>
          </section>
        )}
        
      </div>
    </main>
  );
}