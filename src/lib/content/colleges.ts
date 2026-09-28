import type { Course } from "@/lib/content/types";

/* Shared building blocks: cadet colleges run the same entry pattern, so the
   repeated parts live here and each college only declares what is unique. */

const CADET_PHYSICAL =
  "Height 5 ft 4 in minimum · chest 30 in with 1.5 in expansion · 1.6 km run, push-ups, sit-ups and chin-ups.";

const CADET_DOCUMENTS = [
  "B-Form / CNIC and NADRA smart card",
  "Previous class certificate and DMC",
  "Matric certificate (on later entries)",
  "Domicile certificate",
  "Passport-size photographs",
];

const ACADEMY_DOCUMENTS = [
  "B-Form / CNIC and NADRA smart card",
  "Matric and FSc / A-Level or degree certificates with DMC",
  "Domicile certificate",
  "Passport-size photographs",
  "Equivalence or registration certificate where applicable",
];

function applySteps(source: string): string[] {
  return [
    `Get the prospectus and admission form from ${source}, or collect it from the college office.`,
    "Fill the form carefully and submit it with the required documents before the deadline.",
    "Sit the entry test: English, mathematics, science, current affairs and general awareness, at the level of the class applied for.",
    "Clear the physical efficiency test, then the interview and medical examination.",
    "Await the merit list and confirm admission by paying the fees within the stated date.",
  ];
}

const ACADEMY_DEFAULTS = {
  level: "Officer",
  commission: "Regular Commission",
  nationality: "Pakistan",
} satisfies Partial<Course>;

const CADET_DEFAULTS = {
  level: "Cadet",
  commission: "Cadet",
  nationality: "Pakistan",
  icon: "school",
  physical: CADET_PHYSICAL,
  documents: CADET_DOCUMENTS,
  steps: applySteps("the college website"),
  audience: "male",
  gender: "For male candidates",
  ageLimit: "12 – 14 years (Class 6th entry)",
  education:
    "Passed Class 5th for Class 6th entry; passed Class 7th for Class 8th entry.",
  classEntry: "Class 6th / 7th / 8th",
  duration: "Varies by entry class, up to Class 12th",
  fee: "As per the college's annual fee notice",
} satisfies Partial<Course>;

/** Fields the shared academy defaults fill in for you. */
type AcademyEntry = Omit<Course, keyof typeof ACADEMY_DEFAULTS>;

function academy(input: AcademyEntry): Course {
  return { ...ACADEMY_DEFAULTS, ...input };
}

/** Cadets can override any of the shared defaults when a college differs. */
type CadetEntry = Omit<Course, keyof typeof CADET_DEFAULTS> &
  Partial<Pick<Course, keyof typeof CADET_DEFAULTS>>;

function cadet(input: CadetEntry): Course {
  return { ...CADET_DEFAULTS, ...input };
}

