import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
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

  return (
    <>
      <PageHero
        eyebrow={force.title}
        title={`${force.shortTitle} Courses & Programs`}
        description={force.tagline}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal direction="up" className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-army-50 ring-1 ring-slate-100">
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

          <div className="mt-12 space-y-4">
            {courses.map((course, index) => (
              <Reveal key={course.slug} direction="up" delay={index}>
                <Link
                  href={`/${force.slug}/${course.slug}`}
                  className="hover-lift group flex flex-col gap-3 border border-slate-200 bg-white p-6 transition-colors hover:border-army-300 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h2 className="text-lg font-bold text-navy-900 group-hover:text-army-700">
                      {course.name}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600">
                      {course.tagline}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-army-700">
                      <Users className="h-4 w-4" />
                      {course.gender}
                      <span className="text-slate-300">·</span>
                      {course.ageLimit}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-army-700 group-hover:text-army-900">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
