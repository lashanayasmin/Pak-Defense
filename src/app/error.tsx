"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
          Error
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
          An unexpected error occurred while loading this page. Try again, or
          head back home.
        </p>
        <div className="mt-6 h-0.5 w-16 bg-gold-500" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="white" onClick={reset}>
            Try again
          </Button>
          <ButtonLink href="/" variant="outline-white">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
