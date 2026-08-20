import type { Route } from "./+types/home";
import iconicCards from "/iconicCards_1200.png"

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

export default function Home() {
  return (
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
  );
}
