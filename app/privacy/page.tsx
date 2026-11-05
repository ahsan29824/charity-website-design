import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy & Safeguarding Policy — The Sadique Foundation",
  description: "How The Sadique Foundation handles your personal information and keeps the students it supports safe.",
};

const sections = [
  {
    id: "privacy",
    title: "Your privacy",
    points: [
      "When you contact us or pledge a donation, we receive the details you choose to send: usually your name, email address and message.",
      "We use these details only to reply to you and to process your gift. We never sell or share them with third parties for marketing.",
      "We keep your information only for as long as we need it, and we handle it in line with UK data protection law (UK GDPR).",
      "You can ask to see, correct or delete the information we hold about you at any time by emailing us.",
    ],
  },
  {
    id: "students",
    title: "Information about students",
    points: [
      "Details about the students we support are collected only to assess eligibility and administer their grants.",
      "We do not publish a student’s name, photograph or story without their informed consent, and that of a guardian where appropriate.",
    ],
  },
  {
    id: "safeguarding",
    title: "Safeguarding",
    points: [
      "Many of the young people we support are orphans or otherwise vulnerable. Their safety and wellbeing come before every other consideration.",
      "Everyone who works with students on our behalf is expected to act with integrity and to report any concern without delay.",
      "If you are worried about the welfare of a student we support, please contact us immediately. Every concern is treated seriously and in confidence.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    points: [
      "Cookies are small files a website stores on your device. This website does not use advertising or tracking cookies.",
      "When we add online card payments or visitor analytics, those services may set cookies that are needed to work securely. We will list them here and ask for your consent where the law requires it.",
      "You can block or delete cookies at any time in your browser settings.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Privacy, Safeguarding & Cookies"
          title="Protecting your information and the students we serve"
          intro="Trust is the foundation of everything we do. This page explains how we handle personal information and how we keep the young people we support safe."
        />

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[14rem_1fr] lg:gap-20">
            <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[15px] font-semibold text-gold-deep">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-rule pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-body hover:text-forest hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-w-2xl space-y-14">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-serif text-3xl text-forest">{s.title}</h2>
                  <ul className="mt-6 space-y-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-4 text-lg leading-[1.7] text-body">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <div className="rounded-[4px] bg-forest-deep p-7 text-white md:p-8">
                <p className="font-serif text-2xl">Raise a concern or ask a question</p>
                <p className="mt-2 leading-[1.65] text-white/75">
                  Email{" "}
                  <a href="mailto:info@sadique.org?subject=Safeguarding" className="font-semibold text-gold underline underline-offset-4">
                    info@sadique.org
                  </a>{" "}
                  or use our{" "}
                  <Link href="/contact?topic=Safeguarding" className="font-semibold text-gold underline underline-offset-4">
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
