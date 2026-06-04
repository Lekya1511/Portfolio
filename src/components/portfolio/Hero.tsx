import { ArrowRight, Mail, GraduationCap, Code2, Sparkles } from "lucide-react";
//import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

const highlights = [
  { icon: GraduationCap, label: "CGPA", value: "9.5 / 10" },
  { icon: Sparkles, label: "Graduating", value: "2027 (CSE)" },
  { icon: Code2, label: "Focus", value: "Full-Stack + AI/ML" },
];

export function Hero() {


  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute left-1/4 top-40 h-72 w-72 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Software Engineering Roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Dosakayala <span className="text-gradient">Lekya</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            Full-Stack Developer · AI/ML Enthusiast · Computer Science Engineer
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Building scalable, intelligent, and user-focused digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>


          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <h.icon className="h-5 w-5 text-primary" />
                <dt className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--gradient-navy)] opacity-10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <img
              src={profile}
              alt="Dosakayala Lekya, Computer Science Engineer"
              width={768}
              height={896}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
