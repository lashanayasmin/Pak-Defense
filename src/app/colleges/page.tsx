import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  ChevronRight,
  Landmark,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";
import { COLLEGES } from "@/lib/content/colleges";

export const metadata: Metadata = {
  title: "Military & Cadet Colleges",
  description:
    "Names, campuses, eligibility and how to apply for military and cadet colleges in Pakistan: PMA Kakul, PAF Air Academy, Naval Academy, Military College Jhelum and more.",
};

export default function CollegesPage() {
  return (
    <>
      <PageHero
        eyebrow="Military & Cadet Colleges"
        title="Military and cadet colleges across Pakistan"
        description="Who can apply, who generally cannot, and how to apply for each of the main military and cadet colleges in the country."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up">
            <div className="flex flex-col gap-4 border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-army-50 ring-1 ring-slate-100">
                <Landmark className="h-8 w-8 text-army-700" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy-900 sm:text-2xl">
                  Main military &amp; cadet colleges
                </h1>
                <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-600">
                  These are the country&apos;s principal officer-training
                  academies and cadet colleges. Entry age, class, education and
                  medical standards vary by college, so always verify with the
                  official admissions notice before you apply.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 space-y-10">
            {COLLEGES.map((college, index) => (
              <Reveal key={college.name} direction="up" delay={index % 3}>
                <article
                  id={college.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="border border-slate-200 bg-white"
                >
                  <header className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-navy-900">
                        {college.name}
                      </h2>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-army-700">
                        <MapPin className="h-4 w-4" />
                        {college.campus}
                        <span className="text-slate-300">·</span>
                        {college.stream}
                      </p>
                    </div>
                  </header>

                  <div className="grid gap-px bg-slate-200 lg:grid-cols-3">
                    <section className="bg-white p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-army-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Who can apply
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {college.eligible.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-army-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-white p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-700">
                        <XCircle className="h-4 w-4" />
                        Usually not eligible
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {college.nonEligible.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                          >
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-white p-6">
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-900">
                        How to apply
                      </h3>
                      <ol className="mt-3 space-y-2.5">
                        {college.apply.map((step, i) => (
                          <li
                            key={step}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-army-600 text-[11px] font-bold text-white">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </section>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-slate-200 bg-[#f4f1ea] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                Not sure which college fits you?
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                Talk to a counsellor and get an honest answer on your age,
                education and eligibility before you spend anything.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                <Calendar className="h-5 w-5" />
                Get free counselling
              </ButtonLink>
              <ButtonLink href={SITE.phoneHref} variant="outline" size="lg">
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </ButtonLink>
            </div>
          </Reveal>
          <Link
            href="/courses"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-army-700 hover:text-army-900"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to our college-entry training
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
