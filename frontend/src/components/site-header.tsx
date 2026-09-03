"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button-link";

/**
 * Sets `aria-current="page"` for the active nav entry.
 * The home link only counts when the path is exactly "/".
 */
function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-army-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Pak Defence ISSB homepage">
          <Image
            src="/images/logo.svg"
            alt="Pak Defence ISSB logo"
            width={38}
            height={38}
            className="rounded-full"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-army-800 sm:text-base">
              Pak Defence
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gold-600">
              ISSB Coaching Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-army-600 text-white"
                    : "text-slate-600 hover:bg-army-50 hover:text-army-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-army-800"
          >
            <Phone className="h-4 w-4 text-gold-600" />
            {SITE.phone}
          </a>
          <ButtonLink href="/contact" size="sm" variant="primary">
            Enquire Now
          </ButtonLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-army-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-army-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    active
                      ? "bg-army-600 text-white"
                      : "text-slate-700 hover:bg-army-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink
              href="/contact"
              className="mt-2 w-full"
              onClick={close}
            >
              Enquire Now
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
