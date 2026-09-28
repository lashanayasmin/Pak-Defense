import Link from "next/link";
import { ArrowRight, Award, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CourseIcon } from "@/lib/course-icons";
import { FORCE_THEME } from "@/lib/force-theme";
import type { Course, ForceSlug } from "@/lib/content/types";

const AUDIENCE_LABEL: Record<Course["audience"], string> = {
  male: "Male",
  female: "Female",
  both: "Male & Female",
};

export function CourseCard({
  course,
  force,
}: {
  course: Course;
  force: ForceSlug;
}) {
  const tone = FORCE_THEME[force];

  return (
    <article
      className={`card-lift card-sheen group relative flex h-full flex-col rounded-xl border border-slate-200 bg-gradient-to-b shadow-sm transition-[border-color,box-shadow] ${tone.wash} ${tone.hoverBorder} ${tone.hoverShadow}`}
    >
      {/* Accent bar across the top of the card. */}
      <span aria-hidden className={`block h-1.5 w-full ${tone.bar}`} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`icon-tilt flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ${tone.tile} ${tone.tileRing}`}
          >
            <CourseIcon name={course.icon} className={`h-6 w-6 ${tone.iconInk}`} />
          </span>
          <Badge variant={tone.chip}>{course.level}</Badge>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-navy-900">
          {course.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {course.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <Badge
            variant={course.audience === "female" ? "female" : "outline"}
          >
            {AUDIENCE_LABEL[course.audience]}
          </Badge>
          {course.classEntry ? (
            <Badge variant="outline">Class {course.classEntry}</Badge>
          ) : (
            <Badge variant="outline">{course.commission}</Badge>
          )}
        </div>

        <dl className="mt-5 space-y-2 border-t border-slate-200/70 pt-4 text-xs">
          <div className="flex items-start gap-2">
            <dt className="sr-only">Age limit</dt>
            <Users
              aria-hidden
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400"
            />
            <dd className="font-semibold uppercase tracking-wider text-slate-500">
              {course.ageLimit}
            </dd>
          </div>
          {course.campus ? (
            <div className="flex items-start gap-2">
              <dt className="sr-only">Campus</dt>
              <MapPin
                aria-hidden
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400"
              />
              <dd className="font-medium text-slate-500">{course.campus}</dd>
            </div>
          ) : null}
          <div className="flex items-start gap-2">
            <dt className="sr-only">Duration</dt>
            <Award
              aria-hidden
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400"
            />
            <dd className="font-medium text-slate-500">{course.duration}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${tone.link} underline-link`}
          >
            View details
          </span>
          <ArrowRight
            aria-hidden
            className={`h-4 w-4 ${tone.link} transition-transform duration-300 group-hover:translate-x-1.5`}
          />
        </div>
      </div>

      {/* The whole card is one link. */}
      <Link
        href={`/${force}/${course.slug}`}
        className={`card-link absolute inset-0 z-10 rounded-xl ${tone.link}`}
      >
        <span className="sr-only">View details for {course.name}</span>
      </Link>
    </article>
  );
}
