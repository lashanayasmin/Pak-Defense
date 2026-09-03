import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { EXPECTATIONS, TEAM } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Pak Defence ISSB Coaching Centre in Johar Town, Lahore: the coaches, the method, and why students keep coming back.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A small coaching centre with a serious job"
        description="Pak Defence ISSB Coaching Centre is a family-run academy in Johar Town, Lahore. We've spent six-plus years getting candidates through the ISSB and initial tests."
      />

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal direction="right">
              <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
                How we started
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
                It started with one student and one stubborn belief
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  The academy was started in Johar Town by people who had
                  prepared candidates for years, quietly, one student at a
                  time. A relative would send his son, that boy would get
                  selected, and his friend would follow. Word spread faster than
                  any advertisement could have.
                </p>
                <p>
                  What we noticed early on was that most candidates weren&apos;t
                  failing because they were weak. Most were failing because
                  nobody had shown them how the ISSB actually works: what the
                  psychologists are really looking for, how to carry yourself
                  in the interview, what a GTO day looks like. They went in
                  blind. We decided nobody we train would do that.
                </p>
                <p>
                  Six years and a few hundred students later, that&apos;s still
                  the whole idea. No shortcuts, no false promises. Just
                  preparation done properly.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" className="relative">
              <div className="pointer-events-none absolute -left-3 -top-3 h-full w-full rounded-sm border-2 border-gold-500/40" />
              <Image
                src="/images/photos/about-training.jpg"
                alt="Students training at the academy"
                width={560}
                height={420}
                className="relative aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we work: plain list, no icon boxes */}
      <section className="border-y border-slate-200 bg-[#f4f1ea] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
            What you can expect
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold text-navy-900 sm:text-3xl">
            Show up on time, work hard, and we&apos;ll do the rest
          </h2>
          <Reveal className="mt-10 space-y-8 border-l border-slate-300 pl-6 sm:pl-8" stagger>
            {EXPECTATIONS.map((item, i) => (
              <div key={item.t} className="relative">
                <span className="absolute -left-6 -translate-x-full text-sm font-bold text-gold-600 sm:-left-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-navy-900">{item.t}</h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {item.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The people */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
            The people behind it
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Nobody in the building is reading from a script
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            We&apos;re a compact team, and that&apos;s deliberate. Fewer students
            per batch means each one gets real attention.
          </p>

          <Reveal className="mt-10 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2" stagger>
            {TEAM.map((t) => (
              <div key={t.name} className="bg-white p-6">
                <h3 className="text-lg font-bold text-navy-900">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-navy-950 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Come see the place for yourself
            </h2>
            <p className="mt-2 max-w-xl text-base text-navy-100">
              We&apos;re in Johar Town, Lahore. Walk-ins are welcome, but call
              ahead so someone&apos;s free to sit with you.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-gold-400">
              <Phone className="h-4 w-4" /> {SITE.phone} · {SITE.address}
            </p>
          </div>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Book a free session
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
