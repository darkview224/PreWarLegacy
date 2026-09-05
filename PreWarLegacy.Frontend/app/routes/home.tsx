import { Link } from "react-router";
import type { Route } from "./+types/home";
import iconicCards from "/iconicCards_1200.png"

export function meta({}: Route.MetaArgs) {
  const title = "Prewar Magic";
  const description = "Prewar is a community-driven Legacy format frozen at the card pool just before War of the Spark and FIRE design changed the game. Legacy, the way we used to play.";
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
        Prewar is a community-driven offshoot of Legacy, capturing what many players feel was the high-water mark for Magic: the Gathering. It's everything we used to love about Magic: dozens of viable deck choices,
        games that could go for 2 turns or 20 and stay engaging the whole way, and rewarding for both skill and creativity. It's the way we used to play.
      </p>
      <br></br>
      <p className="sectionText">
        The card pool is closed — frozen just before <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">War of the Spark and FIRE design</a> reshaped Magic. Balance is shielded from
        accelerating release schedules and power outliers. Aggro, control, and combo are all viable, and each comes in <Link to="/decks">many forms</Link>. The metagame ebbs and flows in a dynamic equilibrium, with no deck
        remaining ascendant long. With over <Link to="/cards">18,000 cards</Link>, there's still tremendous space to brew and new synergies to discover.
      </p>
      <br></br>
      <p className="sectionText">
        Interested? Then join the Prewar community on <a href="https://discord.gg/d94t5dS" target="_blank">Discord</a> and enjoy the best the game has to offer!
      </p>
    </section>
  );
}
