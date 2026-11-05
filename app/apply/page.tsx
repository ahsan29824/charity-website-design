import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Apply for a Grant — The Sadique Foundation",
  description:
    "Who can apply for a Sadique Foundation scholarship, what we cover, the documents you need and how the process works.",
};

const eligibility = [
  "You have a confirmed place, or are applying for one, at a recognised university, college or school",
  "You have a strong academic record, or clear evidence of ability",
  "You or your family cannot meet the cost of your education without help",
  "Priority is given to students who have lost one or both parents",
];

const covered = ["Tuition fees", "Books and equipment", "Exam and registration fees", "Essential living costs", "Mentorship for orphaned students"];

const documents = [
  "Proof of identity",
  "Your latest academic results or transcripts",
  "An offer or enrolment letter from your institution",
  "A breakdown of the costs you need help with",
  "A short personal statement (about 500 words)",
  "One reference from a teacher or community leader",
];

const steps = [
  { title: "Get in touch", body: "Tell us a little about yourself and we will send you the application form and current deadlines." },
  { title: "Send your application", body: "Return the completed form with the documents listed on this page." },
  { title: "Assessment", body: "We review every application against our criteria. Shortlisted students may be invited to a short interview." },
  { title: "Decision and payment", body: "If successful, your grant is paid directly to your institution or approved programme, never in cash." },
];

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Apply for a Grant"
          title="Talent should never be wasted for want of fees"
          intro="If you are a capable student who cannot afford to continue your education, we may be able to help. Our grants are gifts, not loans: there is nothing to pay back."
        />

        {/* Round status. Update the dates here when each application round opens */}
        <div className="border-b border-rule bg-gold/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p className="text-[15px] text-forest">
              <span className="font-semibold">Next application round:</span> dates will be announced here.
            </p>
            <Link href="/contact?topic=Student%20support" className="text-[15px] font-semibold text-forest underline decoration-gold decoration-2 underline-offset-[6px]">
              Ask to be notified
            </Link>
          </div>
        </div>

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-[15px] font-semibold text-gold-deep">Who can apply</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest">
                You may be eligible if&hellip;
              </h2>
              <ul className="mt-8 space-y-4">
                {eligibility.map((e) => (
                  <li key={e} className="flex gap-4 text-lg leading-[1.6] text-body">
                    <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[15px] font-semibold text-gold-deep">What we cover</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest">
                The real costs of studying
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {covered.map((c) => (
                  <li key={c} className="rounded-[3px] border border-forest/20 bg-white px-4 py-2.5 text-[15px] text-forest">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8 leading-[1.7] text-body">
                The amount of each grant depends on your circumstances and the course you are taking. We will explain
                exactly what is covered before you accept.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-forest-deep py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] md:text-5xl">How it works</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 80} className="border-t border-gold pt-6">
                  <span className="font-serif text-4xl text-gold">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-[1.65] text-white/70">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest">
                Documents to prepare
              </h2>
              <ol className="mt-8 divide-y divide-forest/15 border-y border-forest/15">
                {documents.map((d, i) => (
                  <li key={d} className="flex gap-5 py-4 text-lg text-forest">
                    <span className="w-6 shrink-0 font-serif text-gold-deep">{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={100} className="lg:self-end">
              <div className="rounded-[4px] bg-white p-7 shadow-[0_1px_2px_rgba(14,51,32,0.06),0_14px_34px_-20px_rgba(14,51,32,0.35)] md:p-9">
                <p className="font-serif text-3xl text-forest">Ready to start?</p>
                <p className="mt-3 leading-[1.7] text-body">
                  Send us a short message with your name, what you study and where. We will reply with the application
                  form.
                </p>
                <Button href="/contact?topic=Student%20support" className="mt-6 w-full sm:w-auto">
                  Request an application form
                </Button>
                <p className="mt-6 border-t border-rule pt-5 text-[14px] leading-snug text-body">
                  Your information is handled in confidence. See our{" "}
                  <Link href="/privacy#students" className="text-forest underline decoration-gold underline-offset-4">
                    policy on student information
                  </Link>
                  . Questions?{" "}
                  <Link href="/faq#students" className="text-forest underline decoration-gold underline-offset-4">
                    Read the FAQ
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
