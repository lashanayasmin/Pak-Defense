export interface College {
  name: string;
  /** Short label for which force / stream the college belongs to. */
  stream: string;
  /** Where the college is located. */
  campus: string;
  /** Who can apply: eligibility points. */
  eligible: string[];
  /** Who cannot / typically does not qualify. */
  nonEligible: string[];
  /** How to apply, ordered steps. */
  apply: string[];
}

export const COLLEGES: College[] = [
  {
    name: "Pakistan Military Academy (PMA) Kakul",
    stream: "Army",
    campus: "Abbottabad (KPK)",
    eligible: [
      "Male citizens of Pakistan (including Gilgit-Baltistan & Azad Kashmir).",
      "Age 17 to 22 years for the PMA Long Course.",
      "Graduation (BA/BSc or equivalent), or final-year students.",
      "Height at least 5 ft 4 in (162.5 cm).",
      "Medically and physically fit as per Army standards.",
    ],
    nonEligible: [
      "Age below 17 or above 22 years.",
      "Female candidates (this track is male-only).",
      "Below Matric / without recognised education.",
      "Anyone failing the medical standards.",
    ],
    apply: [
      "Register on the official Army website (joinpakarmy.gov.pk) when the advert opens.",
      "Fill in personal, educational and domicile details.",
      "Appear for the initial written test at the nearest Army Selection & Recruitment Centre.",
      "Clear the preliminary medical examination (PME).",
      "Appear for ISSB and the final interview before joining PMA Kakul.",
    ],
  },
  {
    name: "PAF Air Academy, Risalpur",
    stream: "Air Force",
    campus: "Risalpur (KPK)",
    eligible: [
      "Male Pakistani citizens.",
      "Age 17 to 22 years for GD Pilot / 16½–22 for engineering tracks (varies).",
      "FSc Pre-Engineering / Pre-Medical, or A-Levels, with strong marks.",
      "Height 5 ft 4 in minimum; Category 'A' medical and 6/6 eyesight.",
      "Exceptional physical fitness and flying aptitude.",
    ],
    nonEligible: [
      "Age outside the prescribed window.",
      "Poor eyesight (less than the 6/6 standard for pilots).",
      "Female candidates (this entry is male-only).",
      "Candidates who fail the medical board.",
    ],
    apply: [
      "Fill the online registration form on the PAF website (joinpaf.gov.pk).",
      "Sit the initial written and intelligence test.",
      "Undergo physical and preliminary medical screening.",
      "Pass ISSB psychological and GTO testing.",
      "Take the Pilot Aptitude Test, then the final medical board before joining Risalpur.",
    ],
  },
  {
    name: "Pakistan Naval Academy (PNS Bahadur)",
    stream: "Navy",
    campus: "Karachi (Sindh)",
    eligible: [
      "Male Pakistani citizens.",
      "Age 16½ to 21 years for PN Cadet entry.",
      "FSc Pre-Engineering / Pre-Medical with at least 60% marks.",
      "Height 5 ft 4 in minimum; good medical standard and eyesight.",
      "Medically fit for sea service.",
    ],
    nonEligible: [
      "Age outside 16½–21 years for the cadet route.",
      "Female candidates (this entry is male-only).",
      "Below the FSc minimum marks requirement.",
      "Candidates who fail the naval medical standard.",
    ],
    apply: [
      "Visit the Pakistan Navy recruitment centre or the PN website.",
      "Register and sit the initial written test.",
      "Clear the preliminary medical examination.",
      "Attend the initial interview at the Navy Selection & Recruitment Centre.",
      "Pass ISSB, then join PNS Bahadur for training.",
    ],
  },
  {
    name: "Military College Jhelum",
    stream: "Army",
    campus: "Jhelum (Punjab)",
    eligible: [
      "Male Pakistani citizens.",
      "Age normally 12 to 14 years for entry into Class 6th, and 14 to 16 for Class 8th.",
      "Passed the required class (6th / 8th) from a recognised school.",
      "Medically and physically fit.",
    ],
    nonEligible: [
      "Age outside the entry-class window.",
      "Female candidates (male-only boarding college).",
      "Candidates who do not meet the educational class requirement.",
    ],
    apply: [
      "Obtain the prospectus and registration form from the college or website.",
      "Submit the admission form with required documents (B-Form, DMC, domicile).",
      "Sit the college entry (written) test.",
      "Appear for the interview and medical examination.",
      "Confirm admission after the merit list is announced.",
    ],
  },
  {
    name: "Cadet College Hasan Abdal",
    stream: "Army",
    campus: "Hasan Abdal (Punjab)",
    eligible: [
      "Male Pakistani citizens.",
      "Age 12 to 14 years for Class 6th entry; up to 16 for higher classes.",
      "Passed the required previous class from a recognised school.",
      "Medically fit and of good character.",
    ],
    nonEligible: [
      "Age outside the entry-class window.",
      "Female candidates (male-only cadet college).",
      "Candidates who fail the entry test or medical.",
    ],
    apply: [
      "Download the admission form / prospectus from the college website.",
      "Fill and submit with B-Form, previous DMC and domicile.",
      "Sit the written entry test.",
      "Appear for interview and medical checks.",
      "Await the merit list for admission.",
    ],
  },
  {
    name: "Cadet College Petaro",
    stream: "Navy",
    campus: "Jamshoro (Sindh)",
    eligible: [
      "Male Pakistani citizens (also accepts from other provinces and overseas).",
      "Age 12 to 14 years for entry classes.",
      "Passed the required previous class from a recognised school.",
      "Medically fit.",
    ],
    nonEligible: [
      "Age outside the entry window.",
      "Female candidates (male-only cadet college).",
      "Candidates who do not meet the class requirement.",
    ],
    apply: [
      "Obtain the admission form from the college website or office.",
      "Submit the form with documents (B-Form, DMC, domicile).",
      "Sit the written entry test.",
      "Appear for the interview and medical examination.",
      "Admission is confirmed on the merit list.",
    ],
  },
  {
    name: "PAF Cadet College, Lower Topa",
    stream: "Air Force",
    campus: "Lower Topa, Murree (Punjab)",
    eligible: [
      "Male Pakistani citizens.",
      "Age 12 to 14 years for entry into Class 6th / 8th.",
      "Passed the required class from a recognised school.",
      "Medically and physically fit.",
    ],
    nonEligible: [
      "Age outside the entry-class window.",
      "Female candidates (male-only cadet college).",
      "Candidates who fail the entry test or medical.",
    ],
    apply: [
      "Get the admission form / prospectus from the college website.",
      "Submit the form with B-Form, previous DMC and domicile.",
      "Sit the written entry test.",
      "Appear for interview and medical examination.",
      "Confirm admission on the merit list.",
    ],
  },
  {
    name: "Military College Murree",
    stream: "Army",
    campus: "Murree (Punjab)",
    eligible: [
      "Male Pakistani citizens.",
      "Age 12 to 14 years for entry classes.",
      "Passed the required previous class from a recognised school.",
      "Medically fit and of good character.",
    ],
    nonEligible: [
      "Age outside the entry window.",
      "Female candidates (male-only boarding college).",
      "Candidates who fail the entry test or medical.",
    ],
    apply: [
      "Obtain the admission form from the college website.",
      "Submit with B-Form, previous DMC and domicile.",
      "Sit the written entry test.",
      "Appear for interview and medical checks.",
      "Admission confirmed on the merit list.",
    ],
  },
  {
    name: "Cadet College Kohat",
    stream: "Army",
    campus: "Kohat (KPK)",
    eligible: [
      "Male Pakistani citizens (preference to KPK residents).",
      "Age 12 to 14 years for entry classes.",
      "Passed the required previous class from a recognised school.",
      "Medically and physically fit.",
    ],
    nonEligible: [
      "Age outside the entry window.",
      "Female candidates (male-only cadet college).",
      "Candidates who fail the entry test or medical.",
    ],
    apply: [
      "Get the admission form from the college office or website.",
      "Submit with B-Form, previous DMC and domicile.",
      "Sit the written entry test.",
      "Appear for interview and medical examination.",
      "Await the merit list.",
    ],
  },
];
