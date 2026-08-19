import type { Route } from "./+types/home";
import { useState } from "react";
import { Link } from "react-router";
import iconicCards from "/iconicCards_1200.png"

import Card from "../components/card"
import SearchCards from "../components/searchCards";
import Deck from "../components/deck"
import ContactPage from "~/components/contactPage";

const bannedCards = import.meta.glob<string>('../images/BannedCards/*.jpg', {
  import: 'default',
  eager: true,
});

const deckImagesPath = import.meta.glob<string>('../images/DeckImages/*.jpg', {
  import: 'default',
  eager: true,
});

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function meta({}: Route.MetaArgs) {
  const title = "Prewar Magic";
  const description = "Prewar is a community-driven Legacy format frozen at the card pool just before War of the Spark and FIRE design changed the game. Legacy, the way it used to play.";
  const url = "https://prewarmagic.com";
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

function getDeckImage(name : string){
  return deckImagesPath["../images/DeckImages/" + name + ".jpg"];
}


export default function Home() {
  const [active, setActive] = useState("about");
  const bannedCardImagePaths = Object.values(bannedCards);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (section: string) => {
    setActive(section);
    window.scrollTo(0, 0);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <div className="navBar">
        <Link to="/" className="logo">Prewar Magic</Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <nav className={`navLinks ${isOpen ? "open" : ""}`}>
          <button onClick={() => { handleNav("about"); setIsOpen(false); }}>About</button>
          <button onClick={() => { handleNav("rules"); setIsOpen(false); }}>Rules</button>
          <button onClick={() => { handleNav("cards"); setIsOpen(false); }}>Cards</button>
          <button onClick={() => { handleNav("decks"); setIsOpen(false); }}>Decks</button>
          <a href="https://discord.gg/d94t5dS" target="_blank">
            <img src="/Discord-Logo-Blurple.png" style={{height: '20px', width: 'auto'}}alt="Discord" />
          </a>
          <button onClick={() => { handleNav("contact"); setIsOpen(false); }}>Contact</button>
        </nav>
      </div>
      
      <div className="content">


        {active === "about" && (
          <section id="about" className="sectionPanel">

            <img className="iconicCards" src={iconicCards} alt="Chandra Torch of Defiance Leovold Emissary of Trest Green Sun's Zenith Thoughtseize Recruiter of the Guard Entomb Monastery Mentor Brainstorm 
            Swords to Plowshares Brainstorm Force of Will Thalia Guardian of Thraben Delver of Secrets Cratherhoof Behemoth"></img>

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
            </p>
          </section>
        )}

        {active === "rules" && (
          <section id="rules" className="sectionPanel">
            <h2 className="sectionHeader">Rules</h2>
            <p className="sectionText">
              Prewar is played with the current Magic: The Gathering tournament rules. Prewar decks may consist of cards from all Magic card sets released prior to War of the Spark; plus the following cards: Sewers of Estark, 
              Windseeker Centaur, and Nalathni Dragon. This includes cards from expansions and special sets (like Portal, Commander 2011-2018, Conspiracy, etc.). It does not include any cards with a 
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
              The following is a collection of decks that were played in Legacy during the Prewar period, with example lists selected for strong finishes. It's impossible to recreate the full range of what was played then, but we hope these inspire.
            </p>
            <br></br>
            <p className="sectionText">
              To get an idea of the metagame at the time, we can use the Wayback Machine to see the data from <a href="https://web.archive.org/web/20190401023233/https://www.mtggoldfish.com/metagame/legacy#paper" target="_blank">MTGGoldfish on from April 1, 2019</a> and <a href="https://web.archive.org/web/20190413122147/http://www.mtgtop8.com/format?f=LE" target="_blank">MTGTop8 on from April 13, 2019</a>. 
              Both are testament to the metagame's health. To delve further, we recommend 
              searching <a href="https://www.mtggoldfish.com/tournament_searches/create?tournament_search[name]&tournament_search[format]=legacy&tournament_search[date_range]=07%2F06%2F2018%20-%2004%2F26%2F2019&commit=Search" target="_blank">MTGGoldfish</a>, <a href="https://mtgtop8.com/search?format=LE&date_start=06%2F07%2F2018&date_end=26%2F04%2F2019" target="_blank">MTGTop8</a>, 
              and <a href="https://www.tcdecks.net/results.php?tname=&src=all&nlow=&nhigh=&from=2018%2F07%2F06&to=2019%2F04%2F26&player=&aname=&dname=&format=Legacy+Archive&strict=on&main=&nomain=&side=&noside=" target="_blank">TC Decks</a> results 
              (these links autopopulate with the day the Deathrite Shaman ban became effective and the day before War of the Spark's prerelease and MTGO availability).
            </p>

            <br></br>

            <div className="decksGrid">
              <Deck imagePath={getDeckImage("dnt")} deckName="Death and Taxes" decklists={["https://moxfield.com/decks/jrEZ_2h620eYKupM4YI_rg", "https://moxfield.com/decks/BXI0V-iKkEyu04_2N49lKA"]}></Deck>
              <Deck imagePath={getDeckImage("grixisControl")} deckName="Grixis Control" decklists={["https://moxfield.com/decks/HiF7OOo3xUaHrd_L0VF7Eg", "https://moxfield.com/decks/Ay0MToblRkqmcJuuPeRANw"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="Izzet Delver" decklists={["https://moxfield.com/decks/5F4eNwY36UKtNP-CIgsP2w", "https://moxfield.com/decks/2-Bvf5_YPk-G2nwNiy3yww"]}></Deck>
              <Deck imagePath={getDeckImage("monoRedPrison")} deckName="Mono Red Prison" decklists={["https://moxfield.com/decks/RmUqgianCEGnpa8TQ3eYvA", "https://moxfield.com/decks/Z060mi04i0aO4kcLMmlBIA"]}></Deck>
              <Deck imagePath={getDeckImage("sneakAndShow")} deckName="Sneak and Show" decklists={["https://moxfield.com/decks/UElpuq8sGkK0DZ5QVEnfPw", "https://moxfield.com/decks/Kc26xZjut0yx-7miLaUF0w"]}></Deck>
              <Deck imagePath={getDeckImage("miracles")} deckName="Miracles" decklists={["https://moxfield.com/decks/_MRY-dTfBUiKrZTAfg22XQ", "https://moxfield.com/decks/xYfzueZOo0OE-QXDAsd2iA"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="Grixis Delver" decklists={["https://moxfield.com/decks/Rx-bfBdAKk6de25NJM03DA", "https://moxfield.com/decks/X6HopswYik-PW_N4U749aw"]}></Deck>
              <Deck imagePath={getDeckImage("golgariDepths")} deckName="Golgari Depths" decklists={["https://moxfield.com/decks/9lp5o1DnuUOINKFJxtvHdQ", "https://moxfield.com/decks/6evOSA3Udk20Wx_3iN19iA"]}></Deck>
              <Deck imagePath={getDeckImage("storm")} deckName="Storm" decklists={["https://moxfield.com/decks/bEoYrHWs60e-fRwekg9xOg", "https://moxfield.com/decks/uovrM4eM7Em1UWZqkjWdmg"]}></Deck>
              <Deck imagePath={getDeckImage("stoneblade")} deckName="Stoneblade" decklists={["https://moxfield.com/decks/U64ut-UMCEeRyMGG63zPZg", "https://moxfield.com/decks/8Q80iA_WfkqYPk5MczMXvA"]}></Deck>
              <Deck imagePath={getDeckImage("reanimator")} deckName="Reanimator" decklists={["https://moxfield.com/decks/xm2ZXADCw06mnqE-SeNPBw", "https://moxfield.com/decks/YxO3rdcNHk6mRf1WtM3Iig"]}></Deck>
              <Deck imagePath={getDeckImage("maverick")} deckName="Maverick" decklists={["https://moxfield.com/decks/8x9fYWBrF0-kIqTJhW-x_A", "https://moxfield.com/decks/1GRlqukRVEqCtNIcnIenyg"]}></Deck>
              <Deck imagePath={getDeckImage("lands")} deckName="Lands" decklists={["https://moxfield.com/decks/nuyg9jfnIkyL-sybdUEucg", "https://moxfield.com/decks/E4gqnibdO0mOiOn8aODJqg"]}></Deck>
              <Deck imagePath={getDeckImage("deathsShadow")} deckName="Death's Shadow" decklists={["https://moxfield.com/decks/F3AcbCt8hkKunuAyl_JHgA", "https://moxfield.com/decks/OgvB-98LikGk-IzeBwldFA"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="RUG Delver" decklists={["https://moxfield.com/decks/7CBdhuSXPk-onDAgcL99cg", "https://moxfield.com/decks/U3J4szNU0kOC5bkYPFZp_w"]}></Deck>
              <Deck imagePath={getDeckImage("delver")} deckName="BUG Delver" decklists={["https://moxfield.com/decks/hi8ljTeBeEabhrezif6uMw", "https://moxfield.com/decks/iyuleItVY0Gv9NeTTSc1ag"]}></Deck>
              <Deck imagePath={getDeckImage("4cLoam")} deckName="4C Loam" decklists={["https://moxfield.com/decks/2FLFn2aSGkK7R-5f6bwqiA", "https://moxfield.com/decks/-JW2xoK89ESk5yXL8H6OoA"]}></Deck>
              <Deck imagePath={getDeckImage("elves")} deckName="Elves" decklists={["https://moxfield.com/decks/u97Cv2qJqUe4_0C96dc4RQ", "https://moxfield.com/decks/C54tgufC00Sk5IJtjidrbA"]}></Deck>
              <Deck imagePath={getDeckImage("postEldrazi")} deckName="Post/Eldrazi" decklists={["https://moxfield.com/decks/ko0kp7B-GUGU5DAeY5KIkg", "https://moxfield.com/decks/EV99NDpfZ0GmKYi2DedH4Q"]}></Deck>
              <Deck imagePath={getDeckImage("titanPost")} deckName="Titan Post" decklists={["https://moxfield.com/decks/aU0tdptw0EyNcAQNoRWljA", "https://moxfield.com/decks/syp2fDXD0keSr7YxJKTepA"]}></Deck>
              <Deck imagePath={getDeckImage("dredge")} deckName="Dredge" decklists={["https://moxfield.com/decks/af_TNvnL5ke6jaEASrB4sA", "https://moxfield.com/decks/o4Y78fFDg0yvPPJOEmdUjA"]}></Deck>
              <Deck imagePath={getDeckImage("burn")} deckName="Burn" decklists={["https://moxfield.com/decks/1WlwMrbwGEWCc1wbdiyiKg", "https://moxfield.com/decks/c9zrt-e1U0GM90Wo8ZwcBg"]}></Deck>
              <Deck imagePath={getDeckImage("infect")} deckName="Infect" decklists={["https://moxfield.com/decks/wZn-lIzquEmvLhSpLr_xSw", "https://moxfield.com/decks/9N95WqXP7EenzvJrk7hJVg"]}></Deck>
              <Deck imagePath={getDeckImage("painter")} deckName="Painter" decklists={["https://moxfield.com/decks/QbCRdiMhX0KM_T00eDdWwg", "https://moxfield.com/decks/PmF7BDofyUWNwLmfTki7yQ"]}></Deck>
              <Deck imagePath={getDeckImage("enchantress")} deckName="Enchantress" decklists={["https://moxfield.com/decks/y-zK_6prAEGtqROEHNwyxQ", "https://moxfield.com/decks/Wf-btwbOVUWnWBZx6P9BHg"]}></Deck>
              <Deck imagePath={getDeckImage("bomberman")} deckName="Bomberman" decklists={["https://moxfield.com/decks/zfWvihKL9kiaBXiP9mFj1Q", "https://moxfield.com/decks/p5NpwAorm0C4vGNhKa8DVA"]}></Deck>
              <Deck imagePath={getDeckImage("leovold")} deckName="Czech Pile" decklists={["https://moxfield.com/decks/O3i7NDLanEO3P9lhpqPN9g", "https://moxfield.com/decks/ntxpHbUZQEiwAO4l6U9W_A"]}></Deck>
              <Deck imagePath={getDeckImage("phoenix")} deckName="Phoenix" decklists={["https://moxfield.com/decks/bn2xhcgPAEq57y585psHwA", "https://moxfield.com/decks/sOeW3hSyqk6mZB0n0XpADg"]}></Deck>
              <Deck imagePath={getDeckImage("foodChain")} deckName="Food Chain" decklists={["https://moxfield.com/decks/Psnawac7N06bQwsrs_0Jiw", "https://moxfield.com/decks/xVEWXmdP1EWZ9YwzgU8jvA"]}></Deck>
              <Deck imagePath={getDeckImage("tinFins")} deckName="Tin Fins" decklists={["https://moxfield.com/decks/viNs_l3_ZEu_00N-8bS9HA", "https://moxfield.com/decks/jCZOb8So4UaDCgoL0w4tCA"]}></Deck>
              <Deck imagePath={getDeckImage("leovold")} deckName="BUG Control" decklists={["https://moxfield.com/decks/IqGmr4GlqE2xlxySKBE4Pg", "https://moxfield.com/decks/kcwkF-OXUECUxUW6pEcU7A"]}></Deck>
              <Deck imagePath={getDeckImage("aluren")} deckName="Aluren" decklists={["https://moxfield.com/decks/tSweRjcMmUmgDSwNYA3Y_g", "https://moxfield.com/decks/xcfqHC0MfEmGt1CmvbK81A"]}></Deck>
              <Deck imagePath={getDeckImage("nicFit")} deckName="Nic Fit" decklists={["https://moxfield.com/decks/qx4nAWSuUEGpiw6gegFBdQ", "https://moxfield.com/decks/OEi6yr0uhkWXz0QbHHgG0w"]}></Deck>
              <Deck imagePath={getDeckImage("belcher")} deckName="Belcher" decklists={["https://moxfield.com/decks/N55fk_u9XkmNwpip88aHKw", "https://moxfield.com/decks/thXS8JFu90GiUp0a8z3kAw"]}></Deck>
              <Deck imagePath={getDeckImage("affinity")} deckName="Artifact Stompy" decklists={["https://moxfield.com/decks/Z0OErizWBUiWhtnTMVlHqg", "https://moxfield.com/decks/hT4RDt_Q8UmXswUxfFDL4w"]}></Deck>
              <Deck imagePath={getDeckImage("merfolk")} deckName="Merfolk" decklists={["https://moxfield.com/decks/kQ2kjg8dKU-JNAN9vsbwaQ", "https://moxfield.com/decks/G0wNa9w0tUS1Lb8Qo4aUKg"]}></Deck>
              <Deck imagePath={getDeckImage("goblins")} deckName="Goblins" decklists={["https://moxfield.com/decks/BR8_rjBOMka158vXLv-qZA", "https://moxfield.com/decks/jwonrbvmxk26-UcLZyEGVQ"]}></Deck>
              <Deck imagePath={getDeckImage("pox")} deckName="Pox" decklists={["https://moxfield.com/decks/T8HVmAfXfUiC7UKz2pk_vg", "https://moxfield.com/decks/qirIUVBnoEqOMwafAxVY0Q"]}></Deck>
              <Deck imagePath={getDeckImage("tezzerator")} deckName="Tezzerator" decklists={["https://moxfield.com/decks/yEDWOsCHAUm0_hn-3G492w", "https://moxfield.com/decks/3d7dkBpYYU-gpAVdkbCXNA"]}></Deck>
            </div>
          </section>
        )}

        {/* {active === "social" && (
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
              Want to play now? Join the <a href="https://discord.gg/d94t5dS" target="_blank">Discord</a> for games!
            </p>
          </section>
        )} */}

        {active == "contact" && (
          <section id="contact" className="sectionPanel">
            <h2 className="sectionHeader">Contact</h2>
            <br></br>

            <ContactPage></ContactPage>

          </section>
        )}
        
      </div>
    </main>
  );
}