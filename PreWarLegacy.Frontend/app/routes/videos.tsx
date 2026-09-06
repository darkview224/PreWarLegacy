import { useState } from "react";
import type { Route } from "./+types/videos";

import "../Videos.css";
import { videoPlaylists } from "../data/videoPlaylists";

export function meta({}: Route.MetaArgs) {
  const title = "Videos – Prewar Magic";
  const description = "Watch full Prewar tournament coverage: GP Richmond, the SCG Opens, and Eternal Weekend NA.";
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
  const active = videoPlaylists.find((entry) => entry.id === activeId) ?? videoPlaylists[0];

  return (
    <section id="videos" className="sectionPanel">
      <h2 className="sectionHeader">Videos</h2>
      <br></br>

      <div className="video-tabs" role="tablist" aria-label="Tournament coverage">
        {videoPlaylists.map((entry) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={entry.id === active?.id}
            className="video-tab"
            onClick={() => setActiveId(entry.id)}
          >
            {entry.label}
          </button>
        ))}
      </div>

      {active && (
        <div className="video-panel" role="tabpanel">
          <p className="video-panel-description">{active.description}</p>

          {active.kind === "playlist" && (
            <>
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
            </>
          )}

          {active.kind === "videos" && (
            <div className="video-list">
              {active.videos.map((video) => (
                <a
                  key={video.youtubeId}
                  className="video-list-item"
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="video-list-thumb"
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                  />
                  <span className="video-list-label">{video.label}</span>
                  <span className="video-list-runtime">{video.runtime}</span>
                </a>
              ))}
            </div>
          )}

          {active.kind === "channel" && (
            <a
              className="video-panel-youtube-link video-panel-channel-link"
              href={active.channelUrl}
              target="_blank"
              rel="noreferrer"
            >
              Browse the channel on YouTube
            </a>
          )}
        </div>
      )}
    </section>
  );
}
