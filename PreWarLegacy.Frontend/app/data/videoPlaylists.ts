export type VideoPlaylist = {
  id: string;
  label: string;
  description: string;
  youtubePlaylistId: string;
};

export const videoPlaylists: VideoPlaylist[] = [
  {
    id: "rules",
    label: "Rules & Format Primers",
    description: "Introductions to Prewar and how it differs from modern Legacy.",
    youtubePlaylistId: "REPLACE_WITH_PLAYLIST_ID",
  },
  {
    id: "deck-tech",
    label: "Deck Tech",
    description: "Deck breakdowns and strategy walkthroughs from the Prewar community.",
    youtubePlaylistId: "REPLACE_WITH_PLAYLIST_ID",
  },
  {
    id: "matches",
    label: "Match Footage",
    description: "Recorded matches and league games.",
    youtubePlaylistId: "REPLACE_WITH_PLAYLIST_ID",
  },
];
