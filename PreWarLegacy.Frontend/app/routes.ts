import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("rules", "routes/rules.tsx"),
    route("cards", "routes/cards.tsx"),
    route("decks", "routes/decks.tsx"),
    route("content", "routes/content.tsx"),
    route("faq", "routes/faq.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
