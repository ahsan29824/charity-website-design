import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thank You — The Sadique Foundation",
  robots: { index: false },
};

const copy = {
  pledge: {
    label: "Thank you for your pledge",
    title: "Your generosity carries his purpose forward",
    body: "Your email app should now be open with your pledge ready to send. Once it reaches us, we will reply with how to complete your gift. Secure online payments are being set up.",
  },
  message: {
    label: "Message ready to send",
    title: "Thank you for getting in touch",
    body: "Your email app should now be open with your message ready to send. We read every message and reply personally, usually within a few working days.",
  },
};

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ for?: string }> }) {
  const { for: kind } = await searchParams;
  const c = kind === "pledge" ? copy.pledge : copy.message;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-forest-deep text-white">
          <div className="mx-auto max-w-6xl px-5 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28">
            <div className="max-w-2xl">
              <Image src="/logo-mark-light.png" alt="" width={523} height={483} sizes="80px" className="h-20 w-auto" />
              <p className="mt-8 text-[15px] font-semibold text-gold">{c.label}</p>
              <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium tracking-[-0.015em] md:text-6xl">
                {c.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-[1.65] text-white/75">{c.body}</p>
              <p className="mt-6 max-w-xl leading-[1.65] text-white/60">
                If your email app didn&rsquo;t open, please write to us directly at{" "}
                <a href="mailto:contact@sadique.org" className="font-semibold text-gold underline underline-offset-4">
                  contact@sadique.org
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="font-serif text-3xl text-forest">While you&rsquo;re here</p>
              <p className="mt-2 max-w-md text-body">
                Learn about the man who inspired the Foundation, or the people who oversee our work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/founder">His story</Button>
              <Button href="/trustees" variant="outline">
                Our trustees
              </Button>
              <Link href="/" className="self-center px-2 text-[15px] font-semibold text-forest underline decoration-gold decoration-2 underline-offset-[7px]">
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
