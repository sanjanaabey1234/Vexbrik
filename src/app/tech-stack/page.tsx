import type { Metadata } from "next";
import { Layers, Server, Smartphone, Database, Brain, Cloud } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { techStack, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: `The technologies ${site.name} uses — Next.js, React, Node.js, Python, AI/ML frameworks, cloud platforms and more.`,
};

const groupIcons = {
  Frontend: Layers,
  Backend: Server,
  Mobile: Smartphone,
  Databases: Database,
  "AI / ML": Brain,
  "Cloud & DevOps": Cloud,
} as const;

export default function TechStackPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-8 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
            Technology
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            The Stack Behind{" "}
            <span className="text-gradient">Every Great Build</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            We choose proven, modern tools — and master them deeply. Here&apos;s
            what powers the products we ship.
          </p>
        </Reveal>
      </section>

      {/* Stack groups */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group, i) => {
              const GroupIcon =
                groupIcons[group.group as keyof typeof groupIcons] ?? Layers;
              return (
                <Reveal key={group.group} delay={(i % 3) * 0.08}>
                  <div className="card h-full p-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-2">
                        <GroupIcon className="h-5.5 w-5.5" aria-hidden />
                      </span>
                      <h2 className="text-lg font-bold">{group.group}</h2>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering practices */}
      <section className="border-t border-line bg-surface/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Culture"
            title="How We Keep Quality High"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Type-Safe by Default",
                text: "TypeScript end-to-end, strict mode on, schema validation at every boundary.",
              },
              {
                title: "Tested & Reviewed",
                text: "Unit, integration and E2E tests plus mandatory peer review on every pull request.",
              },
              {
                title: "Automated Delivery",
                text: "CI/CD pipelines ship every merge to staging automatically — production is one click away.",
              },
              {
                title: "Observable Systems",
                text: "Structured logging, tracing and alerting baked in from day one, not bolted on later.",
              },
            ].map((practice, i) => (
              <Reveal key={practice.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <h3 className="text-base font-semibold text-brand-2">
                    {practice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {practice.text}
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
