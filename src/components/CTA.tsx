import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-[42rem] max-w-full rounded-full bg-brand/20 blur-[120px]" />
      </div>
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Have an idea? <span className="text-gradient">Let&apos;s build it together.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          From a napkin sketch to a production platform — we&apos;ll take you
          there. Book a free discovery call and get a roadmap within a week.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-indigo-400"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand hover:bg-surface"
          >
            View Our Work
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
