import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — book a free discovery call and start your project.`,
};

const contactItems = [
  {
    icon: Mail,
    label: "Email Us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: site.address,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM",
  },
];
void contactItems;

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const liveContactItems = [
    { icon: Mail, label: "Email Us", value: settings.email, href: `mailto:${settings.email}` },
    { icon: Phone, label: "Call Us", value: settings.phone, href: `tel:${settings.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Visit Us", value: settings.address },
    { icon: Clock, label: "Working Hours", value: settings.workingHours },
  ];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-brand/20 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-2">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let&apos;s Talk About{" "}
            <span className="text-gradient">Your Next Big Thing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you&apos;re building. We&apos;ll reply within one
            business day with next steps and a free discovery call.
          </p>
        </Reveal>
      </section>

      {/* Form + info */}
      <section className="pb-28 pt-8">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            {liveContactItems.map((item) => (
              <div key={item.label} className="card flex items-start gap-4 p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-2">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm text-muted transition hover:text-brand-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card p-6">
              <h3 className="text-sm font-semibold">Prefer a quick chat?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Drop us an email with a couple of time slots and we&apos;ll set
                up a 30-minute video call — no commitment, just ideas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
