export interface Program {
  tag: string;
  title: string;
  desc: string;
  features: string[];
  note: string;
}

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export const PROGRAMS: Program[] = [
  {
    tag: "ISSB",
    title: "Full ISSB Preparation",
    desc: "The complete run-through: psychological tests, GTO tasks, and the interview, with full mock days that mirror the real board.",
    features: [
      "Psychological test practice",
      "Real mock GTO days",
      "Mock ISSB interviews",
      "Personality development",
    ],
    note: "For candidates whose written test is already cleared.",
  },
  {
    tag: "Initial Tests",
    title: "Initial Test Preparation",
    desc: "The written tests every force runs first. We drill verbal, non-verbal and academic subjects until the paper feels routine.",
    features: [
      "Verbal & non-verbal intelligence",
      "English and Urdu",
      "Maths and general knowledge",
      "Past-paper practice",
    ],
    note: "Covers Army, Navy and Air Force papers.",
  },
  {
    tag: "Interview",
    title: "Interview & Grooming",
    desc: "Sitting in front of a board is its own skill. We rehearse it until you can be yourself under pressure.",
    features: [
      "One-on-one interview practice",
      "Dress and etiquette",
      "Body language and speech",
      "Honest evaluative feedback",
    ],
    note: "Sessions are individual, not in a class.",
  },
  {
    tag: "Colleges",
    title: "Military & Cadet College Entry",
    desc: "For younger students aiming at military and cadet colleges: entry tests, interview and physical standards.",
    features: [
      "Entry test preparation",
      "Interview coaching",
      "Physical standards prep",
      "Career counselling",
    ],
    note: "Ages and eligibility vary by college.",
  },
  {
    tag: "Commissioning",
    title: "Regular & Short Service Commission",
    desc: "Force-specific coaching for commission tracks across all three services, from paperwork to the final assessment.",
    features: [
      "Force-specific test focus",
      "Medical and physical prep",
      "Application guidance",
      "Final mock assessment",
    ],
    note: "For direct and short service routes.",
  },
  {
    tag: "Retake",
    title: "Retake & Improvement",
    desc: "Fell at the last hurdle? We go through your attempt honestly and build a focused plan to get you back stronger.",
    features: [
      "Honest performance review",
      "Personalised improvement plan",
      "Focused weak-area drills",
      "Continuous mentor support",
    ],
    note: "A big chunk of our selections are retakes.",
  },
];

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Free consultation",
    desc: "Sit with a counsellor, tell them your target, and get a straight answer on whether it's realistic.",
  },
  {
    n: "02",
    title: "Aptitude check",
    desc: "A quick assessment to see your written-test level and where the gaps are.",
  },
  {
    n: "03",
    title: "Structured training",
    desc: "Tests, psych, fitness and interview work, paced around your own weak points.",
  },
  {
    n: "04",
    title: "Mock & final prep",
    desc: "Full rehearsals of the real selection scenario before you sit the actual board.",
  },
];