export const COLLEGE_COURSES: Course[] = [
  /* ---------------- Officer training academies ---------------- */
  academy({
    slug: "pma-kakul",
    name: "Pakistan Military Academy (PMA) Kakul",
    tagline: "The Army's officer academy: two years at Kakul, Regular Commission.",
    description:
      "PMA Kakul is the Pakistan Army's officer training academy. Cadets arrive after clearing the initial test and ISSB, spend two years in academic, military and physical training, and are commissioned into a Regular Commission in a corps of the Army. It is the destination of the PMA Long Course and the Technical Cadet Course.",
    icon: "landmark",
    stream: "Army",
    campus: "Abbottabad (KPK)",
    classEntry: "FA / FSc / O-A Level",
    eligibility: [
      "Male citizens of Pakistan, including Gilgit-Baltistan and Azad Kashmir.",
      "Unmarried at the time of joining, age 17 to 22 years.",
      "FSc (Pre-Engineering / Pre-Medical) or FA, or O/A Levels, from a recognised board.",
      "Height at least 5 ft 4 in with chest 30 in and 1.5 in expansion.",
      "Medically and physically fit as per Army standards.",
    ],
    audience: "male",
    gender: "For male candidates",
    ageLimit: "17 – 22 years",
    education: "FSc (Pre-Engineering / Pre-Medical) or FA, or O/A Levels.",
    physical: CADET_PHYSICAL,
    notEligible: [
      "Married candidates.",
      "Anyone outside the 17 to 22 year age window.",
      "Below the height or chest minimum, or medically unfit.",
    ],
    benefits: [
      "Two years of fully funded officer training at one of the region's finest military academies.",
      "Regular Commission into a fighting or support corps of the Pakistan Army.",
      "Academic degree alongside military, physical and leadership training.",
      "Officer rank, pension, housing, medical care and children's education benefits.",
    ],
    steps: [
      "Register at joinpakarmy.gov.pk for the PMA Long Course or Technical Cadet Course.",
      "Clear the initial written test at the nearest Army Selection & Recruitment Centre.",
      "Pass the preliminary medical examination and the initial interview.",
      "Clear the four-day ISSB assessment at Kohat, Malir or Gujranwala.",
      "Final medical board and reporting to PMA Kakul for the two-year course.",
    ],
    duration: "2 years at PMA Kakul",
    fee: "Free (fully government-funded)",
    documents: ACADEMY_DOCUMENTS,
    officialSite: "https://joinpakarmy.gov.pk",
    summary:
      "Male candidate, unmarried, aged 17 to 22 with FSc or FA? PMA Kakul is where the PMA Long Course and Technical Cadet Course cadets are trained.",
  }),
  academy({
    slug: "paf-air-academy",
    name: "PAF Air Academy, Risalpur",
    tagline: "Flying and technical officer training for the Pakistan Air Force.",
    description:
      "The PAF Air Academy at Risalpur trains officer cadets for the Pakistan Air Force. Pilot cadets fly with the College of Aeronautical Engineering, while technical and ground officer cadets train in their respective branches. Every route ends with commissioning and a posting to a PAF unit or base.",
    icon: "plane",
    stream: "Air Force",
    campus: "Risalpur, Attock (Punjab)",
    classEntry: "FSc / O-A Level",
    eligibility: [
      "Pakistani citizens; several courses are open to male and female candidates.",
      "Unmarried at the time of joining for the permanent commission courses.",
      "Age 16 to 22 years on the advertised cut-off date.",
      "FSc Pre-Engineering, Pre-Medical or Computer Science, or A-Level with Physics and Maths or Biology, at the aggregate stated in the advertisement.",
      "Height 5 ft 4 in for male candidates, 4 ft 10 in for female candidates, plus medical and eyesight standards.",
    ],
    audience: "both",
    gender: "Male and female candidates (course dependent)",
    ageLimit: "16 – 22 years",
    education: "FSc Pre-Engineering / Pre-Medical / Computer Science or equivalent A-Level.",
    physical:
      "Height 5 ft 4 in for male candidates, 4 ft 10 in for female candidates · 6/6 eyesight for pilot courses · physical efficiency test.",
    notEligible: [
      "Married candidates for the permanent commission courses.",
      "Anyone who has passed the 22nd birthday at the initial test.",
      "Anyone who fails the Pilot Aptitude Test or the medical board.",
    ],
    benefits: [
      "Four years of fully funded officer training in the air force.",
      "Pilot cadets fly with the College of Aeronautical Engineering; technical cadets specialise in engineering, air defence, admin and logistics.",
      "Commission in a prestigious air force with allowances, housing and pension.",
      "Clear progression into flying or technical appointments.",
    ],
    steps: [
      "Register online at joinpaf.gov.pk and choose your course.",
      "Clear the initial written test at the selected centre.",
      "Pass the preliminary medical and physical screening.",
      "Clear the four-day ISSB assessment at Gujranwala.",
      "Pass the Pilot Aptitude Test and final medical board where applicable.",
      "Report to PAF Academy Risalpur for four years of training.",
    ],
    duration: "4 years at PAF Academy Risalpur",
    fee: "Free (fully government-funded)",
    documents: ACADEMY_DOCUMENTS,
    officialSite: "https://joinpaf.gov.pk",
    summary:
      "Aged 16 to 22 with a strong FSc? The PAF Air Academy trains every PAF officer cadet, pilots and technical officers alike.",
  }),
  academy({
    slug: "pns-bahadur",
    name: "Pakistan Naval Academy (PNS Bahadur)",
    tagline: "Four years at sea: PN Cadet training in Karachi.",
    description:
      "The Pakistan Naval Academy at PNS Bahadur, Karachi, trains PN Cadets for the Operations, Supply and Engineering branches. Cadets complete academic and professional training, including watchkeeping and seamanship, before being commissioned for sea service.",
    icon: "ship",
    stream: "Navy",
    campus: "Karachi (Sindh)",
    classEntry: "FSc / O-A Level",
    eligibility: [
      "Pakistani male citizens; civilian candidates must be unmarried.",
      "Age 16 and a half to 21 years for civilians, 17 to 23 for serving personnel.",
      "Matric plus FSc or O/A Levels with at least 60% marks in the required subject combination.",
      "Minimum height 5 ft 4 in.",
      "Medically and physically fit for sea service.",
    ],
    audience: "male",
    gender: "For male candidates",
    ageLimit: "16½ – 21 years",
    education:
      "FSc or O/A Level with at least 60% marks in Physics, Mathematics with Chemistry / Computer Science / Statistics.",
    physical:
      "Height 5 ft 4 in minimum · swimming and physical efficiency tests · medical and eyesight standards for sea service.",
    notEligible: [
      "Married civilian candidates.",
      "Candidates below 60% marks or without the required subject combination.",
      "Anyone medically unfit for sea service.",
    ],
    benefits: [
      "Four years of fully funded naval officer training.",
      "Degree in Maritime Sciences, Supply Chain Management or an engineering degree.",
      "Sea service, foreign postings and watchkeeping certification.",
      "Permanent Commission in the Pakistan Navy with full benefits.",
    ],
    steps: [
      "Register online at joinpaknavy.gov.pk for the PN Cadet term.",
      "Clear the computer-based initial test at the chosen centre.",
      "Pass the preliminary medical examination and initial interview.",
      "Clear the Physical Efficiency Test, then the four-day ISSB.",
      "Final medical examination and merit-based selection by Naval Headquarters.",
      "Report to PNS Bahadur for four years of training.",
    ],
    duration: "4 years at the Pakistan Naval Academy",
    fee: "Free (fully government-funded)",
    documents: ACADEMY_DOCUMENTS,
    officialSite: "https://joinpaknavy.gov.pk",
    summary:
      "Male candidate, unmarried, aged 16 and a half to 21 with 60% in FSc? PNS Bahadur trains every PN Cadet who clears the selection.",
  }),

  /* ---------------- Military colleges ---------------- */
  cadet({
    slug: "military-college-jhelum",
    group: "military-colleges",
    name: "Military College Jhelum",
    tagline: "One of the oldest military schools in the world, near Sarai Alamgir.",
    description:
      "Military College Jhelum, at Sarai Alamgir in Gujrat district, is among the oldest military schools in the world and runs classes from 8th to 12th in English medium. Its cadets are prepared academically and physically for a career in the Pakistan Armed Forces.",
    stream: "Army",
    campus: "Sarai Alamgir, Jhelum (Gujrat)",
    classEntry: "Class 8th (also 9th, 10th, 11th)",
    ageLimit: "13 – 15 years (Class 8th entry)",
    education: "Passed Class 7th for Class 8th entry; other classes as per the prospectus.",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age generally 13 to 15 years for Class 8th entry; other classes vary as per the prospectus.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male boarding institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test, physical test or medical.",
    ],
    benefits: [
      "Classes 8th to 12th in a disciplined residential environment.",
      "Preparation for Armed Forces entries including the PMA route.",
      "Sports, physical training and leadership development alongside academics.",
      "A strong alumni network across the Pakistan Armed Forces.",
    ],
    summary:
      "Male candidate aged roughly 13 to 15 with Class 7th passed? Military College Jhelum is one of the oldest military schools in Pakistan.",
  }),
  cadet({
    slug: "military-college-murree",
    group: "military-colleges",
    name: "Military College Murree",
    tagline: "Boarding military college in the Murree hills, founded in 2004.",
    description:
      "Military College Murree was established in 2004 in the Murree hills and has quickly built a reputation for academics, discipline and sports. Cadets study from Class 8th upward in a residential setting designed to produce officers.",
    stream: "Army",
    campus: "Murree (Punjab)",
    classEntry: "Class 6th / 8th / 10th / 11th",
    ageLimit: "12 – 15 years (entry class dependent)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 15 years depending on the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically fit and of good character.",
    ],
    notEligible: [
      "Female candidates; the college is a male boarding institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential education in the Murree hills with a military character.",
      "Strong emphasis on academics, sports and physical fitness.",
      "Preparation for military and civil competitive examinations.",
      "Discipline and leadership training from an early age.",
    ],
    summary:
      "Male candidate aged roughly 12 to 15? Military College Murree offers residential classes from Class 6th upward in a military environment.",
  }),
  cadet({
    slug: "military-college-sui",
    group: "military-colleges",
    name: "Military College Sui",
    tagline: "Army-run boarding college in Dera Ismail Khan.",
    description:
      "Military College Sui is a boarding college run under the supervision of the Pakistan Army in Dera Ismail Khan. It provides a disciplined residential education and feeds cadets into the Army's officer pipeline.",
    stream: "Army",
    campus: "Sui, Dera Ismail Khan (KPK)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for Class 6th entry; up to 16 for higher classes.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male boarding institution.",
      "Anyone outside the entry-class age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential schooling under Army supervision.",
      "Discipline, physical training and academic support.",
      "Direct preparation for the PMA and other Armed Forces entries.",
      "Recognised school certificate on completing the course.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 with Class 5th passed? Military College Sui is an Army-run boarding option in Dera Ismail Khan.",
  }),

  /* ---------------- Army cadet colleges ---------------- */
  cadet({
    slug: "cadet-college-hasan-abdal",
    name: "Cadet College Hasan Abdal",
    tagline: "The flagship Army cadet college at Attock, Punjab.",
    description:
      "Cadet College Hasan Abdal, near Attock, is one of the first and most established cadet colleges in Pakistan. It runs residential classes and prepares cadets for the Pakistan Military Academy and other Armed Forces entries through a demanding entry test and interview.",
    stream: "Army",
    campus: "Hasan Abdal, Attock (Punjab)",
    classEntry: "Class 6th / 7th / 8th / 11th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for Class 6th entry; up to 16 for higher classes.",
      "Passed the previous class from a recognised school.",
      "Medically fit and of good character.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the entry-class age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "One of the oldest cadet colleges in Pakistan with a strong alumni record.",
      "Residential classes with a heavy military and academic focus.",
      "Direct preparation for the PMA and officer entries.",
      "Discipline, physical training and leadership from Class 6th.",
    ],
    officialSite: "https://joinpakarmy.gov.pk",
    summary:
      "Male candidate aged roughly 12 to 14? Hasan Abdal's entry test is one of the most competitive cadet college tests in the country.",
  }),
  cadet({
    slug: "garrison-cadet-college-kohat",
    name: "Garrison Cadet College Kohat",
    tagline: "Kohat ka garrison cadet college, KPK mein.",
    description:
      "Garrison Cadet College Kohat has been running since the mid-1960s and is among the better known cadet colleges in Khyber Pakhtunkhwa. It provides residential education with military discipline and prepares cadets for Armed Forces entries.",
    stream: "Army",
    campus: "Kohat (KPK)",
    classEntry: "Class 8th / 9th / 10th",
    ageLimit: "13 – 15 years (Class 8th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 13 to 15 years for the entry class, as per the prospectus.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test, physical test or medical.",
    ],
    benefits: [
      "Long-running cadet college with a well-known academic standard.",
      "Residential environment with military discipline and sports.",
      "Preparation for PMA, NDA-type and other Armed Forces entries.",
      "Recognition as a leading KPK cadet institution.",
    ],
    summary:
      "Male candidate aged roughly 13 to 15 in KPK? Garrison Cadet College Kohat is a long-established option with a competitive entry test.",
  }),
  cadet({
    slug: "cadet-college-balakot",
    name: "Cadet College Balakot",
    tagline: "Mansehra district ka mountain cadet college.",
    description:
      "Cadet College Balakot, in the Mansehra district of Khyber Pakhtunkhwa, provides a residential cadet education in a scenic mountain setting. Cadets follow a military syllabus and prepare for the Armed Forces.",
    stream: "Army",
    campus: "Balakot, Mansehra (KPK)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education in a mountain setting.",
      "Military discipline, physical training and academics together.",
      "Preparation for Army and other Armed Forces entries.",
      "Small-campus personal attention.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 from KPK? Balakot's entry test is the usual route into this mountain cadet college.",
  }),
  cadet({
    slug: "cadet-college-fateh-jang",
    name: "Cadet College Fateh Jang",
    tagline: "Attock district ka cadet college, Army supervision mein.",
    description:
      "Cadet College Fateh Jang, in the Attock district, is an Army-supervised residential cadet college. It runs the standard cadet syllabus with military discipline and prepares students for Armed Forces examinations.",
    stream: "Army",
    campus: "Fateh Jang, Attock (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet schooling under Army supervision.",
      "Balanced academics, physical training and discipline.",
      "Preparation for military and civil competitive examinations.",
      "Safe residential environment with trained staff.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14? Fateh Jang follows the standard cadet college entry pattern of test, interview and medical.",
  }),
  cadet({
    slug: "cadet-college-jhelum",
    name: "Cadet College Jhelum",
    tagline: "Jhelum district ka military pre-school.",
    description:
      "Cadet College Jhelum is a military pre-school that runs classes from the junior levels up to the senior school. It offers a smaller cadet environment on the GT Road near Jhelum, with an entry test for the class applied for.",
    stream: "Army",
    campus: "Jhelum (Punjab)",
    classEntry: "Class 7th / 8th",
    ageLimit: "12 – 15 years (entry class dependent)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 15 years depending on the class applied for.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education from junior to senior classes.",
      "Military discipline and physical training alongside school subjects.",
      "Preparation for the PMA and other Armed Forces entries.",
      "Smaller campus with individual attention.",
    ],
    summary:
      "Male candidate aged roughly 12 to 15? Cadet College Jhelum admits on open merit with an entry test per class.",
  }),
  cadet({
    slug: "cadet-college-nowshera",
    name: "Cadet College Nowshera",
    tagline: "Khyber Pakhtunkhwa ka cadet college.",
    description:
      "Cadet College Nowshera provides residential cadet education in Khyber Pakhtunkhwa under a military framework. Cadets study the standard school curriculum with physical training and military drills, and prepare for Armed Forces entries.",
    stream: "Army",
    campus: "Nowshera (KPK)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet schooling in KPK.",
      "Academics plus physical training and military drill.",
      "Preparation for Army and other Armed Forces entries.",
      "Disciplined routine from an early age.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 from KPK? Nowshera's entry test follows the standard cadet college pattern.",
  }),
  cadet({
    slug: "cadet-college-swabi",
    name: "Cadet College Swabi",
    tagline: "Swabi district, KP ka cadet college.",
    description:
      "Cadet College Swabi runs a residential cadet programme in the Swabi district of Khyber Pakhtunkhwa. Cadets receive academic education with military training and physical development, aiming at the Armed Forces.",
    stream: "Army",
    campus: "Swabi (KPK)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education in Swabi, KPK.",
      "Academic study with military drill and physical training.",
      "Preparation for Armed Forces entries.",
      "Structured routine and supervision.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 from Swabi? Cadet College Swabi admits on merit after the entry test, interview and medical.",
  }),
  cadet({
    slug: "cadet-college-razmak",
    name: "Cadet College Razmak",
    tagline: "North Waziristan ka cadet college.",
    description:
      "Cadet College Razmak, in North Waziristan, provides a residential cadet education with a strong military character. It is one of the cadet colleges serving the tribal and frontier districts of Khyber Pakhtunkhwa.",
    stream: "Army",
    campus: "Razmak, North Waziristan (KPK)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet schooling in North Waziristan.",
      "Military discipline, drills and physical training.",
      "Preparation for Army and other Armed Forces entries.",
      "Education with a strong community and leadership focus.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 from the Waziristan area? Razmak follows the standard cadet entry test, interview and medical process.",
  }),
  cadet({
    slug: "cadet-college-okara",
    name: "Cadet College Okara",
    tagline: "Punjab mein 2011 ke aas paas qaim hua cadet college.",
    description:
      "Cadet College Okara was established in 2011 in Punjab and provides residential cadet education with military discipline. It prepares students for the Armed Forces through academics, physical training and a competitive entry process.",
    stream: "Army",
    campus: "Okara (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education in central Punjab.",
      "Academic coaching with military training.",
      "Preparation for PMA and other Armed Forces entries.",
      "Modern facilities and a disciplined routine.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 near Okara? The entry test, interview and medical are the standard three-stage filter.",
  }),
  cadet({
    slug: "cadet-college-pasrur",
    name: "Cadet College Pasrur",
    tagline: "Sialkot district ka cadet college.",
    description:
      "Cadet College Pasrur, in Sialkot district, was established in 2011 and provides residential cadet education in Punjab. Cadets follow a military syllabus with academics, physical training and sports.",
    stream: "Army",
    campus: "Pasrur, Sialkot (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet schooling in the Sialkot district.",
      "Academics, physical training and military drill together.",
      "Preparation for Army and other Armed Forces entries.",
      "Discipline and leadership building from Class 6th.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 near Sialkot? Pasrur's admission follows the standard cadet college merit process.",
  }),
  cadet({
    slug: "cadet-college-choa-saiden-shah",
    name: "Cadet College Choa Saiden Shah",
    tagline: "Chakwal district ka cadet college, 2011 mein qaim.",
    description:
      "Cadet College Choa Saiden Shah, in the Chakwal district of Punjab, was established in 2011. It provides a residential cadet education with military training and prepares students for the Armed Forces.",
    stream: "Army",
    campus: "Choa Saiden Shah, Chakwal (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education in the Chakwal district.",
      "Academic study with military drill and physical training.",
      "Preparation for Army and other Armed Forces entries.",
      "Disciplined residential environment.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 near Chakwal? Choa Saiden Shah is one of the newer Punjab cadet colleges with a merit-based entry.",
  }),
  cadet({
    slug: "cadet-college-esa-khel",
    name: "Cadet College Esa Khel",
    tagline: "Mianwali district ka cadet college, 2020 mein qaim.",
    description:
      "Cadet College Esa Khel, in Mianwali district, was established in 2020 and provides residential cadet education in Punjab. It combines school academics with military training for students aiming at the Armed Forces.",
    stream: "Army",
    campus: "Esa Khel, Mianwali (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "New residential cadet campus with modern facilities.",
      "Academics alongside military drill and physical training.",
      "Preparation for Army and other Armed Forces entries.",
      "Discipline and physical development from an early age.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 near Mianwali? Esa Khel is a newer cadet college with the standard merit entry process.",
  }),
  cadet({
    slug: "cadet-college-pano-aqil",
    name: "Cadet College Pano Aqil",
    tagline: "Ghotki, Sindh ka cadet college.",
    description:
      "Cadet College Pano Aqil, in Ghotki district of Sindh, was established in 1992 and provides residential cadet education. It serves cadets from across Sindh and prepares them for Armed Forces entries.",
    stream: "Army",
    campus: "Pano Aqil, Ghotki (Sindh)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "One of the established cadet colleges in Sindh.",
      "Residential education with military discipline.",
      "Preparation for Army and other Armed Forces entries.",
      "Academic support with physical and drill training.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 from Sindh? Pano Aqil is a long-running Sindh cadet college with a merit-based entry test.",
  }),
  cadet({
    slug: "pakistan-steel-cadet-college",
    name: "Pakistan Steel Cadet College",
    tagline: "Bin Qasim, Karachi ka industrial-area cadet college.",
    description:
      "Pakistan Steel Cadet College at Bin Qasim, Karachi, was established in 1982 and provides residential cadet education. It is one of the better known cadet colleges in Karachi and prepares cadets for military and civil careers.",
    stream: "Army",
    campus: "Bin Qasim, Karachi (Sindh)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for the entry class.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Established cadet college in Karachi since the 1980s.",
      "Residential education with military discipline and sports.",
      "Preparation for Armed Forces and civil competitive examinations.",
      "Central location with modern campus facilities.",
    ],
    summary:
      "Male candidate aged roughly 12 to 14 in Karachi? Pakistan Steel Cadet College is a long-established option in Bin Qasim.",
  }),

  /* ---------------- Navy ---------------- */
  cadet({
    slug: "cadet-college-petaro",
    name: "Cadet College Petaro",
    tagline: "Pakistan Navy ka cadet college, Jamshoro ke paas.",
    description:
      "Cadet College Petaro, near Jamshoro in Sindh, was established in 1957 and is the Pakistan Navy's cadet college. It runs classes from 7th to 12th and has produced officers for the Navy, other services and the civil sector.",
    stream: "Navy",
    campus: "Petaro, Jamshoro (Sindh)",
    classEntry: "Class 7th / 8th / 11th",
    ageLimit: "12 – 15 years (entry class dependent)",
    eligibility: [
      "Male citizens of Pakistan, from any province or from overseas.",
      "Age 12 to 15 years depending on the class applied for.",
      "Passed the previous class from a recognised school.",
      "Medically fit; Navy medical standards apply.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or the Navy medical standard.",
    ],
    benefits: [
      "The Pakistan Navy's own cadet college, with a direct naval pathway.",
      "Classes 7th to 12th in a residential setting since 1957.",
      "Navy medical and physical standards from an early age.",
      "Alumni across the Navy, the other services and civil careers.",
    ],
    officialSite: "https://joinpaknavy.gov.pk",
    summary:
      "Male candidate aged roughly 12 to 15? Petaro is the Navy's cadet college and the natural feeder into the Pakistan Naval Academy.",
  }),

  /* ---------------- Air Force ---------------- */
  cadet({
    slug: "paf-college-lower-topa",
    name: "PAF College Lower Topa",
    tagline: "Murree hills mein PAF ka cadet college.",
    description:
      "PAF College Lower Topa, in the Murree hills of Punjab, is the Pakistan Air Force's cadet college. It provides a residential cadet education with an air force character, and its cadets are prepared for the PAF Air Academy and other Armed Forces entries.",
    stream: "Air Force",
    campus: "Lower Topa, Murree (Punjab)",
    classEntry: "Class 6th / 8th",
    ageLimit: "12 – 14 years (Class 6th entry)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 14 years for Class 6th / 8th entry, as per the prospectus.",
      "Passed the required previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "The PAF's own cadet college in the Murree hills.",
      "Residential education with air force discipline and training.",
      "Direct preparation for the PAF Air Academy, Risalpur.",
      "Physical training and outdoor activities in a hill-station setting.",
    ],
    officialSite: "https://joinpaf.gov.pk",
    summary:
      "Male candidate aged roughly 12 to 14? Lower Topa is the PAF's cadet college and the usual feeder into the PAF Air Academy.",
  }),
  cadet({
    slug: "paf-college-sargodha",
    name: "PAF College Sargodha",
    tagline: "Sargodha ka PAF cadet college.",
    description:
      "PAF College Sargodha is the second well-known PAF cadet college, based in Sargodha. It runs the standard cadet curriculum with a strong air force orientation and prepares cadets for the PAF Air Academy and broader Armed Forces careers.",
    stream: "Air Force",
    campus: "Sargodha (Punjab)",
    classEntry: "Class 6th / 7th / 8th / 11th",
    ageLimit: "12 – 15 years (entry class dependent)",
    eligibility: [
      "Male citizens of Pakistan.",
      "Age 12 to 15 years depending on the class applied for.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    notEligible: [
      "Female candidates; the college is a male cadet institution.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Well-known PAF cadet college in central Punjab.",
      "Residential education with air force discipline and drill.",
      "Preparation for the PAF Air Academy and other entries.",
      "Academics, physical training and sports in one routine.",
    ],
    officialSite: "https://joinpaf.gov.pk",
    summary:
      "Male candidate aged roughly 12 to 15 near Sargodha? PAF College Sargodha admits on merit through the standard cadet entry test.",
  }),

  /* ---------------- Girls cadet college ---------------- */
  cadet({
    slug: "bakhtawar-cadet-college-for-girls",
    name: "Bakhtawar Cadet College for Girls",
    tagline: "Sindh ki girls cadet college, Shaheed Benazirabad.",
    description:
      "Bakhtawar Cadet College for Girls at Shaheed Benazirabad was established in 2010 and provides a residential cadet education for girls. It combines academics, physical training and leadership development for female students.",
    stream: "Army",
    campus: "Shaheed Benazirabad (Sindh)",
    classEntry: "Class 6th / 7th / 8th / 9th",
    ageLimit: "11 – 15 years (entry class dependent)",
    audience: "female",
    gender: "For female candidates",
    eligibility: [
      "Female citizens of Pakistan.",
      "Age generally 11 to 15 years depending on the class applied for.",
      "Passed the previous class from a recognised school.",
      "Medically and physically fit on the college's standards.",
    ],
    physical:
      "Height and physical standards as per the college's norms for female students · physical efficiency test.",
    notEligible: [
      "Male candidates; this is a girls cadet college.",
      "Anyone outside the age window for the class applied for.",
      "Candidates who fail the entry test or medical.",
    ],
    benefits: [
      "Residential cadet education for girls in Sindh.",
      "Academics, physical training and leadership in a structured routine.",
      "A disciplined and safe residential environment.",
      "Preparation for competitive examinations and leadership roles.",
    ],
    summary:
      "Female candidate aged roughly 11 to 15? Bakhtawar Cadet College for Girls is one of the established girls cadet colleges in Sindh.",
  }),
];
