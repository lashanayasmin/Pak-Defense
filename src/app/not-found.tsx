import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
          404
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Head back home, or get in touch and we&apos;ll point you in
          the right direction.
        </p>
        <div className="mt-6 h-0.5 w-16 bg-gold-500" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="outline-white">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
