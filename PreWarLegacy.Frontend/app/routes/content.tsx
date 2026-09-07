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
              <h4 className="content-item-title">Beijing Orlov Legacy</h4>
              <span className="content-item-meta">Dec 15, 2018 &middot; 152 players &middot; 9h48m</span>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLhAJZyLBTDL6-w8VRt-kPGtBstw4t7Qwo" target="_blank">
                    Playlist (Rounds 1&ndash;11 + Top 4)
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

            <div className="content-item">
              <h4 className="content-item-title">Legacy Premier League &ndash; Season 3</h4>
              <span className="content-item-meta">Jul 15 &ndash; Oct 4, 2018 &middot; 16 players &middot; 38h4m</span>
              <p>Not a traditional single-event tournament &ndash; a season-long league of 16 top Legacy players, run as group stage into a double-elimination bracket, hosted and broadcast by Julian Knab.</p>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLhAJZyLBTDL4sJLQH208KVF0JckdTtyHo" target="_blank">
                    Playlist (Group Stage through Grand Finals)
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
                <li>
                  <a href="https://www.youtube.com/@ThrabenUniversity" target="_blank">YouTube Channel</a>: Prewar
                  period videos{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=3GlniwqOoe8,5KXECCVC6Xc,DWHQFskQ-BE,0Nmq7gzMHpM,Tw58k9ErpMI,xC3NSGdiltc,H_-aWkCRIcQ,bOioNRgZzNc,9Kh_FlslQ-I,weM2m9PWyek,lDNdpIIYOIE,cFYammUkfTM,3tDyU8AYapI,2mNbFvtebL4,sdOI1x99qQQ,Tqg2g_RTqJI,gl4-ofAOYnc,vTQCre0AReY,wp1E_Zx2QQM,eGMmJv3Kdng,T8xnfHuJcz8,669xykL0Yes,gdFme_VuCIA,qK_-o7C91VA,Peue8eFpnK4,DwSsGIwXfMY,txdMA6awaCw,2TZ9ZeOTQYM,cfsyVHTlgUc,4w7TelWRhL0,dlKgIfr7pTo,vB15OgQNDNQ,TVh9kJfP1yg,D84kWRV1UyE,HGOUPjq2xdg,5FViIj2-tTU,1zOG4M9Oxi0,8d2slEFVCzY,Dk8GVUIX4v4,mJNo3jofcFQ,w6Y35ef-9pg,qOpd0OPsaFQ,8mvmJkS-Sx0,Qn_aZ41krYc,5yliyiNqUj0,cwGxZ7gIUj4,ynGjBEtmRaI,1YeDKRRUxVY,4t8VdeuVZI8,u2lCFBpWfuc" target="_blank">
                    [1&ndash;50]
                  </a>;{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=i25QSbGvvzc,yymOuHqPn9Q,L-GF3XkFi2I,wsV72XuH8-0,ASpZpWGxGWQ,vMtN3iwwCKc,851vl0DCi-M,FxjjHX2EHcE,oM0TnFwA-3s,b8Y9Hwipv54,0ebIuzp1DMA,oxIcJnjD0V0,MJKx-7A-1Gs,DEQI9jFAJuM,j0ZuJCq77b4,B_kKaTHRw40,L1TJKryf-FM,t3u1sPUZabo,V1zMS5gl2CA,FuL5Nzrau1E,5NVOioUHnnA,vKk9L8pljaU,wDYQMJ1L7Qg,ZIUykQ68LQo,A95HfGKF-4Q,BcxgLCcgEkw,gC9cJykFeqk,a2_IoIxfMMY,WNlio1g0dSE,KU5Mkl9hGc4,HQrvnqpL8jc,NowNmM3lwuk,ftm7aF0YUVs,Ox1q6699fm0,sBbBGZkrQDI,Ulq7HhUgMlo,RT-5tEUt2So,50aJqjus6Hk,CtpjA0FPxGs,thAQ_PevG04,HtiwSTTOZHY,eHnHbCvlblc,kJTvFVtHGmk,M7plzTpmfN4,8UqKntsRBgw,rfxTrv4CYSk,-lPgrlK0cLs,mBQhK-69Qw8,CiCAQIsphoE,yM0RGViUbY4" target="_blank">
                    [51&ndash;100]
                  </a>;{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=PG_luPA1gYc,WtGFgRpwuSw,E7lOjRclS9E,gSr3iTH4RZ4,rnaTwEudi2I,ySzzUGzSUFM,bVl9YXtII08,p6H5OGqh_lM,I-2HtbXmUKE,IHUbxD_lFYc,NUff8bvF3OU,d5Zmnvq5oqw,bGmn4-KHP3w,SoCsFGYTVI0,TSFiMDKUrY0,H8kZw4L6s9c,JMLawxYCALo,qvmnCrCoJ2Y,uPa8cFhzqDU,-MEnRsAdfww,_Ay_tC-X3hs,fIVvWlYxeVM,qeIq-X2qI_M,zKwiI5tHHgo,epNrpxiK7JQ,5OkuV5-kdmg" target="_blank">
                    [101&ndash;126]
                  </a>
                </li>
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
                <li>
                  <a href="https://www.youtube.com/@TheEPICStorm" target="_blank">YouTube Channel</a>: Prewar
                  period videos{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=eopRr_ew8Vo,uQK-Kk18Kpg,RDvunMlKmec,RKUxRfQ7kMk,pLy7QLuaT4U,Bu5KO05seP0,NWwO_GO94Dk,awQxhu0xW8k,VP4jqjBhrEc,KgFXyC6OwA8,Q-K0SHlxhu4,fy4Be6UJMig,D8-yj0TAQ7A,W0RqjF_aqC8,mW-X4uyFZ6g,2Y4_5TeqZJU,wsuxcQO5vOQ,63I5H-5P_YE,ipcuYZ8Z4rE,tir8XlqRMRE,K27yUODJnzk,669m290Gyis,SPbPkMLhXoo,pbAsFzD1R4I,HK-7Wa3uQEw,mtlDHk5Mo7M,wi6mOMTzDYE,Im24wic4vyM,i17qXBNualI,3PUfBYlCaIk,OmUJWZLue9Y,c1bEPaIGoS0,eHUfcPu_Vbc,VZoFfGjozf4,vGB26pUfaSc,CvZtay7k9eo,GV96iICIHQw,aOfc-LD5gBM,NDJ8fi0W-iU,OuC5XMBiUkU,uYtqomWAIXA,HKPDTKuyWQQ,xj2WqPstsM4,62pbYNZeKSE,EPHGr9ZRY7Q,JFqVzS_mAaA,hLv0xsVreVo,kd35NTYvILI,kRkexMqexQo,4cHPz937Nww" target="_blank">
                    [1&ndash;50]
                  </a>;{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=XUakAGLpPvk,FS_tACY1mN4,hp133DR1cEY,7GDDgSTIPJ8,i5nqh3GHQj4,s0EAK5g9-fY,7VtgTmKT-ms,Yybddmg4e0Q,4Akqwl3JJfU,rqpE8nvaHSQ,-KwXdD9_uD4,dUbIcOK4aBk,XgztoFbtPVU,VCgj072raKw,ehdZsef6OPk,69t-waDVIXM,ibrHabHDlNs,zRIwQzaSAVc,wY8Up1ISCmk,99030DZRXJE,s620pvx6mFc,P8vaOf52OCg,yDagoVJRGBg,OwIxMmE0j5Y,mlKTjmIbUlg,kIqflY--j0s,ApRI1J1ee9M,fBFSkXOYQB8,A2FDTIfVEAQ,UVehIuYosfg,ek0chcbdVeg,AvPrp1KhwoY,vKOcOwadYDg,pvEj0U1LQm4,IkcRqNspi2I,UuBc6EhH3Jc,m0T-XYDNAek,bo8BbIiw6c8,1nZyO6Cfyyo,Os4ecY0lmn0,6Af2pbU5OzU,EM5nwZ4FIPs,1xd0bIlrTNE,NjbrAhsH5CM,pc6MiDIzsWI,2Wmyc4bDTHw,fSJvPIg8gAU,_uIRg5cMPro,XRbQYri07OI,CzqUXfoEcxM" target="_blank">
                    [51&ndash;100]
                  </a>;{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=AmSHlkwnnCI,WTUAho6Cjyw,BGD18PWZoq0,SMENFe5fiE8,gKPAn11K5lA,eyW7J5FsFjE,lykjwOabNMc,aOSt0lLOr5A,JQOWuxt2vMc,j6fISkP907k" target="_blank">
                    [101&ndash;110]
                  </a>
                </li>
              </ul>
            </div>

            <div className="content-item">
              <h4 className="content-item-title">Julian Knab (it&rsquo;s Julian)</h4>
              <span className="content-item-meta">Channel active since 2009</span>
              <p>
                The Everyday Eternal host&rsquo;s personal channel &ndash; Legacy Challenge and league footage, mostly
                piloting Elves, plus brews and commentary. Excludes his Legacy Premier League and Beijing Orlov Legacy
                coverage, both listed separately under Tournament coverage.
              </p>
              <ul className="content-sublist">
                <li>
                  <a href="https://www.youtube.com/@itsJulian23" target="_blank">YouTube Channel</a>: Prewar
                  period videos{" "}
                  <a href="https://www.youtube.com/watch_videos?video_ids=kGPyePkcBsA,mYxm1z4cCC0,9SF4MDh5HNE,C98jJwt9SW4,GEJixEkRyIw,191rDL80-Zw,D4D4iXWp0QQ,ffcWFX5_P6o,0oV1FiaADRs,CVL6kbmqvzo,rfWtg_5afW8,IMWzuLHX6kY,JIYq3Ch9WZM,u_6KE_8FNZE,5kvIsfX7mBw,LSX7WlySx4A,d_sohGB9BfQ,B5dTnHVYTD4,J0lDPUTmq9s,nKWxKtRATgo,c0L3V8kZUNE,E66P2izNkMI,z5JWEhMnSwM,IMU5gq_f40k,FEG7MEi0UDc,JzP1qz8LlGg,69k1QMWaRZU,Lvmf5y3xKS0,SxElcNs4Qg8,JRzWGHSPfnA,aoBAhWMU6nc,AUyXx40qswM,T2ouTAtoj3U,XqmxPdiHs5o,SBq8z5qOj0s,gfG5P1C6IXo,PJKrnxTlTRQ,a5eeYEs8RAY,3La2d_QEFCM,aZD2Tdi3NV8,xAUuGPJN1Bo,gea7MuBh7Yk,OZlw6XJN0-A,t2J1N0njCwM,l4esihG87nA,FXn229TPfyA,jjVqxkKnTUI,SH1dtkeJgKQ,roRJrkUgP5I" target="_blank">
                    [1&ndash;49]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
