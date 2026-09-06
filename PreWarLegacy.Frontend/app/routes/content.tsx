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
        A growing collection of period video, podcasts, and articles that bring the Prewar window (July 6, 2018
        &ndash; April 26, 2019) to life. Everything below is linked to its original host&mdash;nothing is rehosted
        here.
      </p>
      <p className="content-note">
        This page is a work in progress. Video coverage is populated first; podcast and website sections will
        fill in as we catalog them.
      </p>

      <div className="content-accordion">
        <details className="content-accordion-item" open>
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Full tournament coverage
              <span className="content-accordion-question-sub">Three complete Legacy events, round 1 to the trophy</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <div className="content-item">
              <h4 className="content-item-title">GP Richmond 2018</h4>
              <span className="content-item-meta">Aug 31, 2018 &middot; 843 players &middot; 26 videos &middot; 16h54m</span>
              <p>
                Rounds 1&ndash;15 plus the full Top 8, via the{" "}
                <a href="https://www.youtube.com/playlist?list=PLXvWVmmqyaqhV-5JKEZ2_ZyNrB8IPoYKX" target="_blank">
                  ggslive playlist
                </a>
                . The same event was also covered twice more:
              </p>
              <ul className="content-sublist">
                <li>
                  Wizards&rsquo; own Top 8 cut &ndash;{" "}
                  <a href="https://www.youtube.com/watch?v=LgNNWMk55RY" target="_blank">Finals</a>,{" "}
                  <a href="https://www.youtube.com/watch?v=gXy7DPjV0VI" target="_blank">Semifinals</a>,{" "}
                  <a href="https://www.youtube.com/watch?v=sVrO8VDhxMs" target="_blank">Quarterfinals</a>
                </li>
                <li>
                  Twitch day-streams &ndash;{" "}
                  <a href="https://www.twitch.tv/videos/304082290" target="_blank">Day 1</a>,{" "}
                  <a href="https://www.twitch.tv/videos/304517026" target="_blank">Day 2</a>
                </li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">SCG Open, Syracuse</h4>
              <span className="content-item-meta">Mar 2, 2019 &middot; 656 players &middot; 30 videos &middot; 13h15m</span>
              <p>
                Rounds 1&ndash;15, full Top 8, and the winner&rsquo;s interview, via the{" "}
                <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSPGG0zqh7i1FHKLHhYOa5xG" target="_blank">
                  SCG playlist
                </a>.
              </p>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">SCG Open, Baltimore</h4>
              <span className="content-item-meta">Sep 22, 2018 &middot; 439 players &middot; 27 videos &middot; 10h43m</span>
              <p>
                Rounds 1&ndash;15, full Top 8, and the winner&rsquo;s interview, via the{" "}
                <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSOO2QMld4AXNWOjozMKtuAx" target="_blank">
                  SCG playlist
                </a>.
              </p>
            </div>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Marathon coverage
              <span className="content-accordion-question-sub">Complete, but recorded in long, unedited blocks</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <div className="content-item">
              <h4 className="content-item-title">Eternal Weekend NA 2018</h4>
              <span className="content-item-meta">Nov 3, 2018 &middot; 622 players &middot; 2 videos &middot; 19h16m</span>
              <p>
                Recorded as two 9&frac12;-hour, unedited day-streams (the second also carries the Vintage Top 8), via{" "}
                <a href="https://www.youtube.com/@cardtitan" target="_blank">Card Titan&rsquo;s channel</a>.
              </p>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">The Last Sun 2018</h4>
              <span className="content-item-meta">Dec 24, 2018 &middot; 190 players &middot; 8 individually-titled Legacy videos, ~4h</span>
              <p>Eight clean, single-match Legacy videos:</p>
              <ul className="content-sublist">
                <li><a href="https://www.youtube.com/watch?v=oCCvi0YIrpM" target="_blank">Round 5</a> (19m)</li>
                <li><a href="https://www.youtube.com/watch?v=KG_HiDzaxms" target="_blank">Round 6</a> (49m)</li>
                <li><a href="https://www.youtube.com/watch?v=HrJe6gobGTY" target="_blank">Round 7</a> (31m)</li>
                <li><a href="https://www.youtube.com/watch?v=JWcq673J8SE" target="_blank">Round 8</a> (28m)</li>
                <li><a href="https://www.youtube.com/watch?v=ePCH2eK6AsY" target="_blank">Round 12</a> (38m)</li>
                <li><a href="https://www.youtube.com/watch?v=mpQCDsBttx4" target="_blank">Round 13</a> (48m)</li>
                <li><a href="https://www.youtube.com/watch?v=OhSfZoPKnBA" target="_blank">Round 14</a> (24m)</li>
                <li><a href="https://www.youtube.com/watch?v=548x-AFVojw" target="_blank">Finals</a> (31m)</li>
              </ul>
              <p>
                Also recorded as two mixed-format day-streams (Legacy is only part of each):{" "}
                <a href="https://www.youtube.com/watch?v=o1qyiWzxjg4" target="_blank">Day 1</a> (8h26m),{" "}
                <a href="https://www.youtube.com/watch?v=pTKt-HfbS8U" target="_blank">Day 2</a> (9h41m).
              </p>
            </div>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Short-form clips
              <span className="content-accordion-question-sub">Interviews, deck techs, and single matches</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <ul className="content-sublist">
              <li>
                <a href="https://www.youtube.com/watch?v=bg-YF6IXVeU" target="_blank">Ban-reaction interview</a> &ndash;
                published July 6, 2018, day one of the Prewar window (7m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=MT5PZHH57pY" target="_blank">PT25A: Top Legacy Decks</a> &ndash;
                Pro Tour metagame analysis (12m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=bOMpFPbWdR8" target="_blank">PT25A: BR Reanimator deck tech</a> (10m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=h0lGzJa4ZUM" target="_blank">COMBAT vol.59 &ndash; Death&rsquo;s Shadow</a>,
                Sochurek vs Igawa (23m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=kphkkT6q1EE" target="_blank">COMBAT vol.65 &ndash; English cut</a>,
                Calcano vs Sochurek (13m), also available as a{" "}
                <a href="https://www.youtube.com/watch?v=hq1HWH7c8A8" target="_blank">Japanese cut</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=Kp71wwHvGcw" target="_blank">COMBAT2 vol.5</a> &ndash; Pro Legacy battle (25m)
              </li>
            </ul>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Japanese championship matches
              <span className="content-accordion-question-sub">1v1 title defenses with no Western equivalent</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <ul className="content-sublist">
              <li>
                <a href="https://www.youtube.com/watch?v=DG1n_Z_aYE4" target="_blank">11th God of Legacy title match</a> &ndash;
                Aug 26, 2018 (41m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=nrI6NTcNuf0" target="_blank">12th God Challenger Qualifier</a> &ndash;
                Nov 24, 2018, top-cut segment of a 306-player event (1h37m)
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=0lwBXGTccxg" target="_blank">12th God of Legacy title match</a> &ndash;
                Feb 17, 2019 (32m)
              </li>
            </ul>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Archetype library
              <span className="content-accordion-question-sub">One video per deck, organized by strategy rather than event</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <p>
              14 videos (17h50m) on MTGO, one per archetype, via{" "}
              <a href="https://www.youtube.com/channel/UCFqzBmNzzMwPleucEnjoORA" target="_blank">BIG MAGIC LIVE</a>:
              Grixis Delver, Infect, Arena Rector, BR Reanimator, Salvager Combo, 4C Loam, UW Control, Humans &amp; Taxes,
              UB Tezzeret, Mono Red Prison, BG Depths, ANT, Zombardment, and UB Ninjas. Pairs well with the archetypes on
              the <a href="/decks">Decks page</a>.
            </p>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              Team events
              <span className="content-accordion-question-sub">Parked for now &ndash; only a fraction of each seat is Legacy</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <p>
              139 videos (81h49m) across eight Team Trios events. Player counts below are total seats, of which
              roughly one in three played Legacy:
            </p>
            <ul className="content-sublist">
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSOTTUaamK30UuObaRMabnaK" target="_blank">Worcester</a> &ndash; Jul 14, 2018 (270 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSPC3iOcOImAC49gZ1yuS87z" target="_blank">Philadelphia</a> &ndash; Jul 21, 2018 (741 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL3rP64NRtmbgaSbFtlWF1iEyB8MhIywBz" target="_blank">PT 25th Anniversary</a> &ndash; Aug 3, 2018 (495 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSM_eepCh-RUoTk_pBEFT565" target="_blank">Dallas</a> &ndash; Aug 18, 2018 (819 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNe9mWbS-sbx420PtsPSL3i" target="_blank">Columbus</a> &ndash; Oct 6, 2018 (271 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSPKf7BFITzkW_jcQt7-AhKn" target="_blank">Las Vegas</a> &ndash; Nov 17, 2018 (191 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNSv_ZF_PLrPaX07PBAzfFR" target="_blank">Baltimore</a> &ndash; Feb 2, 2019 (287 players)</li>
              <li><a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSPcBZRtxYjtc8klnDU_-O8O" target="_blank">Cincinnati</a> &ndash; Mar 24, 2019 (954 players)</li>
            </ul>
          </div>
        </details>

        <details className="content-accordion-item">
          <summary className="content-accordion-question">
            <span className="content-accordion-question-label">
              What's missing
              <span className="content-accordion-question-sub">Documented gaps, worth stating rather than hiding</span>
            </span>
            <span className="content-accordion-icon" aria-hidden="true"></span>
          </summary>
          <div className="content-accordion-answer">
            <ul className="content-sublist">
              <li>
                <strong>GP Shizuoka 2018</strong> (Nov 30, 2018, 1,429 players) &ndash; the largest event in the Prewar
                window. It was broadcast live on Niconico with named casters, but the timeshift expired and the
                footage is lost.
              </li>
              <li>
                <strong>GP Niagara Falls 2019</strong> (Apr 19, 2019, 957 players) &ndash; the window&rsquo;s last GP was
                never filmed.
              </li>
              <li><strong>SCG Classics</strong> (14 events, 71&ndash;209 players) &ndash; never streamed, in any format.</li>
              <li>
                <strong>MKM Series</strong> (5 events, 94&ndash;249 players) &ndash; Cardmarket&rsquo;s channel was dormant
                from 2017 to 2020, so coverage of European Legacy in this window is written-only.
              </li>
              <li><strong>Eternal Weekend Asia 2018</strong> (Aug 19, 2018, 626 players) &ndash; no video found on any reachable platform.</li>
            </ul>
          </div>
        </details>
      </div>

      <br></br>

      <h3 className="sectionText sectionSubheading">Podcasts</h3>
      <div className="content-placeholder">Coming soon.</div>

      <br></br>

      <h3 className="sectionText sectionSubheading">Websites</h3>
      <div className="content-placeholder">Coming soon.</div>
    </section>
  );
}
