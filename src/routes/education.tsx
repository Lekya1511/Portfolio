import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";

const description =
  "Education of Dosakayala Lekya — B.Tech CSE (CGPA 9.50), Intermediate MPC (94.3%), and SSC (10 CGPA). A consistent record of academic excellence.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Education | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Education,
});
