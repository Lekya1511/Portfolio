import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";

const description =
  "About Dosakayala Lekya — a job-ready software engineer with a builder's mindset, combining academic excellence with hands-on full-stack and AI/ML engineering.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "About | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});
