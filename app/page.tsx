import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Context from "@/components/sections/Context";
import Platform from "@/components/sections/Platform";
import PartnershipValue from "@/components/sections/PartnershipValue";
import FashionGraph from "@/components/sections/FashionGraph";
import Market from "@/components/sections/Market";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Context />
        <Platform />
        <PartnershipValue />
        <FashionGraph />
        <Market />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
