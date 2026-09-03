"use client";

import * as React from "react";
import { Send, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/reveal";

interface FormState {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  program: "",
  message: "",
};

const PROGRAM_OPTIONS = [
  "ISSB Preparation",
  "Initial Test Preparation",
  "Interview & Grooming",
  "Military / Cadet College Entry",
  "Retake / Improvement Plan",
  "General Enquiry",
];

const INFO = [
  {
    label: "Visit Us",
    value: SITE.address,
  },
  {
    label: "Call Us",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    label: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    label: "Timings",
    value: "Mon – Sat · 9:00 AM – 8:00 PM",
  },
];

export function ContactSection() {
  const [form, setForm] = React.useState<FormState>(INITIAL);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry: ${form.program || "General"} - ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProgram: ${form.program}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-army-500 focus:outline-none focus:ring-2 focus:ring-army-200";

  return (
    <Reveal className="grid gap-10 lg:grid-cols-2">
      {/* Info column */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
          Reach us directly
        </p>
        <h2 className="mt-3 text-2xl font-bold text-navy-900">
          Visit, call, or send an enquiry
        </h2>
        <p className="mt-3 text-slate-600">
          The fastest way is usually a phone call. We&apos;re in Johar Town most
          days, so walk-ins are welcome, but call ahead so someone&apos;s free to
          sit with you properly.
        </p>

        <div className="mt-8 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {INFO.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-semibold text-army-800 hover:text-gold-600"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-army-800">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-8 border border-slate-200">
          <iframe
            src={SITE.mapsEmbed}
            title="Pak Defence ISSB Coaching Centre location"
            className="h-72 w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={SITE.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-army-700 hover:text-gold-600"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Form column */}
      <div className="border border-slate-200 bg-white p-6 sm:p-8">
        <h3 className="text-xl font-bold text-navy-900">Send an Enquiry</h3>
        <p className="mt-1 text-sm text-slate-500">
          Fill in the form and it will open your email app with the details
          pre-filled.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              required
              value={form.name}
              onChange={update}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                required
                value={form.phone}
                onChange={update}
                placeholder="03xx xxxxxxx"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-program"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Program of Interest
            </label>
            <select
              id="contact-program"
              name="program"
              value={form.program}
              onChange={update}
              className={inputClass}
            >
              <option value="">Select a program</option>
              {PROGRAM_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Your Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={update}
              rows={5}
              placeholder="Tell us a little about your goals..."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-md shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <Send className="h-4 w-4" />
            Submit Enquiry
          </button>
          <p className="text-center text-xs text-slate-400">
            Prefer to talk? Call us directly at{" "}
            <a href={SITE.phoneHref} className="font-semibold text-army-700">
              {SITE.phone}
            </a>
          </p>
        </form>
      </div>
    </Reveal>
  );
}
