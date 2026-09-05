import type { Route } from "./+types/contact";

import ContactPage from "../components/contactPage";

export function meta({}: Route.MetaArgs) {
  const title = "Contact – Prewar Magic";
  const description = "Get in touch with the web-manager for Prewar, the community-driven Legacy format frozen just before War of the Spark.";
  const url = "https://prewarmagic.com/contact";
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

export default function Contact() {
  return (
    <section id="contact" className="sectionPanel">
      <h2 className="sectionHeader">Contact</h2>
      <br></br>

      <ContactPage></ContactPage>

    </section>
  );
}
