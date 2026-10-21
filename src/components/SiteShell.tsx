"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function SiteShell({
  children,
  navbar,
  footer,
}: {
  children: ReactNode;
  navbar: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
