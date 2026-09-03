export interface Expectation {
  t: string;
  d: string;
}

export interface Person {
  name: string;
  d: string;
}

/**
 * The "how we work" numbered list on the About page.
 */
export const EXPECTATIONS: Expectation[] = [
  {
    t: "Initial tests, drilled until they're boring",
    d: "Verbal, non-verbal, academic: we run past papers and mock papers until the written test on the day feels almost routine.",
  },
  {
    t: "ISSB psych and GTO, done properly",
    d: "We have the files, the series and the outdoor setup to run real mock GTO days. You learn the tasks here, not in Gujranwala.",
  },
  {
    t: "Interviews with people who've conducted them",
    d: "Our senior mentors have sat on the other side. They'll tell you straight what works and what's coming across as fake.",
  },
  {
    t: "Fitness and medical standards, not ignored",
    d: "Selection doesn't stop at the written test. We keep an eye on your physical standards too, because a slip there ends the whole run.",
  },
];

/**
 * The "people behind it" cards on the About page.
 */
export const TEAM: Person[] = [
  {
    name: "Senior ISSB mentors",
    d: "Retired or long-experienced officers who run the psych, GTO and interview work.",
  },
  {
    name: "Initial test specialists",
    d: "Trainers who drill the written tests and past papers across all three forces.",
  },
  {
    name: "Fitness & physical prep",
    d: "Someone who keeps your physical standards and drills on track, week by week.",
  },
  {
    name: "Counselling desk",
    d: "The friendly front desk that helps you and your family pick the right path.",
  },
];
