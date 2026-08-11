import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SituationsGrid from "@/components/SituationsGrid";
import HowSheWorks from "@/components/HowSheWorks";
import TrackRecord from "@/components/TrackRecord";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SituationsGrid />
        <HowSheWorks />
        <TrackRecord />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
