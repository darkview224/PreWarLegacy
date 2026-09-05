import type { Route } from "./+types/faq";

import "../Faq.css";

type Faq = {
  question: string;
  plainAnswer: string;
  answer: React.ReactNode;
};

const faqs: Faq[] = [
  {
    question: "What is Prewar?",
    plainAnswer:
      "Prewar captures Legacy much as it was prior to the release of War of the Spark (WAR). This was a format " +
      "where fair decks accumulated incremental advantage over longer, interactive games; and there were " +
      "dozens of viable decks, most of which had long periods of viability.",
    answer: (
      <p>
        Prewar captures Legacy much as it was prior to the release of <em>War of the Spark</em> (WAR). This was a format
        where fair decks accumulated incremental advantage over longer, interactive games; and there were
        dozens of viable decks, most of which had long periods of viability.
      </p>
    ),
  },
  {
    question: "Why stop at War of the Spark, specifically?",
    plainAnswer:
      "War of the Spark brought a different design philosophy. After, Magic saw significant power and " +
      "complexity creep. Legacy experienced high rates of bans and deck obsolescence, and the format " +
      "accelerated—games were decided earlier, replacing the intricate back-and-forth of before.",
    answer: (
      <p>
        <em>War of the Spark</em> brought a <a href="https://magic.wizards.com/en/news/card-preview/fire-it-2019-06-21" target="_blank">different design philosophy</a>. After, Magic saw significant power and
        complexity creep. Legacy experienced high rates of bans and deck obsolescence, and the format
        accelerated—games were decided earlier, replacing the intricate back-and-forth of before.
      </p>
    ),
  },
  {
    question: "Are there other names for Prewar?",
    plainAnswer: "Prewar has been called Prewar Legacy, PreWAR, Pre-WAR Legacy, or Pre-FIRE Legacy in other contexts.",
    answer: <p>Prewar has been called Prewar Legacy, PreWAR, Pre-WAR Legacy, or Pre-FIRE Legacy in other contexts.</p>,
  },
  {
    question: "Why play Prewar?",
    plainAnswer:
      "If you like interesting and meaningful decisions in your games, you'll love Prewar. " +
      "If you like to innovate new spins on decks and brew anew, you'll love Prewar. " +
      "If you like playing your deck for years without it becoming obsolete, you'll love Prewar. " +
      "If you like to see a wide variety of strategies, you'll love Prewar. " +
      "If you like games to be full of possibilities, and sometimes dramatic surprises; you'll love Prewar.",
    answer: (
      <ul className="list-disc pl-6">
        <li>If you like interesting and meaningful decisions in your games, you&rsquo;ll love Prewar.</li>
        <li>If you like to innovate new spins on decks and brew anew, you&rsquo;ll love Prewar.</li>
        <li>If you like playing your deck for years without it becoming obsolete, you&rsquo;ll love Prewar.</li>
        <li>If you like to see a wide variety of strategies, you&rsquo;ll love Prewar.</li>
        <li>
          If you like games to be full of possibilities, and sometimes dramatic surprises; you&rsquo;ll
          love Prewar.
        </li>
      </ul>
    ),
  },
  {
    question: "What was the Prewar metagame like?",
    plainAnswer:
      "Using the Wayback Machine to look at period MTGGoldfish and MTGTop8 data, we see the historical " +
      "metagame had five major categories of decks: blue aggro decks (e.g.: Delver, Death's Shadow); blue " +
      "control decks (e.g.: UWx Miracles, UWx Stoneblade, Grixis, Czech Pile); Chalice of the Void decks " +
      "(e.g.: Eldrazi, Moon Stompy, Affinity); fair nonblue decks (e.g.: Death and Taxes, Maverick, Goblins, " +
      "Deadguy Ale); and combo-focused decks (e.g.: Reanimator, Storm, Turbo-Depths). These categories " +
      "cover most of the format, and a lot of variety exists within each. Their relative portions waxed and " +
      "waned, but each was a force to be reckoned with.",
    answer: (
      <>
        <p>
          Using the Wayback Machine to look at period <a href="https://web.archive.org/web/20190401023233/https://www.mtggoldfish.com/metagame/legacy#paper" target="_blank">MTGGoldfish</a> and <a href="https://web.archive.org/web/20190413122147/http://www.mtgtop8.com/format?f=LE" target="_blank">MTGTop8</a> data, we see the historical metagame had five major categories of decks:
        </p>
        <ul className="list-disc pl-6">
          <li>Blue aggro decks (e.g.: Delver, Death&rsquo;s Shadow)</li>
          <li>Blue control decks (e.g.: UWx Miracles, UWx Stoneblade, Grixis, Czech Pile)</li>
          <li>Chalice of the Void decks (e.g.: Eldrazi, Moon Stompy, Affinity)</li>
          <li>Fair nonblue decks (e.g.: Death and Taxes, Maverick, Goblins, Deadguy Ale)</li>
          <li>Combo-focused decks (e.g.: Reanimator, Storm, Turbo-Depths)</li>
        </ul>
        <p>
          These categories cover most of the format, and a lot of variety exists within each. Their relative
          portions waxed and waned, but each was a force to be reckoned with.
        </p>
      </>
    ),
  },
  {
    question: "Will the Prewar card pool change?",
    plainAnswer:
      "Possibly, though there are no current plans to do so. The ban list may change, but no new sets " +
      "will be introduced to the format. The format of this historical era was extremely well-balanced, " +
      "and nothing since has indicated a need for any change in the ban list. That said, if the data " +
      "starts to show otherwise, changes can be made–including unbans.",
    answer: (
      <p>
        Possibly, though there are no current plans to do so. The ban list may change, but no new sets
        will be introduced to the format. The format of this historical era was extremely well-balanced,
        and nothing since has indicated a need for any change in the ban list. That said, if the data
        starts to show otherwise, changes can be made–including unbans.
      </p>
    ),
  },
  {
    question: "Won't the metagame get stale in a closed format?",
    plainAnswer:
      "Formats like Premodern have shown that closed card pools can remain dynamic for many years. " +
      "Prewar's card pool is thrice Premodern's size. History is also on our side: Legacy's evolution " +
      "was often fed by rediscovering new synergies and applications of old cards, and it remained " +
      "vibrant. In the Prewar period specifically, innovation soared.",
    answer: (
      <p>
        Formats like Premodern have shown that closed card pools can remain dynamic for many years.
        Prewar&rsquo;s card pool is thrice Premodern&rsquo;s size. History is also on our side:
        Legacy&rsquo;s evolution was often fed by rediscovering new synergies and applications of old
        cards, and it remained vibrant. In the Prewar period specifically, innovation soared.
      </p>
    ),
  },
  {
    question: "Where can I play Prewar?",
    plainAnswer:
      "Prewar can be played anywhere you can play Magic with the full card pool available. This obviously " +
      "includes the physical tabletop card-game and Magic: the Gathering Online (MTGO); but also includes " +
      "several unofficial play test clients. It does not include Arena. The official Discord server hosts " +
      "MTGO leagues run with the support of Gatherling, and will be glad to support webcam and other " +
      "leagues with sufficient interest.",
    answer: (
      <p>
        Prewar can be played anywhere you can play Magic with the full card pool available. This obviously
        includes the physical tabletop card-game and Magic: the Gathering Online (MTGO); but also includes
        several unofficial play test clients. It does not include Arena. The official Discord server hosts
        MTGO leagues run with the support of Gatherling, and will be glad to support webcam and other
        leagues with sufficient interest.
      </p>
    ),
  },
  {
    question: "Can I run my own Prewar events?",
    plainAnswer:
      "We encourage players to run their own events and to build their own communities. Please use " +
      "the contact form or join the Discord, and we will be glad to support such developments and spread " +
      "the word.",
    answer: (
      <p>
        We encourage players to run their own events and to build their own communities. Please use
        the contact form or join the Discord, and we will be glad to support such developments and spread
        the word.
      </p>
    ),
  },
  {
    question: "Is there an official position on printings and playtest cards in Prewar?",
    plainAnswer:
      "We encourage all players to support the game, and the local spaces in which they play. We also " +
      "understand accessibility is an issue in a format featuring so many Reserved List cards. We " +
      "encourage communities to be as accepting as possible. That said, the organizer always has final " +
      "discretion on what cards are playable at an event.",
    answer: (
      <p>
        We encourage all players to support the game, and the local spaces in which they play. We also
        understand accessibility is an issue in a format featuring so many Reserved List cards. We
        encourage communities to be as accepting as possible. That said, the organizer always has final
        discretion on what cards are playable at an event.
      </p>
    ),
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.plainAnswer,
    },
  })),
};

export function meta({}: Route.MetaArgs) {
  const title = "FAQ – Prewar Magic";
  const description = "Frequently asked questions about Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/faq";
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
      { tagName: "link", rel: "canonical", href: url },
  ];
}

export default function Faq() {
  return (
    <section id="faq" className="sectionPanel">
      <h2 className="sectionHeader">FAQ</h2>
      <br></br>

      <div className="faq-accordion">
        {faqs.map((faq) => (
          <details className="faq-accordion-item" key={faq.question}>
            <summary className="faq-accordion-question">
              {faq.question}
              <span className="faq-accordion-icon" aria-hidden="true"></span>
            </summary>
            <div className="faq-accordion-answer">{faq.answer}</div>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </section>
  );
}
