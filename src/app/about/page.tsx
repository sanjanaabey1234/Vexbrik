import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { site, values, timeline, team } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — our story, mission, values and the team behind the software.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-brand-3/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
            About {site.name}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Engineers at heart.{" "}
            <span className="text-gradient">Innovators by choice.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.name} was founded on a simple belief: world-class software
            can be built anywhere by people who care deeply about their craft.
            We&apos;re a team of engineers, designers and problem-solvers
            turning complex challenges into elegant digital products.
          </p>
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-2">
                <Target className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="text-xl font-bold">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                To empower businesses of every size with reliable, scalable
                and beautifully engineered software — delivered with startup
                speed and enterprise-grade quality.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-8">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-2">
                <Eye className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="text-xl font-bold">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                To become the most trusted software innovation partner in the
                region — known for shipping products that shape how people
                work, learn and live.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="Four principles guide every sprint, every commit and every client conversation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="card h-full p-7 text-center">
                  <span className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-2">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-line bg-surface/20 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Journey"
            title="From Idea to Innovation Hub"
          />
          <ol className="relative border-l border-line pl-8">
            {timeline.map((item, i) => (
              <Reveal key={`${item.year}-${item.title}`} delay={i * 0.1}>
                <li className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-2">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The People Behind VEXBRIK"
            description="A leadership team that still writes code, reviews PRs and joins client calls."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="card h-full p-7 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-xl font-extrabold text-white">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-2">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
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
