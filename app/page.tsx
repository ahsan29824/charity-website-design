import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactBar from "@/components/ImpactBar";
import Mission from "@/components/Mission";
import Legacy from "@/components/Legacy";
import Governance from "@/components/Governance";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactBar />
        <Mission />
        <Legacy />
        <Governance />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
