export type VideoEntry = {
  id: string;
  label: string;
  eventDate: string;
  description: string;
} & (
  | {
      kind: "playlist";
      youtubePlaylistId: string;
    }
  | {
      kind: "videos";
      videos: { label: string; youtubeId: string; runtime: string }[];
    }
  | {
      kind: "channel";
      channelUrl: string;
    }
);

export const videoPlaylists: VideoEntry[] = [
  {
    id: "gp-richmond-2018",
    label: "GP Richmond 2018",
    eventDate: "2018-08-31",
    description: "843-player field. Rounds 1–15 plus full Top 8, 26 videos, ~16h54m total.",
    kind: "playlist",
    youtubePlaylistId: "PLXvWVmmqyaqhV-5JKEZ2_ZyNrB8IPoYKX",
  },
  {
    id: "scg-open-syracuse-2019",
    label: "SCG Open, Syracuse",
    eventDate: "2019-03-02",
    description: "656-player field. Rounds 1–15, full Top 8, and winner's interview. 30 videos, ~13h15m total.",
    kind: "playlist",
    youtubePlaylistId: "PL5d1KNNFArSPGG0zqh7i1FHKLHhYOa5xG",
  },
  {
    id: "scg-open-baltimore-2018",
    label: "SCG Open, Baltimore",
    eventDate: "2018-09-22",
    description: "439-player field. Rounds 1–15, full Top 8, and winner's interview. 27 videos, ~10h43m total.",
    kind: "playlist",
    youtubePlaylistId: "PL5d1KNNFArSOO2QMld4AXNWOjozMKtuAx",
  },
  {
    id: "eternal-weekend-na-2018",
    label: "Eternal Weekend NA 2018",
    eventDate: "2018-11-03",
    description:
      "622-player field, from Card Titan's channel. Recorded as two ~9½-hour day streams rather than " +
      "per-round videos — the second stream also carries the Vintage Top 8. We don't yet have the two " +
      "specific video links to embed directly, so this points to the channel until we do.",
    kind: "channel",
    channelUrl: "https://www.youtube.com/@cardtitan",
  },
];
