import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site } from "@/data/site";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${site.name}'s portfolio — fintech, healthtech, logistics, edtech, e-commerce and IoT platforms.`,
};

export default async function ProjectsPage() {
  const liveProjects = await getProjects();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-8 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-24 right-1/3 h-80 w-80 rounded-full bg-brand-3/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
            Our Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ideas We&apos;ve Turned Into{" "}
            <span className="text-gradient">Shipped Products</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Real platforms serving real users — across fintech, healthcare,
            logistics, education, commerce and agriculture.
          </p>
        </Reveal>
      </section>

      {/* Projects grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.08}>
                <article className="card group h-full overflow-hidden">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} opacity-90`}
                  >
                    <span className="text-3xl font-black tracking-tight text-white/90">
                      {project.title}
                    </span>
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-2">
                      {project.category}
                    </span>
                    <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="border-t border-line bg-surface/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Domains We Know Deeply"
          />
          <Reveal className="flex flex-wrap justify-center gap-3">
            {[
              "FinTech",
              "HealthTech",
              "EdTech",
              "E-Commerce",
              "Logistics",
              "AgriTech",
              "Real Estate",
              "Travel & Hospitality",
              "Media & Entertainment",
              "SaaS",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-brand"
              >
                {industry}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
