import { Target, Layers, BrainCircuit, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const points = [
  {
    icon: Layers,
    title: "Software Development",
    text: "Final-year CSE student with a strong focus on building robust, scalable software and AI-driven systems.",
  },
  {
    icon: Rocket,
    title: "Real-World Impact",
    text: "Passionate about turning ideas into production-ready applications that solve genuine problems.",
  },
  {
    icon: BrainCircuit,
    title: "Strong Foundations",
    text: "Solid grounding in Data Structures & Algorithms, full-stack development, and machine learning.",
  },
  {
    icon: Target,
    title: "Career Goal",
    text: "Seeking Software Developer, Full-Stack Engineer, or AI Engineer roles where I can grow and deliver.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A job-ready engineer with a builder's mindset"
            description="I combine academic excellence with hands-on engineering — focused on shipping intelligent, user-centered products."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
