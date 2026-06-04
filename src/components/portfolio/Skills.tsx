import { Code, Globe, Database, BrainCircuit, Wrench, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  { icon: Code, title: "Programming Languages", skills: ["Java", "Python", "C"] },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Angular"],
  },
  { icon: Database, title: "Databases", skills: ["MySQL", "MongoDB"] },
  { icon: BrainCircuit, title: "AI/ML & Tools", skills: ["TensorFlow", "PyTorch", "OpenCV", "CNN", "NLP"] },
  { icon: Wrench, title: "Developer Tools", skills: ["Git", "GitHub", "VS Code"] },
  { icon: Users, title: "Soft Skills", skills: ["Leadership", "Adaptability", "Decision Making"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical Toolkit"
            description="A broad, practical skill set spanning full-stack development, machine learning, and modern tooling."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
