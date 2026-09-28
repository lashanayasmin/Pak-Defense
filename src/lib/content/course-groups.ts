import type { Course, ForceSlug } from "@/lib/content/types";

/* Each category is split into sections so the listing page reads like a menu
   instead of one long grid. Rules are evaluated top to bottom and the last rule
   always catches everything, so a new course can never fall off the page. */

export interface CourseGroup {
  id: string;
  title: string;
  blurb: string;
  courses: Course[];
}

interface GroupRule {
  id: string;
  title: string;
  blurb: string;
  when: (course: Course) => boolean;
}

const CATCH_ALL = () => true;

const RULES: Record<ForceSlug, GroupRule[]> = {
  army: [
    {
      id: "regular",
      title: "Regular Commission",
      blurb:
        "Long-service officer careers: the PMA and Technical Cadet courses, the Lady Cadet Course, Lowar officers and the Army Medical Cadet Corps.",
      when: (c) => c.commission === "Regular Commission",
    },
    {
      id: "short-service",
      title: "Short Service & Direct Commission",
      blurb:
        "Fixed-term and direct entries for graduates and post-graduates, including graduate SSC, direct short service, AFNS and the Army Medical Corps.",
      when: (c) => c.level === "Officer",
    },
    {
      id: "enlisted",
      title: "Soldiers & Junior Commissioned",
      blurb:
        "Enlisted and NCO paths with the lowest entry age. You start earning sooner and can still be promoted through the ranks.",
      when: CATCH_ALL,
    },
  ],
  navy: [
    {
      id: "regular",
      title: "PN Cadet — Regular Commission",
      blurb:
        "The main route to a permanent naval commission. Four years at PNS Bahadur across the Operations, Supply, Engineering and Medical branches.",
      when: (c) => c.commission === "Regular Commission",
    },
    {
      id: "short-service",
      title: "Short Service Commission",
      blurb:
        "For serving officers looking for a sea posting, and for women graduates who want a naval career on SSC terms.",
      when: (c) => c.level === "Officer",
    },
    {
      id: "enlisted",
      title: "Ratings & Merchant Navy",
      blurb:
        "Non-officer sea entries: naval ratings at sea, plus the merchant navy cadet route for a career in the commercial fleet.",
      when: CATCH_ALL,
    },
  ],
  airforce: [
    {
      id: "regular",
      title: "Officers — Regular Commission",
      blurb:
        "The flying and ground officer paths: General Duty pilots, aeronautical engineers, air defence, admin, logistics and the Woman Officer Cadet programme.",
      when: (c) => c.commission === "Regular Commission",
    },
    {
      id: "short-service",
      title: "Short Service Commission",
      blurb:
        "Graduate entries into the specialist PAF branches, plus the supplementary pilot course for candidates who clear the GD Pilot test first.",
      when: (c) => c.level === "Officer",
    },
    {
      id: "airmen",
      title: "Airmen",
      blurb:
        "Enlisted air force careers in technical trades or general duty, with the shortest training of any entry on this page.",
      when: CATCH_ALL,
    },
  ],
  colleges: [
    {
      id: "military-colleges",
      title: "Military Colleges",
      blurb:
        "Boarding schools that run from Class 8th upward. Cadets are school-aged here, and the entry is by merit test, interview and medical.",
      when: (c) => c.group === "military-colleges",
    },
    {
      id: "academies",
      title: "Officer Training Academies",
      blurb:
        "The three academies that commission officers: PMA Kakul for the Army, the PAF Air Academy at Risalpur, and PNS Bahadur for the Navy.",
      when: (c) => c.level === "Officer",
    },
    {
      id: "girls",
      title: "Girls Cadet College",
      blurb:
        "A residential cadet programme for girls, the only entry on this page that is exclusively for female candidates.",
      when: (c) => c.audience === "female",
    },
    {
      id: "cadet",
      title: "Cadet Colleges",
      blurb:
        "Middle-school cadet colleges run by the Army, Navy and Air Force. Most start at Class 6th or 7th, and admission is on open merit.",
      when: CATCH_ALL,
    },
  ],
};

/** First match wins: a course joins the first section whose rule it satisfies
    and is then removed, so nothing is ever listed twice. */
export function getCourseGroups(force: ForceSlug, courses: Course[]): CourseGroup[] {
  const groups: CourseGroup[] = [];
  let remaining = [...courses];

  for (const rule of RULES[force]) {
    const matched = remaining.filter(rule.when);
    if (matched.length === 0) continue;

    groups.push({ id: rule.id, title: rule.title, blurb: rule.blurb, courses: matched });

    const claimed = new Set(matched);
    remaining = remaining.filter((course) => !claimed.has(course));
  }

  return groups;
}

export interface CourseStats {
  total: number;
  officer: number;
  enlisted: number;
  openToWomen: number;
}

export function getCourseStats(courses: Course[]): CourseStats {
  return {
    total: courses.length,
    officer: courses.filter((c) => c.level === "Officer").length,
    enlisted: courses.filter((c) => c.level !== "Officer").length,
    openToWomen: courses.filter((c) => c.audience !== "male").length,
  };
}
