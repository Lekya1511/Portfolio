import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/portfolio/Skills";

const description =
  "Technical skills of Dosakayala Lekya — full-stack development, machine learning, databases, and modern developer tooling.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Skills | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Skills,
});
