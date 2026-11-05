import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Legacy from "@/components/Legacy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohammed Sadique (1950–2026) — The Sadique Foundation",
  description:
    "The life and quiet generosity of Mohammed Sadique, whose belief in giving inspired The Sadique Foundation.",
};

export default function FounderPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="About the Founder"
          title="Mohammed Sadique, 1950 – 2026"
          intro="He believed that giving to others is the highest responsibility one can hold. The Foundation exists so that belief keeps opening doors for students."
        />
        <Legacy showStoryLink={false} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
