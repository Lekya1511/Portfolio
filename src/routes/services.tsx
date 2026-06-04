import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/portfolio/Services";

const description =
  "Services offered by Dosakayala Lekya — full-stack web development, AI/ML applications, and end-to-end software solutions.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Services | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Services,
});
