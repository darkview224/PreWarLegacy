import { useState, useEffect } from "react";
import SearchWithButton from "./searchBox";

interface Card{
    id: string;
    name: string;
    image_uris?: {
        normal: string;
    }
    card_faces?: {
        image_uris?:{
            normal: string;
        };
    }[];
}

const bannedCards = [
  "Ancestral Recall",
  "Balance",
  "Bazaar of Baghdad",
  "Black Lotus",
  "Channel",
  "Chaos Orb",
  "Deathrite Shaman",
  "Demonic Consultation",
  "Demonic Tutor",
  "Dig Through Time",
  "Earthcraft",
  "Falling Star",
  "Fastbond",
  "Flash",
  "Frantic Search",
  "Gitaxian Probe",
  "Goblin Recruiter",
  "Gush",
  "Hermit Druid",
  "Imperial Seal",
  "Library of Alexandria",
  "Mana Crypt",
  "Mana Drain",
  "Mana Vault",
  "Memory Jar",
  "Mental Misstep",
  "Mind Twist",
  "Mind's Desire",
  "Mishra's Workshop",
  "Mox Emerald",
  "Mox Jet",
  "Mox Pearl",
  "Mox Ruby",
  "Mox Sapphire",
  "Mystical Tutor",
  "Necropotence",
  "Oath of Druids",
  "Sensei's Divining Top",
  "Shahrazad",
  "Skullclamp",
  "Sol Ring",
  "Strip Mine",
  "Survival of the Fittest",
  "Time Vault",
  "Time Walk",
  "Timetwister",
  "Tinker",
  "Tolarian Academy",
  "Treasure Cruise",
  "Vampiric Tutor",
  "Wheel of Fortune",
  "Windfall",
  "Yawgmoth's Bargain",
  "Yawgmoth's Will",
];

export default function SearchCards() {
  const [cards, setCards] = useState<Card[]>([]);

  // useEffect(() => {
  //   handleSearch("");
  // }, []);

  const handleSearch = (query: string) => {
    fetch(`https://api.scryfall.com/cards/search?q=${query}+format:legacy+date<=2019-05-02`)
      .then(res => res.json())
      .then(data => setCards(
        data.data.filter((card: Card) => !bannedCards.includes(card.name))
      ));
  };

  return (
    <div>
      <SearchWithButton placeholder="Search for cards" search={handleSearch}></SearchWithButton>
      <div className="cardsGrid">
        {cards.map(c => (
          <div key={c.id}>
              <img src={c.image_uris?.normal ?? c.card_faces?.[0]?.image_uris?.normal}></img>
          </div>
        ))}
      </div>
    </div>
  );
}