export type ForceSlug = "army" | "navy" | "airforce";

export interface Course {
  slug: string;
  name: string;
  tagline: string;
  description: string;

  /** Who can apply — age, gender, education, nationality, physical. */
  eligibility: string[];

  /** Designated for men only (armed forces of Pakistan are male-only for these tracks). */
  gender: string;

  /** Displayed as a prominent line on the detail page. */
  ageLimit: string;

  education: string;
  physical: string;
  nationality: string;

  /** Benefits / purpose — why join. */
  benefits: string[];

  /** Application process — ordered steps. */
  steps: string[];

  duration: string;
  fee: string;
  documents: string[];

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

const ARMY_COURSES: Course[] = [
  {
    slug: "pma-long-course",
    name: "PMA Long Course",
    tagline: "The 2-year path to becoming a Commissioned Officer in the Pakistan Army.",
    description:
      "Full preparation for the PMA Long Course — the standard entry for graduate commissioning into the Pakistan Army. We cover the written tests, initial evaluation, ISSB, and interview stages with real mock days.",
    eligibility: [
      "Pakistani male citizens (including Northern Areas & Gilgit-Baltistan).",
      "Age between 17 and 22 years at the time of the initial examination.",
      "Graduation (or awaiting result) from a recognised university/institute.",
      "Minimum height of 5 ft 4 in (162.5 cm); chest not less than 30 in (76 cm) with a 1.5 in expansion.",
      "Medically and physically fit as per Army standards.",
    ],
    gender: "For male candidates",
    ageLimit: "17 – 22 years",
    education:
      "Graduation (BA/BSc or equivalent) from a recognised institution. Final-year students may also apply.",
    physical:
      "Height 5 ft 4 in minimum · chest 30 in with 1.5 in expansion · medically fit.",
    nationality: "Pakistan",
    benefits: [
      "Commission as an officer in the Pakistan Army's elite leadership core.",
      "Permanent career with pension, housing and medical benefits.",
      "Progression into specialized branches (Infantry, Armoured, Artillery, etc.).",
      "No tuition; government-sponsored training at PMA Kakul.",
    ],
    steps: [
      "Initial written test (Intelligence, Academic, and General Knowledge).",
      "Preliminary Medical Examination (PME).",
      "Initial Interview at the Army Selection & Recruitment Centre (AS&RC).",
      "ISSB (Inter Services Selection Board) — psych, GTO and interview.",
      "Final medical board and joining at PMA Kakul.",
    ],
    duration: "2 years at PMA Kakul (after selection)",
    fee: "Free — government-funded training",
    documents: [
      "CNIC / B-Form (original + copies)",
      "Last educational certificates & DMC",
      "Domicile certificate",
      "Recent passport-size photographs",
      "Attested copies as per AS&RC checklist",
    ],
    summary:
      "You are within the 17–22 age range with graduation — most likely eligible.",
  },
  {
    slug: "short-service-commission",
    name: "Short Service Commission (SSC)",
    tagline: "A shorter, specialized officer entry — technical and executive branches.",
    description:
      "Preparation for the Short Service Commission intake — a focused path into specialized technical and executive branches of the Pakistan Army, typically with shorter initial commitment than the PMA Long Course.",
    eligibility: [
      "Pakistani male citizens between 18 and 27 years (upper limit varies by branch).",
      "Graduation (or engineering for technical branches) from a recognised university.",
      "Minimum height of 5 ft 4 in for men; chest 30 in with 1.5 in expansion.",
      "Medically and physically fit as per branch requirements.",
    ],
    gender: "For male candidates",
    ageLimit: "18 – 27 years (branch dependent)",
    education:
      "Graduation, or BSc Engineering for technical/engineering branches.",
    physical:
      "Height 5 ft 4 in minimum · medically and physically fit per branch.",
    nationality: "Pakistan",
    benefits: [
      "Faster path to a commission in a specialised field.",
      "Competitive pay package and allowances from day one.",
      "Opportunity to convert to a permanent commission subject to merit.",
      "Valuable leadership experience for technical graduates.",
    ],
    steps: [
      "Online registration and initial screening.",
      "Initial written and academic assessment.",
      "Physical / medical preliminary check.",
      "ISSB and final selection board.",
      "Training at the relevant branch school / PMA.",
    ],
    duration: "24 weeks of basic military training (course length varies)",
    fee: "Free — government-funded",
    documents: [
      "CNIC / B-Form",
      "Matric, FSc/Intermediate and graduation certificates",
      "Domicile",
      "Passport-size photographs",
      "University transcripts (for technical branches)",
    ],
    summary:
      "Aged 18–27 with a degree — highly likely to meet basic eligibility.",
  },
  {
    slug: "soldier-joining",
    name: "Soldier (General Duty)",
    tagline: "Direct entry into the ranks of the Pakistan Army.",
    description:
      "Coaching and preparation for Soldier (General Duty) recruitment — helping young men meet the written test, physical and interview standards for enlisting in the Pakistan Army.",
    eligibility: [
      "Pakistani male citizens.",
      "Age between 17½ and 23 years.",
      "Matriculation (10th grade) or equivalent from a recognised board.",
      "Height at least 5 ft 4 in (162.5 cm); chest 30 in with 1.5 in expansion.",
      "Medically fit with no criminal record.",
    ],
    gender: "For male candidates",
    ageLimit: "17½ – 23 years",
    education: "Matriculation (10th grade) or equivalent; FSc is a bonus.",
    physical:
      "Height 5 ft 4 in minimum · chest 30 in (with expansion) · run and physical standards.",
    nationality: "Pakistan",
    benefits: [
      "A stable government career with pension and post-service benefits.",
      "Free healthcare, housing and schooling allowances.",
      "Opportunity to rise through the ranks with further courses.",
      "Prestige and discipline of serving in the Army.",
    ],
    steps: [
      "Walk-in registration at the nearest Recruitment & Selection Centre.",
      "Written test (Maths, English, Urdu, GK).",
      "Physical/medical examination.",
      "Final interview and merit list.",
      "Joining and basic military training.",
    ],
    duration: "Varies on role; initial training ~6 months",
    fee: "Free — no cost to apply",
    documents: [
      "CNIC / B-Form",
      "Matric certificate & DMC",
      "Domicile",
      "Passport-size photographs",
    ],
    summary:
      "Aged 17½–23 with Matric — check height/physical before you apply.",
  },
];

const NAVY_COURSES: Course[] = [
  {
    slug: "pn-cadet",
    name: "PN Cadet (Operation Branch)",
    tagline: "Commission as a Pakistan Navy officer in the operations/executive branch.",
    description:
      "Preparation for the PN Cadet entry — the core commissioning path into the Pakistan Navy's Operations branch. We cover the initial tests, ISSB and naval interview stages thoroughly.",
    eligibility: [
      "Pakistani male citizens.",
      "Age between 16½ and 21 years (as per current PN policy).",
      "FSc Pre-Engineering / Pre-Medical with at least 60% marks (varies by branch).",
      "Minimum height of 5 ft 4 in for men.",
      "Medically and physically fit for sea service.",
    ],
    gender: "For male candidates",
    ageLimit: "16½ – 21 years",
    education:
      "FSc (Pre-Engineering/Pre-Medical) or equivalent with at least 60% marks.",
    physical:
      "Height 5 ft 4 in minimum · good MS (medical standard) and eye-sight.",
    nationality: "Pakistan",
    benefits: [
      "Officer commission in a respected maritime force.",
      "Travel and sea service experience worldwide.",
      "Free training and competitive pay after commission.",
      "Clear career ladder into command and specialized branches.",
    ],
    steps: [
      "Registration and initial written test (intelligence & academic).",
      "Preliminary medical examination.",
      "Initial interview at the Navy Selection & Recruitment Centre.",
      "ISSB (with Naval PN screening).",
      "Final medical and joining at PNS Bahadur.",
    ],
    duration: "2 years at Pakistan Naval Academy (PNS Bahadur)",
    fee: "Free — government-funded",
    documents: [
      "CNIC / B-Form",
      "Matric & FSc certificates",
      "Domicile",
      "Passport-size photographs",
    ],
    summary:
      "Aged 16½–21 with strong FSc marks — check the exact branch requirement.",
  },
  {
    slug: "short-service-naval",
    name: "Navy Short Service Commission (SSC)",
    tagline: "Specialized officer entry — technical, supply and education branches.",
    description:
      "Coaching for the Pakistan Navy's Short Service Commission — an accelerated route into technical, supply/branches and education roles for graduates.",
    eligibility: [
      "Pakistani male citizens.",
      "Age between 20 and 32 years (branch dependent).",
      "Graduation, or BSc/BE for technical branches, from a recognised university.",
      "Minimum height of 5 ft 4 in for men.",
      "Medically and physically fit for naval duties.",
    ],
    gender: "For male candidates",
    ageLimit: "20 – 32 years (branch dependent)",
    education: "Graduation, or BSc/BE for technical and supply branches.",
    physical:
      "Height 5 ft 4 in minimum · medically fit · good eyesight for seagoing roles.",
    nationality: "Pakistan",
    benefits: [
      "Specialised commission without the full cadet pathway.",
      "Competitive salary and allowances immediately.",
      "Career options in marine engineering, IT, logistics and more.",
      "Strong professional qualifications recognised in civilian careers.",
    ],
    steps: [
      "Online registration for the relevant branch.",
      "Academic and technical assessment.",
      "Medical and physical screening.",
      "Naval interview and selection board.",
      "Training at the relevant naval training establishment.",
    ],
    duration: "24 weeks basic training + branch course",
    fee: "Free — government-funded",
    documents: [
      "CNIC / B-Form",
      "Graduation / engineering certificates & transcripts",
      "Domicile",
      "Passport-size photographs",
    ],
    summary:
      "Aged 20–32 with a degree — confirm your branch's specific age window.",
  },
];

const AIRFORCE_COURSES: Course[] = [
  {
    slug: "gd-pilot",
    name: "GD Pilot (PAF)",
    tagline: "Become a fighter pilot in the Pakistan Air Force.",
    description:
      "Intensive preparation for the PAF GD Pilot selection — covering initial tests, ISSB psych and GTO, and the demanding pilot aptitude and medical boards.",
    eligibility: [
      "Pakistani male citizens.",
      "Age between 17 and 22 years (as per current PAF policy).",
      "FSc (Pre-Engineering/Pre-Medical) or A-Levels with strong marks.",
      "Minimum height of 5 ft 4 in; strict medical and eyesight standards.",
      "Exceptional physical fitness and aptitude for flying.",
    ],
    gender: "For male candidates",
    ageLimit: "17 – 22 years",
    education:
      "FSc Pre-Engineering/Pre-Medical or A-Levels (with O-Level equivalence) at high marks.",
    physical:
      "Height 5 ft 4 in minimum · Category 'A' medical and 6/6 eyesight standard.",
    nationality: "Pakistan",
    benefits: [
      "One of the most prestigious officer roles in Pakistan.",
      "Flight training at no cost with guaranteed flying career.",
      "Attractive pay, pension and flying allowances.",
      "Elite status as a fighter/transport pilot in the PAF.",
    ],
    steps: [
      "Initial written test (intelligence, English, maths, GK).",
      "Physical and preliminary medical screening.",
      "ISSB psychological and GTO testing.",
      "Pilot Aptitude Test (for GD Pilot candidates).",
      "Final medical board and interview at PAF Recruitment & Selection.",
    ],
    duration: "Approx. 5 years of flight + officer training",
    fee: "Free — government-funded",
    documents: [
      "CNIC / B-Form",
      "Matric & FSc/A-Level certificates",
      "Domicile",
      "Passport-size photographs",
    ],
    summary:
      "Aged 17–22 with strong FSc — flying aptitude and medical are decisive.",
  },
  {
    slug: "paf-specialist",
    name: "PAF Specialist / Support Branches",
    tagline: "Non-pilot officers — engineering, logistics, admin and more.",
    description:
      "Preparation for PAF officer entry outside the cockpit — engineering, air defence, logistics and administration branches, ideal for graduates and engineers.",
    eligibility: [
      "Pakistani male citizens.",
      "Age between 18 and 26 years (branch dependent).",
      "Graduation, or BSc/BE for engineering branches.",
      "Minimum height of 5 ft 4 in; good medical and eyesight standards.",
      "Medically and physically fit for service.",
    ],
    gender: "For male candidates",
    ageLimit: "18 – 26 years (branch dependent)",
    education: "Graduation or BSc/BE for technical/engineering branches.",
    physical:
      "Height 5 ft 4 in minimum · medically fit · good eyesight.",
    nationality: "Pakistan",
    benefits: [
      "Officer commission in a prestigious air force.",
      "Specialised technical and management roles.",
      "Competitive pay, allowances and pension.",
      "Career opportunities in aviation engineering and logistics.",
    ],
    steps: [
      "Online registration and initial screening.",
      "Academic / engineering assessment.",
      "Medical and physical examination.",
      "ISSB and selection interview.",
      "Final medical board and training at PAF Academy.",
    ],
    duration: "Variable by branch — officer training + technical course",
    fee: "Free — government-funded",
    documents: [
      "CNIC / B-Form",
      "Graduation / engineering certificates & transcripts",
      "Domicile",
      "Passport-size photographs",
    ],
    summary:
      "Aged 18–26 with a degree — confirm your branch's precise eligibility.",
  },
];

export const FORCES: Force[] = [
  {
    slug: "army",
    title: "Pakistan Army",
    shortTitle: "Army",
    tagline: "PMA Long Course, initial tests, ISSB, GTO and interview prep for commissioning.",
    description:
      "The Pakistan Army offers multiple commissioning and rank entry paths. We prepare candidates for every stage — from the written initial tests to the ISSB and final interviews.",
    image: "/images/army.png",
    courses: ARMY_COURSES,
  },
  {
    slug: "navy",
    title: "Pakistan Navy",
    shortTitle: "Navy",
    tagline: "PN Cadet, Short Service Commission and naval discipline training.",
    description:
      "The Pakistan Navy recruits officers through the PN Cadet path and specialist Short Service Commissions. We coach candidates for the written tests, ISSB and naval interviews.",
    image: "/images/navy.svg",
    courses: NAVY_COURSES,
  },
  {
    slug: "airforce",
    title: "Pakistan Air Force",
    shortTitle: "Air Force",
    tagline: "GD Pilot, PAF initial tests, ISSB psych and GTO task preparation.",
    description:
      "From GD Pilot to specialist branches, the Pakistan Air Force has demanding selection standards. We train candidates for initial tests, ISSB and pilot aptitude evaluations.",
    image: "/images/airforce.svg",
    courses: AIRFORCE_COURSES,
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
