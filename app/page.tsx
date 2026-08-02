import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import BrandCases from "@/components/BrandCases";
import WhyForge from "@/components/WhyForge";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <SelectedWork />
        <BrandCases />
        <WhyForge />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
