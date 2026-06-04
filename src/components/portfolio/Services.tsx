import { Layout, Monitor, BrainCircuit, Smartphone, Plug, Database, Eye } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  { icon: Layout, title: "Full-Stack Web Development", text: "End-to-end web apps with modern frontends and reliable backends." },
  { icon: Monitor, title: "Frontend Development", text: "React-based UI systems that are fast, accessible, and pixel-precise." },
  { icon: BrainCircuit, title: "AI/ML Application Development", text: "Intelligent features powered by machine learning and deep learning." },
  { icon: Smartphone, title: "Responsive Web Design", text: "Layouts that look and work great across every device and screen size." },
  { icon: Plug, title: "REST API Development", text: "Designing and integrating clean, secure, well-documented APIs." },
  { icon: Database, title: "Database Design & Management", text: "Efficient schemas and queries with MySQL and MongoDB." },
  { icon: Eye, title: "Computer Vision & Deep Learning", text: "CNN-based image and vision solutions for real-world problems." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I Can Build For You"
            description="Professional offerings backed by hands-on project experience."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
