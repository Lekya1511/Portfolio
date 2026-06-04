import { BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const certs = [
  { title: "Cisco Certifications", detail: "C & Python Programming", issuer: "Cisco" },
  { title: "C1 Advanced (Empower)", detail: "English Proficiency", issuer: "Cambridge English" },
  { title: "Generative AI", detail: "SkillBuild Program", issuer: "IBM" },
  { title: "Programming Certifications", detail: "Online Specializations", issuer: "Coursera" },
  { title: "Java Programming", detail: "Certified Course", issuer: "NPTEL · IIT Kharagpur" },
  { title: "AI: Concepts & Techniques", detail: "Certified Course", issuer: "NPTEL · IISc Bangalore" },
];

export function Certifications() {
  return (
    <section id="certifications" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Verified Credentials"
            description="Industry and academic certifications validating my technical foundation."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
                <BadgeCheck className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-primary">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
