import type { Route } from "./+types/decks";

import Deck from "../components/deck"

const deckImagesPath = import.meta.glob<string>('../images/DeckImages/*.jpg', {
  import: 'default',
  eager: true,
});

function getDeckImage(name : string){
  return deckImagesPath["../images/DeckImages/" + name + ".jpg"];
}

export function meta({}: Route.MetaArgs) {
  const title = "Decks – Prewar Magic";
  const description = "Examples of competitive decks played in Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/decks";
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

export default function Decks() {
  return (
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
  );
}
