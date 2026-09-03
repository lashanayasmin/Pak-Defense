import { Reveal } from "@/components/reveal";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy-950">
      <Reveal direction="up" className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:pb-16 sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
          {description}
        </p>
        <div className="mt-6 h-0.5 w-16 bg-gold-500" />
      </Reveal>
    </section>
  );
}
