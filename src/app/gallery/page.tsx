import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from training sessions, events and everyday life at Pak Defence ISSB Coaching Centre, Lahore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real days at the centre"
        description="No stock photos here. These are our actual classrooms, our drill days, and candidates on the way to selection."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <GalleryGrid />
        </div>
      </section>
      <section className="border-t border-slate-200 bg-[#f4f1ea] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy-900">
              Want to see it in person instead?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Drop by during opening hours. It&apos;s usually easier to judge a
              coaching centre when you can watch a batch in session.
            </p>
          </div>
          <ButtonLink href="/contact">
            <Phone className="h-4 w-4" />
            Visit us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
