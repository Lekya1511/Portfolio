import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/portfolio/Certifications";

const description =
  "Certifications of Dosakayala Lekya — Cisco, IBM Generative AI, Cambridge English C1, NPTEL (IIT Kharagpur & IISc Bangalore), and Coursera.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Certifications | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Certifications,
});
