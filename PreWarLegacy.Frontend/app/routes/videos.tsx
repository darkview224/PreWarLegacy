import { useState } from "react";
import type { Route } from "./+types/videos";

import "../Videos.css";
import { videoPlaylists } from "../data/videoPlaylists";

export function meta({}: Route.MetaArgs) {
  const title = "Videos – Prewar Magic";
  const description = "Watch Prewar rules primers, deck tech, and match footage curated from the community.";
  const url = "https://prewarmagic.com/videos";
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

export default function Videos() {
  const [activeId, setActiveId] = useState(videoPlaylists[0]?.id);
  const active = videoPlaylists.find((playlist) => playlist.id === activeId) ?? videoPlaylists[0];

  return (
    <section id="videos" className="sectionPanel">
      <h2 className="sectionHeader">Videos</h2>
      <br></br>

      <div className="video-tabs" role="tablist" aria-label="Video playlists">
        {videoPlaylists.map((playlist) => (
          <button
            key={playlist.id}
            type="button"
            role="tab"
            aria-selected={playlist.id === active?.id}
            className="video-tab"
            onClick={() => setActiveId(playlist.id)}
          >
            {playlist.label}
          </button>
        ))}
      </div>

      {active && (
        <div className="video-panel" role="tabpanel">
          <p className="video-panel-description">{active.description}</p>
          <div className="video-embed-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${active.youtubePlaylistId}`}
              title={active.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            className="video-panel-youtube-link"
            href={`https://www.youtube.com/playlist?list=${active.youtubePlaylistId}`}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </section>
  );
}
