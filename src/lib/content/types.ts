export type ForceSlug = "army" | "navy" | "airforce" | "colleges";

/** Broad entry type, shown as a badge on every card. */
export type CourseLevel = "Officer" | "Soldier" | "Airman" | "Rating" | "Cadet";

/** Commission type, shown as a badge on every card. */
export type CommissionType =
  | "Regular Commission"
  | "Short Service Commission"
  | "Direct Short Service"
  | "Commissioned"
  | "Enlisted"
  | "Cadet";

/** Key into the icon registry (see @/lib/course-icons). */
export type CourseIconKey =
  | "graduation-cap"
  | "shield"
  | "plane"
  | "ship"
  | "anchor"
  | "stethoscope"
  | "heart-pulse"
  | "baby"
  | "user-round"
  | "users"
  | "landmark"
  | "school"
  | "wrench"
  | "cpu"
  | "book-open"
  | "scale"
  | "radio"
  | "package"
  | "compass"
  | "mountain"
  | "hard-hat";

export interface Course {
  slug: string;
  name: string;
  tagline: string;
  description: string;

  /** Lucide icon key rendered at the top of the card. */
  icon: CourseIconKey;

  /** Officer / Soldier / Airman / Rating / Cadet. */
  level: CourseLevel;

  /** Regular commission, short service, enlisted, cadet, etc. */
  commission: CommissionType;

  /** Who can apply: age, gender, education, nationality, physical. */
  eligibility: string[];

  /** Displayed as a prominent line on the detail page. */
  gender: string;

  /** Drives the male/female badge on the card. */
  audience: "male" | "female" | "both";

  ageLimit: string;
  education: string;
  physical: string;
  nationality: string;

  /** Typical reasons people do not qualify. */
  notEligible: string[];

  /** Benefits / purpose: why join. */
  benefits: string[];

  /** Application process: ordered steps. */
  steps: string[];

  duration: string;
  fee: string;
  documents: string[];

  /** Where the training happens (colleges and campuses only). */
  campus?: string;

  /** Class being entered (cadet and military colleges only). */
  classEntry?: string;

  /** Which service the college feeds into (colleges only). */
  stream?: string;

  /** Manual section override, for entries the automatic grouping can't tell
   *  apart (currently the three military colleges). */
  group?: string;

  /** Official recruitment / admissions website. */
  officialSite?: string;

  /** Short flag used to show a clear "you can / cannot apply" summary. */
  summary: string;
}

export interface Force {
  slug: ForceSlug;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  courses: Course[];
}
