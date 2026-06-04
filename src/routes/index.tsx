import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";

const description =
  "Dosakayala Lekya — final-year B.Tech CSE student and job-ready software engineer specializing in full-stack development and AI/ML. CGPA 9.5/10.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dosakayala Lekya | Full-Stack Developer & AI/ML Engineer" },
      { name: "description", content: description },
      { property: "og:title", content: "Dosakayala Lekya | Full-Stack Developer & AI/ML Engineer" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hero,
});
