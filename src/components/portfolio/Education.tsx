import { GraduationCap, MapPin, Award, School, BookOpen } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const timeline = [
  {
    icon: GraduationCap,
    degree: "B.Tech — Computer Science & Engineering",
    institute: "Malla Reddy Engineering College for Women (Autonomous)",
    board: "JNTU Hyderabad",
    location: "Hyderabad, Telangana",
    period: "2023 – 2027 (Pursuing)",
    scoreLabel: "CGPA",
    score: "9.50 / 10",
    featured: true,
  },
  {
    icon: BookOpen,
    degree: "Intermediate (MPC)",
    institute: "Sri Chaitanya Junior Kalasala",
    board: "Board of Intermediate Education, TS",
    location: "Hyderabad, Telangana",
    period: "2021 – 2023",
    scoreLabel: "Percentage",
    score: "94.3%",
    featured: false,
  },
  {
    icon: School,
    degree: "SSC (Class X)",
    institute: "Sri Chaitanya High School",
    board: "State Board of Secondary Education",
    location: "Siddipet, Telangana",
    period: "2021",
    scoreLabel: "CGPA",
    score: "10 / 10",
    featured: false,
  },
];

export function Education() {
  return (
    <section id="education" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic Background"
            description="A consistent record of academic excellence from school through engineering."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-5">
          {timeline.map((item, i) => (
            <Reveal key={item.degree} delay={i * 90}>
              <div
                className={`flex flex-col gap-6 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-start sm:justify-between sm:p-8 ${
                  item.featured ? "border-primary/30" : "border-border"
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                      item.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{item.institute}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.board}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {item.location} · {item.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start rounded-xl border border-border bg-secondary px-4 py-3">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.scoreLabel}
                    </p>
                    <p className="text-lg font-bold text-foreground">{item.score}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
