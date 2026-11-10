import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — The Sadique Foundation",
  description: "Get in touch with The Sadique Foundation about partnerships, student support, media or safeguarding.",
};

const routes = [
  {
    title: "Partnerships",
    body: "Universities, schools and organisations who share our belief that talent should never be wasted.",
  },
  {
    title: "Student support",
    body: "Questions about our scholarships and orphan sponsorship, and how candidates are assessed.",
  },
  {
    title: "Safeguarding",
    body: "Any concern about the welfare of a student we support is treated seriously and in confidence.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Contact Us"
          title="We’d be glad to hear from you"
          intro="Whether you’d like to support a student, partner with us, or simply learn more about Mohammed Sadique’s legacy, write to us and a member of the team will reply."
        />

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={120}>
              <aside>
                <p className="text-[15px] font-semibold text-gold-deep">Write to us directly</p>
                <a
                  href="mailto:contact@sadique.org"
                  className="mt-2 inline-block font-serif text-3xl text-forest underline decoration-gold decoration-2 underline-offset-[8px] hover:decoration-forest md:text-[2.1rem]"
                >
                  contact@sadique.org
                </a>
                <p className="mt-4 text-body">The Sadique Foundation · United Kingdom</p>

                <ul className="mt-12 divide-y divide-rule border-y border-rule">
                  {routes.map((r) => (
                    <li key={r.title} className="py-6">
                      <h2 className="font-serif text-xl text-forest">{r.title}</h2>
                      <p className="mt-2 leading-[1.65] text-body">{r.body}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-[4px] bg-forest-deep p-7 text-white">
                  <p className="font-serif text-2xl leading-snug">Ready to change a student&rsquo;s future?</p>
                  <Link
                    href="/donate"
                    className="mt-5 inline-flex rounded-[3px] bg-gold px-5 py-3 text-[15px] font-semibold text-forest-deep transition-colors hover:bg-[#d39c1c]"
                  >
                    Make a donation
                  </Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
