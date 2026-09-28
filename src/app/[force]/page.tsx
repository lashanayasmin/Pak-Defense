import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Phone, Sparkles, Target, UserRound, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CourseCard } from "@/components/course-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";
import { FORCE_THEME } from "@/lib/force-theme";
import { getCourseGroups, getCourseStats } from "@/lib/content/course-groups";
import { getForce, getForceCourses, FORCES } from "@/lib/content/forces";

interface Props {
  params: Promise<{ force: string }>;
}

export function generateStaticParams() {
  return FORCES.map((f) => ({ force: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { force } = await params;
  const data = getForce(force);
  if (!data) return {};
  return {
    title: `${data.shortTitle} Courses`,
    description: data.description,
  };
}

export default async function ForcePage({ params }: Props) {
  const { force: forceSlug } = await params;
  const force = getForce(forceSlug);
  if (!force) notFound();

  const courses = getForceCourses(forceSlug);
  const groups = getCourseGroups(force.slug, courses);
  const stats = getCourseStats(courses);
  const theme = FORCE_THEME[force.slug];

  const statTiles = [
    { icon: Sparkles, value: stats.total, label: "Entries listed" },
    { icon: Target, value: stats.officer, label: "Officer paths" },
    { icon: Users, value: stats.enlisted, label: "Enlisted & cadet" },
    { icon: UserRound, value: stats.openToWomen, label: "Open to women" },
  ];

  return (
    <>
      <PageHero
        tone={theme.hero}
        eyebrow={force.title}
        title={`${force.shortTitle} Courses & Programs`}
        description={force.tagline}
      />

      {/* Identity strip + stat tiles */}
      <section className="-mt-px border-b border-slate-200 bg-[#f4f1ea] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal
            direction="up"
            className="flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-1 ${theme.softBg} ${theme.softRing}`}
            >
              <Image
                src={force.image}
                alt={force.title}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                {force.title}
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                {force.description}
              </p>
            </div>
          </Reveal>

          <Reveal
            stagger
            className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4"
          >
            {statTiles.map((tile) => (
              <div
                key={tile.label}
                className="flex items-center gap-3.5 border border-slate-200 bg-white px-4 py-4"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${theme.softBg} ${theme.softText}`}
                >
                  <tile.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="stat-value text-2xl font-extrabold text-navy-900">
                    {tile.value}
                  </p>
                  <p className="truncate text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {tile.label}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          {/* Section jump nav */}
          {groups.length > 1 ? (
            <nav
              aria-label="Jump to a section"
              className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6"
            >
              <span className="mr-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                Jump to
              </span>
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors hover:text-navy-900 ${theme.softBg} ${theme.softText}`}
                >
                  {group.title}
                  <span className="ml-1.5 text-xs opacity-70">
                    {group.courses.length}
                  </span>
                </a>
              ))}
            </nav>
          ) : null}

          {/* Grouped sections */}
          <div className="mt-12 space-y-16">
            {groups.map((group, groupIndex) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-24"
                aria-labelledby={`${group.id}-heading`}
              >
                <Reveal direction="up">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg font-extrabold ${theme.solid} ${theme.solidInk}`}
                    >
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2
                        id={`${group.id}-heading`}
                        className="text-xl font-bold text-navy-900 sm:text-2xl"
                      >
                        {group.title}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                        {group.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  stagger
                  className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {group.courses.map((course) => (
                    <CourseCard
                      key={course.slug}
                      course={course}
                      force={force.slug}
                    />
                  ))}
                </Reveal>
              </section>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-col gap-6 border border-slate-200 bg-[#f4f1ea] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-navy-900">
                Not sure which entry fits you?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                Age, education and medical standards differ from one course to
                the next. Talk to a counsellor and get an honest answer before
                you pay anything.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get free counselling</ButtonLink>
              <ButtonLink href={SITE.phoneHref} variant="outline">
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
            Back to our coaching programmes
          </Link>
        </div>
      </section>
    </>
  );
}
