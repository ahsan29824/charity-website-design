import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — The Sadique Foundation",
  description: "Answers to common questions from donors and students about The Sadique Foundation.",
};

const groups = [
  {
    id: "donors",
    title: "For donors",
    items: [
      {
        q: "How much of my donation goes to education?",
        a: "We follow a direct-to-education model: your gift is allocated to tuition, books, exam fees, living costs and mentorship for the students we support, and paid directly to institutions and vetted programmes.",
      },
      {
        q: "Can I choose where my gift goes?",
        a: "Yes. On the donate page you can choose Academic Scholarships, Orphan Care & Sponsorship or Community Development, or let us direct your gift to wherever it is needed most.",
      },
      {
        q: "How do I change or cancel a monthly gift?",
        a: "Email contact@sadique.org at any time and we will change or stop your regular gift. There is no minimum period and no charge for cancelling.",
      },
      {
        q: "Can I get a refund?",
        a: "If you have made a mistake with a donation, contact us within 30 days and we will refund it. Our Terms of Donation explain this in full.",
      },
      {
        q: "Can I donate as a company or organisation?",
        a: "We would love to hear from you. Organisations can sponsor several students or a whole programme; please get in touch through the partnership form.",
      },
      {
        q: "Will you share my details?",
        a: "No. We use your details only to process your gift and keep in touch if you ask us to. We never sell or share them for marketing.",
      },
    ],
  },
  {
    id: "students",
    title: "For students",
    items: [
      {
        q: "Who can apply for a grant?",
        a: "Students with real academic ability who cannot afford to continue their education. Priority is given to those who have lost one or both parents. The full criteria are on our Apply page.",
      },
      {
        q: "Do I have to pay the money back?",
        a: "No. Our support is a grant, not a loan. There is nothing to repay.",
      },
      {
        q: "Will the money be paid to me?",
        a: "Grants are paid directly to your school, college, university or approved programme rather than in cash. This keeps every pound accountable.",
      },
      {
        q: "How long does a decision take?",
        a: "It depends on the application round. We will tell you the expected timeline when we send you the application form.",
      },
      {
        q: "Will my story be made public?",
        a: "Never without your informed consent, and that of a guardian where appropriate. You can say no without it affecting your application.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="FAQ"
          title="Questions we are often asked"
          intro="Whether you are thinking of giving or thinking of applying, you should find your answer here. If not, we are always happy to help."
        />

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[14rem_1fr] lg:gap-20">
            <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
              <ul className="flex gap-6 border-b border-rule pb-4 lg:block lg:space-y-2.5 lg:border-b-0 lg:border-l lg:pb-0 lg:pl-4">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="text-body hover:text-forest hover:underline">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-w-3xl space-y-16">
              {groups.map((g) => (
                <div key={g.id} id={g.id} className="scroll-mt-28">
                  <h2 className="font-serif text-3xl text-forest md:text-4xl">{g.title}</h2>
                  <div className="mt-6 divide-y divide-rule border-y border-rule">
                    {g.items.map((item) => (
                      <details key={item.q} className="group">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold text-forest [&::-webkit-details-marker]:hidden">
                          {item.q}
                          <span
                            aria-hidden
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest/25 text-gold-deep transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="max-w-2xl pb-6 text-lg leading-[1.7] text-body">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-5 rounded-[4px] bg-forest-deep p-7 text-white sm:flex-row sm:items-center sm:justify-between md:p-8">
                <div>
                  <p className="font-serif text-2xl">Still have a question?</p>
                  <p className="mt-1 text-white/75">We read every message and reply personally.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-[3px] bg-gold px-5 py-3 text-[15px] font-semibold text-forest-deep hover:bg-[#d39c1c]">
                    Contact us
                  </Link>
                  <Link href="/apply" className="rounded-[3px] border border-white/30 px-5 py-3 text-[15px] font-semibold text-white hover:border-white">
                    Apply for a grant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
