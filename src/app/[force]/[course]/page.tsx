import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  Wallet,
  FileText,
  ChevronRight,
  BadgeCheck,
  XCircle,
  MapPin,
  ExternalLink,
  Phone,
  School,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CourseCard } from "@/components/course-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { CourseIcon } from "@/lib/course-icons";
import { SITE } from "@/lib/site";
import { getCourse, getForce, getForceCourses, FORCES } from "@/lib/content/forces";

interface Props {
  params: Promise<{ force: string; course: string }>;
}

export function generateStaticParams() {
  return FORCES.flatMap((f) =>
    f.courses.map((c) => ({ force: f.slug, course: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { force, course } = await params;
  const data = getCourse(force, course);
  if (!data) return {};
  return {
    title: data.name,
    description: data.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { force: forceSlug, course: courseSlug } = await params;
  const force = getForce(forceSlug);
  const course = getCourse(forceSlug, courseSlug);

  if (!force || !course) notFound();

  const related = getForceCourses(forceSlug)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${force.shortTitle} · ${course.level}`}
        title={course.name}
        description={course.tagline}
      />

      {/* Breadcrumb + eligibility banner */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500"
          >
            <Link href="/" className="hover:text-army-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/${force.slug}`} className="hover:text-army-700">
              {force.shortTitle}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-navy-900">{course.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          {/* Identity strip */}
          <Reveal direction="up">
            <div className="flex flex-col gap-5 border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-army-50 text-army-700 ring-1 ring-army-200">
                <CourseIcon name={course.icon} className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="army">{course.level}</Badge>
                  <Badge variant="outline">{course.commission}</Badge>
                  <Badge
                    variant={course.audience === "female" ? "female" : "outline"}
                  >
                    {course.audience === "female"
                      ? "Female candidates"
                      : course.audience === "both"
                        ? "Male & female candidates"
                        : "Male candidates"}
                  </Badge>
                  {course.stream ? (
                    <Badge variant="navy">{course.stream}</Badge>
                  ) : null}
                </div>
                {course.campus ? (
                  <p className="mt-2.5 flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                    <MapPin className="h-4 w-4 text-army-600" />
                    {course.campus}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>

          {/* Eligibility summary banner */}
          <Reveal direction="up" className="mt-6">
            <div className="flex flex-col gap-3 border-l-4 border-army-600 bg-army-50 p-6 sm:flex-row sm:items-center">
              <BadgeCheck className="h-8 w-8 shrink-0 text-army-600" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-navy-900">
                  Quick eligibility check
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {course.summary} Always verify the exact criteria with the
                  official recruitment notice before applying.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal direction="up" className="mt-10">
            <h2 className="text-2xl font-bold text-navy-900">
              About this course
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
              {course.description}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: detailed info */}
            <div className="space-y-12">
              {/* Eligibility criteria */}
              <Reveal direction="up">
                <h2 className="text-2xl font-bold text-navy-900">
                  Who can apply (Eligibility)
                </h2>
                <ul className="mt-4 space-y-3">
                  {course.eligibility.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-base text-slate-700"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-army-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Fact label="Age limit" value={course.ageLimit} />
                  <Fact label="Education" value={course.education} />
                  <Fact label="Physical" value={course.physical} />
                  <Fact
                    label="Nationality / Gender"
                    value={`${course.nationality} · ${course.gender}`}
                  />
                  {course.classEntry ? (
                    <Fact label="Class entry" value={course.classEntry} />
                  ) : null}
                  {course.campus ? (
                    <Fact label="Campus" value={course.campus} />
                  ) : null}
                </div>
              </Reveal>

              {/* Not eligible */}
              <Reveal direction="up">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-navy-900">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Usually not eligible
                </h2>
                <ul className="mt-4 space-y-3">
                  {course.notEligible.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-base text-slate-700"
                    >
                      <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Why join */}
              <Reveal direction="up">
                <h2 className="text-2xl font-bold text-navy-900">
                  Why join this course
                </h2>
                <ul className="mt-4 space-y-3">
                  {course.benefits.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-base text-slate-700"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-army-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Application process */}
              <Reveal direction="up">
                <h2 className="text-2xl font-bold text-navy-900">
                  How to apply, step by step
                </h2>
                <ol className="mt-4 space-y-5">
                  {course.steps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-army-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-base leading-relaxed text-slate-700">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                {course.officialSite ? (
                  <a
                    href={course.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-army-700 hover:text-army-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Check the official website for the latest advertisement
                  </a>
                ) : null}
              </Reveal>

              {/* Documents required */}
              <Reveal direction="up">
                <h2 className="text-2xl font-bold text-navy-900">
                  Documents required
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.documents.map((doc) => (
                    <span
                      key={doc}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-700"
                    >
                      <FileText className="h-4 w-4 text-army-600" />
                      {doc}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: quick facts + CTA */}
            <Reveal
              direction="left"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <div className="border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-navy-900">Quick facts</h2>
                <dl className="mt-4 space-y-4">
                  <QuickFact icon={Clock} label="Duration" value={course.duration} />
                  <QuickFact icon={Wallet} label="Fee" value={course.fee} />
                  <QuickFact
                    icon={BadgeCheck}
                    label="Entry type"
                    value={`${course.level} · ${course.commission}`}
                  />
                  <QuickFact
                    icon={School}
                    label="Who can apply"
                    value={course.gender}
                  />
                </dl>
              </div>

              <div className="mt-6 border border-slate-200 bg-[#f4f1ea] p-6">
                <h2 className="text-lg font-bold text-navy-900">
                  Not sure about your eligibility?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Talk to a counsellor. We&apos;ll give you an honest straight
                  answer before you spend anything.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href="/contact" className="w-full">
                    Get free counselling
                  </ButtonLink>
                  <ButtonLink
                    href={SITE.phoneHref}
                    variant="outline"
                    className="w-full"
                  >
                    <Phone className="h-4 w-4" />
                    Call {SITE.phone}
                  </ButtonLink>
                </div>
              </div>

              {course.officialSite ? (
                <a
                  href={course.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 border border-slate-200 bg-white p-4 text-sm font-semibold text-navy-900 transition-colors hover:border-army-300"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 text-army-600" />
                  Official recruitment website
                </a>
              ) : null}

              <Link
                href={`/${force.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-army-700 hover:text-army-900"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to {force.shortTitle} courses
              </Link>
            </Reveal>
          </div>

          {/* Related courses */}
          {related.length > 0 ? (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <h2 className="text-2xl font-bold text-navy-900">
                Other {force.shortTitle} entries
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Not the one you were looking for? Check the rest of the{" "}
                {force.title} entries.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((c) => (
                  <CourseCard key={c.slug} course={c} force={force.slug} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-navy-900">
        {value}
      </p>
    </div>
  );
}

function QuickFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-semibold text-navy-900">{value}</dd>
      </div>
    </div>
  );
}
