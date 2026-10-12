"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent";

const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    // TODO: replace with a real API route / email service (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));

    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "sent") {
    return (
      <div className="card flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-2" />
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:border-brand hover:bg-surface"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium">
            Project Budget
          </label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option value="<5k">Under $5,000</option>
            <option value="5-15k">$5,000 – $15,000</option>
            <option value="15-50k">$15,000 – $50,000</option>
            <option value=">50k">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your idea, goals and timeline..."
          className={`${inputCls} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
