export interface Force {
  slug: string;
  img: string;
  title: string;
  desc: string;
  cta?: string;
}

export interface Reason {
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const FORCES: Force[] = [
  {
    slug: "army",
    img: "/images/army.png",
    title: "Pakistan Army",
    desc: "PMA Long Course, initial test and interview prep for commissioning.",
  },
  {
    slug: "navy",
    img: "/images/navy.svg",
    title: "Pakistan Navy",
    desc: "PN Cadet and Direct Short Service Commission with naval discipline training.",
  },
  {
    slug: "airforce",
    img: "/images/airforce.svg",
    title: "Pakistan Air Force",
    desc: "GD Pilot and PAF initial tests, ISSB psych and GTO tasks.",
  },
  {
    slug: "colleges",
    img: "/images/logo.svg",
    title: "Military & Cadet Colleges",
    desc: "PMA Kakul, Air Academy, Naval Academy and cadet colleges — who can apply and how.",
    cta: "View colleges",
  },
];

export const WHY_US: Reason[] = [
  {
    title: "We've sat on the other side of the table",
    desc: "Most of our trainers are retired officers or long-time ISSB mentors. They don't teach from a book. They tell you what actually happens in the room, and how seniors expect you to behave.",
  },
  {
    title: "Mock tests that feel like the real thing",
    desc: "From the written initial tests to the GTO outdoor tasks and the final interview, we run you through full dress rehearsals. You'll have made your mistakes here, not at Gujranwala.",
  },
  {
    title: "Discipline you can't fake in ten days",
    desc: "There's no shortcut to the board's confidence. We build your daily routine slowly: fitness, posture, handwriting, how you speak, so it sticks by the time you appear.",
  },
  {
    title: "Small batches, real attention",
    desc: "We keep classes small on purpose. Every candidate gets individual feedback on their weaknesses, not a one-size-fits-all lecture.",
  },
];

export const STATS: Stat[] = [
  { value: "500+", label: "Students Trained" },
  { value: "150+", label: "Selections" },
  { value: "6+", label: "Years Running" },
  { value: "3", label: "Forces Covered" },
];
