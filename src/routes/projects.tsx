import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/portfolio/Projects";

const description =
  "Projects by Dosakayala Lekya — AI travel recommender, biometric security, brain tumor detection, stock prediction, heart disease prediction, and more.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Projects | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Projects,
});
