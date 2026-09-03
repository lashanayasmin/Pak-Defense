import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Pak Defence ISSB logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="leading-tight">
              <span className="block text-base font-bold text-white">
                Pak Defence
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-gold-400">
                ISSB Coaching Centre
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Preparing the cadets of tomorrow for the Pakistan Army, Navy, Air
            Force, Military and Cadet Colleges through expert ISSB coaching.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-gold-500" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Visit Us
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            We are located in the heart of Johar Town, Lahore. Walk-ins and
            consultations are welcome, but call ahead to book your free session.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Preparing Pakistan&apos;s future officers.</p>
        </div>
      </div>
    </footer>
  );
}
