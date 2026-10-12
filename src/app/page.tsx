import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import CTA from "@/components/CTA";
import {
  site,
  stats,
  services,
  projects,
  marqueeTech,
  testimonials,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="animate-float-slow pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand/25 blur-[130px]" />
        <div className="animate-float-slow pointer-events-none absolute top-20 right-1/5 h-80 w-80 rounded-full bg-brand-3/20 blur-[130px] [animation-delay:-6s]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold text-brand-2">
              <Sparkles className="h-3.5 w-3.5" />
              IT Software Engineering Innovation Startup
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              We Build Software That{" "}
              <span className="text-gradient">Powers Innovation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.name} designs and engineers web platforms, mobile apps,
              AI-driven products and cloud infrastructure — helping startups
              and enterprises turn bold ideas into shipped software.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-indigo-400"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold transition hover:border-brand hover:bg-surface"
              >
                Explore Our Work
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal
            delay={0.2}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-10 rounded-2xl border border-line bg-surface/50 p-8 backdrop-blur sm:grid-cols-4"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Tech marquee ─────────────────────────────────────── */}
      <section className="border-y border-line bg-surface/30 py-6">
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-4 pr-4">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-sm font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-End Software Engineering"
            description="From product discovery to production deployment, one team covers your entire technology lifecycle."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services#${service.slug}`}
                  className="card group flex h-full flex-col p-7"
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-2 transition group-hover:bg-brand/25">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-2">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ────────────────────────────────── */}
      <section className="border-t border-line bg-surface/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Products We're Proud Of"
            description="A snapshot of platforms we've designed, engineered and shipped for clients across industries."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <div className="card h-full overflow-hidden">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
                  />
                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-2">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold transition hover:border-brand hover:bg-surface"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Why us + testimonials ────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
              Why VEXBRIK
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A startup&apos;s speed.{" "}
              <span className="text-gradient">An enterprise&apos;s rigor.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              We combine lean, agile delivery with battle-tested engineering
              practices — so you get to market fast without sacrificing
              quality, security or scalability.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated squads that ship a demo every single week",
                "Code reviews, automated testing and CI/CD on every project",
                "Transparent pricing and roadmaps — no hidden surprises",
                "Post-launch support, monitoring and continuous iteration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-2" />
                  <span className="text-sm text-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`card p-6 ${i === 2 ? "sm:col-span-2" : ""}`}
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
