import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";

const description =
  "Contact Dosakayala Lekya — open to software engineering opportunities and collaborations. Reach out via email or LinkedIn.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dosakayala Lekya" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact | Dosakayala Lekya" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});
