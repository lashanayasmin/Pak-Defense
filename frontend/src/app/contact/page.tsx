import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pak Defence ISSB Coaching Centre — call, visit us in Johar Town Lahore, or send an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to us before you pay a single rupee"
        description="We'd rather give you a straight answer about whether coaching is right for you than take your money. Call, visit, or send an enquiry below."
      />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
