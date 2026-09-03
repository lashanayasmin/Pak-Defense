import type { Metadata } from "next";
import { CheckCircle2, Phone, Calendar } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { PROGRAMS, STEPS } from "@/lib/content/courses";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Our ISSB preparation, initial test coaching and college-entry training programs at Pak Defence ISSB Coaching Centre, Lahore.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses & Programs"
        title="Training built around your target"
        description="Written tests, ISSB, physical standards, interviews — whatever stage you're at, there's a plan here for it."
      />

      {/* Programs */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
            What we run
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Six programs, one end goal
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Every program below is mentor-led and matched to the real selection
            process. Pick what fits your target, or call us and let us point you
            to the right one.
          </p>

          <Reveal className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger>
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="hover-lift flex flex-col border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-army-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-army-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs italic leading-relaxed text-slate-500">
                    {p.note}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-[#f4f1ea] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            From first visit to selection day
          </h2>
          <Reveal className="mt-10 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-4" stagger>
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white p-6">
                <span className="text-3xl font-extrabold text-gold-600">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              <Calendar className="h-5 w-5" />
              Book your free consultation
            </ButtonLink>
            <ButtonLink href={SITE.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
