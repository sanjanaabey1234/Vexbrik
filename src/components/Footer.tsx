import Link from "next/link";
import { Hexagon, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services } from "@/data/site";
import { getSiteSettings } from "@/lib/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

export default async function Footer() {
  const settings = await getSiteSettings();
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center">
                <Hexagon className="h-9 w-9 text-brand" />
                <span className="absolute text-xs font-black text-brand-2">V</span>
              </span>
              <span className="text-lg font-extrabold tracking-wider">
                {settings.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {settings.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={settings.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={settings.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={settings.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand hover:text-foreground"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-2" />
                <a href={`mailto:${settings.email}`} className="hover:text-foreground">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-2" />
                <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-2" />
                {settings.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {settings.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
