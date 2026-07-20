import Hero from "@/components/Sections/Hero";
import Credibility from "@/components/Sections/Credibility";
import DualProfil from "@/components/Sections/DualProfil";
import EventHighlight from "@/components/Sections/EventHighlight";
import BoutiqueFlash from "@/components/Sections/BoutiqueFlash";
import CTAReservation from "@/components/Sections/CTAReservation";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <DualProfil />
      <EventHighlight />
      <BoutiqueFlash />
      <CTAReservation />
    </>
  );
}