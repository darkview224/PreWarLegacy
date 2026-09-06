import type { Route } from "./+types/content";

import "../Content.css";

export function meta({}: Route.MetaArgs) {
  const title = "Content – Prewar Magic";
  const description = "Video, podcast, and website coverage of Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/content";
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

export default function Content() {
  return (
    <section id="content" className="sectionPanel">
      <h2 className="sectionHeader">
        Content
        <span className="content-draft-badge">Draft</span>
      </h2>
      <p className="sectionText">
        A growing collection of period video, podcasts, and articles that bring the Prewar format to life.
      </p>

      <div className="content-accordion">
        <details className="content-accordion-item" open>
          <summary className="content-accordion-question">
            Tournament coverage
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <div className="content-item">
              <h4 className="content-item-title">SCG Open, Syracuse</h4>
              <span className="content-item-meta">Mar 2, 2019 &middot; 656 players &middot; 13h15m</span>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSPGG0zqh7i1FHKLHhYOa5xG" target="_blank">
                    Playlist (Rounds 1&ndash;15 + Top 8)
                  </a>
                </li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">12th God Challenger Qualifier</h4>
              <span className="content-item-meta">Nov 24, 2018 &middot; 306 players &middot; 1h37m</span>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/watch?v=nrI6NTcNuf0" target="_blank">
                    Playlist (Top 8)
                  </a>
                </li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">Eternal Weekend NA 2018</h4>
              <span className="content-item-meta">Nov 3, 2018 &middot; 622 players &middot; 19h16m</span>
              <ul className="content-sublist">
                <li><a href="https://www.youtube.com/watch?v=VVKacbvHcFE" target="_blank">Day 1 (Rounds 1&ndash;9)</a></li>
                <li><a href="https://www.youtube.com/watch?v=L07khBOqvok" target="_blank">Day 2 (Rounds 10&ndash;11 + Top 8)</a></li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">SCG Open, Baltimore</h4>
              <span className="content-item-meta">Sep 22, 2018 &middot; 439 players &middot; 10h43m</span>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSOO2QMld4AXNWOjozMKtuAx" target="_blank">
                    Playlist (Rounds 1&ndash;15 + Top 8)
                  </a>
                </li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">GP Richmond 2018</h4>
              <span className="content-item-meta">Aug 31, 2018 &middot; 843 players &middot; 16h54m</span>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLXvWVmmqyaqhV-5JKEZ2_ZyNrB8IPoYKX" target="_blank">
                    Playlist (Rounds 1&ndash;15 + Top 8)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            Podcasts
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <p className="content-intro">
              The Prewar period saw an explosion in Legacy-focused podcasting. Each of the following podcasts was
              content worth listening to during the historic Prewar period (6-July-2018 and 26-April-2019).
            </p>

            <div className="content-item">
              <h4 className="content-item-title">
                <a href="https://www.hipstersofthecoast.com/leaving-a-legacy/" target="_blank">Leaving a Legacy</a>
              </h4>
              <span className="content-item-meta">Active throughout the Prewar window</span>
              <p>Pat Euglow and Jerry Mee&rsquo;s weekly Hipsters of the Coast show &ndash; a definitive pillar of the community during the entire Prewar period and beyond.</p>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">
                <a href="https://everyday-eternal.com/" target="_blank">Everyday Eternal</a>
              </h4>
              <span className="content-item-meta">Active throughout the Prewar window</span>
              <p>Magic&rsquo;s oldest Legacy podcast, then hosted by Julian Knab, Bob Huang, and Matt Pavlic: event results and metagame breakdowns from format veterans.</p>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">
                <a href="https://eternaldurdles.com/" target="_blank">Eternal Durdles</a>
              </h4>
              <span className="content-item-meta">Active throughout the Prewar window</span>
              <p>Running weekly since 2016 and still going, then hosted by Zac Clark, Nathan Golia, and Phil Blechman &ndash; one of the format&rsquo;s longest-standing shows, with a back catalog stretching well beyond the Prewar window on either side.</p>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">
                <a href="https://podcasts.apple.com/us/podcast/the-dead-format-podcast/id1408349410" target="_blank">The Dead Format Podcast</a>
              </h4>
              <span className="content-item-meta">Jul 5, 2018 &ndash; Apr 26, 2019 (launched the week of the ban)</span>
              <p>Thomas Smiley and Ian McKeown&rsquo;s Legacy-focused show, launched just as the Prewar window opened.</p>
            </div>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            Other websites
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <div className="content-item">
              <h4 className="content-item-title">Thraben University</h4>
              <span className="content-item-meta">Site active since 2016</span>
              <p>
                Phil Gallagher&rsquo;s (ThrabenU) Death and Taxes resource &ndash; articles, matchup guides, and reference
                pages for the deck, maintained continuously through the Prewar window and since. His YouTube channel
                carries extensive D&amp;T streaming and commentary from the period, alongside content before and after it.
              </p>
              <ul className="content-sublist">
                <li><a href="https://www.thrabenuniversity.com/" target="_blank">Website</a></li>
                <li><a href="https://www.youtube.com/@ThrabenUniversity" target="_blank">YouTube</a></li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">The EPIC Storm</h4>
              <span className="content-item-meta">Site active since 2015</span>
              <p>
                Bryant Cook&rsquo;s hub for Legacy Storm combo &ndash; strategy articles, matchup data, and a revolving
                cast of contributors, maintained continuously through the Prewar window and since. His YouTube channel
                carries extensive Storm gameplay and commentary from the period, alongside content before and after it.
              </p>
              <ul className="content-sublist">
                <li><a href="https://www.theepicstorm.com/" target="_blank">Website</a></li>
                <li><a href="https://www.youtube.com/@TheEPICStorm" target="_blank">YouTube</a></li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
