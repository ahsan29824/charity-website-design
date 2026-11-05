"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const topics = ["General enquiry", "Partnership", "Student support", "Media", "Safeguarding"];

const field =
  "mt-2 w-full rounded-[3px] border border-rule bg-white px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-body/50 focus:border-forest focus:ring-2 focus:ring-gold/40";

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const router = useRouter();

  // Links such as "Partner With Us" open the form with ?topic=Partnership already chosen
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (requested && topics.includes(requested)) setTopic(requested);
  }, []);

  // No backend yet: hand the message to the visitor's own email app, addressed to the Foundation
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));
    const subject = `${topic} — ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:info@sadique.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Give the email app a moment to open before moving on to the thank-you page
    setTimeout(() => router.push("/thank-you?for=message"), 400);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[4px] bg-white p-6 shadow-[0_1px_2px_rgba(14,51,32,0.06),0_14px_34px_-20px_rgba(14,51,32,0.35)] sm:p-8 md:p-10"
    >
      <fieldset>
        <legend className="text-[15px] font-semibold text-forest">What is this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-[3px] border px-3.5 py-2 text-[14px] transition-colors ${
                topic === t
                  ? "border-forest bg-forest text-white"
                  : "border-rule bg-paper text-body hover:border-forest/40 hover:text-forest"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-[15px] font-semibold text-forest">
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-[15px] font-semibold text-forest">
          Email address
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="mt-6 block text-[15px] font-semibold text-forest">
        Message
        <textarea name="message" required rows={6} className={`${field} resize-y`} />
      </label>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[14px] leading-snug text-body">
          We only use your details to reply to you. See our{" "}
          <Link href="/privacy" className="text-forest underline decoration-gold underline-offset-4">
            Privacy &amp; Safeguarding Policy
          </Link>
          .
        </p>
        <button
          type="submit"
          className="shrink-0 rounded-[3px] bg-forest px-7 py-3.5 whitespace-nowrap text-[15px] font-semibold text-white transition-colors hover:bg-forest-deep"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
