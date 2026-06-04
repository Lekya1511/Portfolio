import { Github, Plane, Fingerprint, Brain, TrendingUp, HeartPulse } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Plane,
    title: "AI-Driven Intelligent Travel Recommendation System",
    problem:
      "Travelers struggle to plan trips tailored to their personal preferences across endless options.",
    outcome:
      "Built an AI-powered platform delivering personalized travel recommendations and smart trip planning using user preferences and NLP-based analysis.",
    tech: ["Python", "Flask", "React", "ML", "NLP"],
    repo: "https://github.com/Lekya1511/AI-DRIVEN_INTELLIGENT_TRAVEL_RECOMMENDATION_AND_PERSONALIZATION_SYSTEM",
  },
  {
    icon: Fingerprint,
    title: "Deep Hashing Dynamics — Biometric Security System",
    problem:
      "Traditional authentication is vulnerable; biometric data needs secure, efficient storage and matching.",
    outcome:
      "Developed a secure biometric authentication system using face and iris recognition with deep learning and hashing techniques.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNN", "MongoDB"],
    repo: "https://github.com/Lekya1511",
  },
  {
    icon: Brain,
    title: "CNN-Based Brain Tumor Detection System",
    problem:
      "Early brain tumor detection from MRI scans requires accurate, fast, and reliable analysis.",
    outcome:
      "Built a medical imaging solution that classifies MRI scans for early and accurate brain tumor detection using convolutional neural networks.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    repo: "https://github.com/Lekya1511",
  },
  {
    icon: TrendingUp,
    title: "Stock Price Prediction Models",
    problem:
      "Forecasting volatile stock prices requires models that learn complex temporal patterns from market data.",
    outcome:
      "Implemented and compared multiple machine learning and deep learning models to predict stock price movements from historical market data.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "NumPy"],
    repo: "https://github.com/Lekya1511/Stock-Prediction-Models",
  },
  {
    icon: HeartPulse,
    title: "Heart Disease Prediction",
    problem:
      "Early identification of heart disease risk can be life-saving but depends on accurate clinical analysis.",
    outcome:
      "Built a machine learning model that predicts the likelihood of heart disease from patient health indicators, with data analysis in Jupyter Notebook.",
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    repo: "https://github.com/Lekya1511/Heart-Disease-Prediction",
  },
  {
    icon: Plane,
    title: "Restaurant Recommendation System",
    problem:
      "Diners are overwhelmed with choices and need tailored suggestions that match their tastes.",
    outcome:
      "Created a recommendation system that suggests restaurants to users based on preferences and rating-driven filtering.",
    tech: ["Python", "ML", "HTML", "Recommender"],
    repo: "https://github.com/Lekya1511/Restaurant-Recommendation-System",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            description="Impact-driven projects across full-stack engineering, computer vision, and applied machine learning."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-navy)] text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">{p.title}</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</p>
                    <p className="mt-1 leading-relaxed text-foreground/80">{p.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Outcome</p>
                    <p className="mt-1 leading-relaxed text-foreground/80">{p.outcome}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1" />
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
