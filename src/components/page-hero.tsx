import { Reveal } from "@/components/reveal";

export type HeroTone = "navy" | "army" | "sky" | "gold";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Colour theme for the hero. Defaults to the site's navy + gold. */
  tone?: HeroTone;
}

interface Tone {
  shell: string;
  eyebrow: string;
  rule: string;
  orb: string;
  orbSmall: string;
}

const TONES: Record<HeroTone, Tone> = {
  navy: {
    shell: "bg-navy-950",
    eyebrow: "text-gold-400",
    rule: "bg-gold-500",
    orb: "bg-[radial-gradient(closest-side,rgba(71,151,193,0.5),transparent)]",
    orbSmall: "bg-[radial-gradient(closest-side,rgba(191,117,32,0.4),transparent)]",
  },
  army: {
    shell: "bg-army-950",
    eyebrow: "text-gold-400",
    rule: "bg-gold-500",
    orb: "bg-[radial-gradient(closest-side,rgba(49,137,97,0.55),transparent)]",
    orbSmall: "bg-[radial-gradient(closest-side,rgba(191,117,32,0.4),transparent)]",
  },
  sky: {
    shell: "bg-sky-950",
    eyebrow: "text-gold-400",
    rule: "bg-gold-500",
    orb: "bg-[radial-gradient(closest-side,rgba(14,165,233,0.5),transparent)]",
    orbSmall: "bg-[radial-gradient(closest-side,rgba(191,117,32,0.4),transparent)]",
  },
  gold: {
    shell: "bg-[#221608]",
    eyebrow: "text-gold-300",
    rule: "bg-gold-400",
    orb: "bg-[radial-gradient(closest-side,rgba(191,117,32,0.5),transparent)]",
    orbSmall: "bg-[radial-gradient(closest-side,rgba(49,137,97,0.4),transparent)]",
  },
};

export function PageHero({ eyebrow, title, description, tone = "navy" }: PageHeroProps) {
  const t = TONES[tone];

  return (
    <section className={`relative overflow-hidden ${t.shell}`}>
      {/* Drifting accent orbs, purely decorative. */}
      <div
        aria-hidden
        className={`animate-accent-drift pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] ${t.orb}`}
      />
      <div
        aria-hidden
        className={`animate-accent-drift pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] ${t.orbSmall}`}
        style={{ animationDelay: "-11s" }}
      />
      {/* Faint camo dots over the whole hero. */}
      <div aria-hidden className="pattern-camo pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pb-20 sm:pt-16">
        <Reveal direction="up">
          <p className={`text-sm font-semibold uppercase tracking-widest ${t.eyebrow}`}>
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          <div className={`mt-6 h-0.5 w-16 ${t.rule}`} />
        </Reveal>
      </div>
    </section>
  );
}
