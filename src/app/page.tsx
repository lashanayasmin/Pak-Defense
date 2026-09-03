import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { FORCES, WHY_US, STATS } from "@/lib/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pb-14 pt-14 md:grid-cols-[1.2fr_0.8fr] md:pb-20 md:pt-20">
          <Reveal direction="right">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Pak Defence ISSB Coaching Centre, Lahore
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              An ISSB slot is earned. We help you earn yours.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
              We&apos;re a coaching centre in Johar Town preparing candidates
              for the Army, Navy, Air Force, military colleges and cadet
              colleges. Expect mock tests, daily drill and mentors
              who&apos;ve been through it themselves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/courses" size="lg">
                See our courses
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href={SITE.phoneHref}
                variant="outline-white"
                size="lg"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-navy-200">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                150+ candidates selected so far
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>Walk-ins welcome, call ahead</span>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative">
              <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full rounded-sm border-2 border-gold-500/40" />
              <Image
                src="/images/photos/hero-cadets.jpg"
                alt="Cadets standing in disciplined formation"
                width={520}
                height={650}
                className="relative aspect-[4/5] w-full object-cover grayscale-[15%]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y-2 border-navy-900 bg-white">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4" stagger>
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-extrabold text-army-800 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* FORCES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up" className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                Which force are you aiming for?
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                The selection process differs for each service. Tell us your
                target and we&apos;ll pace your preparation around it.
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-army-700 underline-link hover:text-army-900"
            >
              Compare our courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal className="mt-10 grid gap-6 sm:grid-cols-3" stagger>
            {FORCES.map((f) => (
              <Link
                key={f.title}
                href={`/${f.slug}`}
                className="group hover-lift flex flex-col items-center border border-slate-200 bg-white p-8 text-center transition-colors hover:border-army-300"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-army-50 ring-1 ring-slate-100 transition-colors group-hover:bg-army-100">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={72}
                    height={72}
                    className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-army-700">
                  View courses
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="mt-4 h-0.5 w-10 bg-gold-500" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY US: asymmetric, numbered, no cards */}
      <section className="border-y border-slate-200 bg-[#f4f1ea] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="right">
            <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
              Why this centre
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              Why candidates drive in from across Lahore
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              There&apos;s no magic formula here. Just honest, structured
              preparation and trainers who take your selection as seriously as
              you do.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                About the centre <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="space-y-7 border-l border-slate-300 pl-6 sm:pl-8" stagger>
            {WHY_US.map((w, i) => (
              <div key={w.title} className="relative">
                <span className="absolute -left-6 -translate-x-full text-sm font-bold text-gold-600 sm:-left-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-navy-900">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {w.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
