import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} services — web development, mobile apps, AI/ML, cloud & DevOps, UI/UX design and software consulting.`,
};

const process = [
  {
    step: "01",
    title: "Discover",
    text: "Workshops to map your goals, users and technical constraints into a clear product brief.",
  },
  {
    step: "02",
    title: "Design",
    text: "Wireframes, prototypes and architecture blueprints validated with real users before a line of code.",
  },
  {
    step: "03",
    title: "Build",
    text: "Agile two-week sprints with weekly demos, automated tests and continuous deployment.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    text: "Production rollout with monitoring, analytics and an iteration roadmap for what's next.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
            Our Services
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Everything You Need to{" "}
            <span className="text-gradient">Ship Great Software</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Six specialised practices, one accountable team. Pick a single
            service or let us run your entire product lifecycle.
          </p>
        </Reveal>
      </section>

      {/* Service details */}
      <section className="py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.05}>
              <article
                id={service.slug}
                className="card scroll-mt-24 p-8 sm:p-10"
              >
                <div className="flex flex-col gap-8 sm:flex-row">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand-2">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {service.short}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-2" />
                          <span className="text-sm text-foreground">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-surface/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="A Process Built for Momentum"
            description="Four phases that take you from first workshop to a product growing in production."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="font-mono text-3xl font-extrabold text-gradient">
                    {phase.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {phase.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
