import type { Course, Force, ForceSlug } from "@/lib/content/types";
import { ARMY_COURSES } from "@/lib/content/army";
import { NAVY_COURSES } from "@/lib/content/navy";
import { AIRFORCE_COURSES } from "@/lib/content/airforce";
import { COLLEGE_COURSES } from "@/lib/content/colleges";

export type { Course, Force, ForceSlug };
export type { CourseIconKey, CourseLevel, CommissionType } from "@/lib/content/types";

export const FORCES: Force[] = [
  {
    slug: "army",
    title: "Pakistan Army",
    shortTitle: "Army",
    tagline:
      "PMA Long Course, Technical Cadet Course, graduate and direct commissions, Lady Cadet Course, AFNS and soldier entries.",
    description:
      "The Pakistan Army offers multiple commissioning and rank entry paths, for men and women. We prepare candidates for every stage from the written initial tests to the ISSB, the interview and the final medical board.",
    image: "/images/army.png",
    courses: ARMY_COURSES,
  },
  {
    slug: "navy",
    title: "Pakistan Navy",
    shortTitle: "Navy",
    tagline:
      "PN Cadet in Operations, Supply and Engineering, Navy SSC for graduates and women, ratings and merchant navy.",
    description:
      "The Pakistan Navy recruits officers through the PN Cadet path and specialist Short Service Commissions, and enlisted personnel through ratings. We coach candidates for the written tests, ISSB and naval interviews.",
    image: "/images/navy.svg",
    courses: NAVY_COURSES,
  },
  {
    slug: "airforce",
    title: "Pakistan Air Force",
    shortTitle: "Air Force",
    tagline:
      "GD Pilot, Aeronautical Engineering, air defence, logistics, SSC branches, Woman Officer Cadet and airman entries.",
    description:
      "From GD Pilot to the Woman Officer Cadet programme, the Pakistan Air Force has demanding selection standards. We train candidates for initial tests, ISSB, pilot aptitude and the medical boards.",
    image: "/images/airforce.svg",
    courses: AIRFORCE_COURSES,
  },
  {
    slug: "colleges",
    title: "Military & Cadet Colleges",
    shortTitle: "Colleges",
    tagline:
      "PMA Kakul, PAF Air Academy, PNS Bahadur, military colleges and cadet colleges: entry age, class and how to apply.",
    description:
      "These are the country's principal officer-training academies and cadet colleges. Entry age, class, education and medical standards vary by college, so always verify the admissions notice before you apply.",
    image: "/images/logo.svg",
    courses: COLLEGE_COURSES,
  },
];

export function getForce(slug: string): Force | undefined {
  return FORCES.find((f) => f.slug === slug);
}

export function getForceCourses(slug: string): Course[] {
  return getForce(slug)?.courses ?? [];
}

export function getCourse(forceSlug: string, courseSlug: string): Course | undefined {
  return getForceCourses(forceSlug).find((c) => c.slug === courseSlug);
}

/** Every course on the site, paired with the category it belongs to. */
export function getAllCourses(): { force: Force; course: Course }[] {
  return FORCES.flatMap((force) =>
    force.courses.map((course) => ({ force, course }))
  );
}
