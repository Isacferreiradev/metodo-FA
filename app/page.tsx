import Hero from "@/components/sections/Hero";
import PainRecognition from "@/components/sections/PainRecognition";
import Truth from "@/components/sections/Truth";
import Specialist from "@/components/sections/Specialist";
import FourPillars from "@/components/sections/FourPillars";
import WhatYouGet from "@/components/sections/WhatYouGet";
import Bonuses from "@/components/sections/Bonuses";
import ForWhom from "@/components/sections/ForWhom";
import Guarantee from "@/components/sections/Guarantee";
import Plans from "@/components/sections/Plans";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalLetter from "@/components/sections/FinalLetter";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import PurchaseNotification from "@/components/ui/PurchaseNotification";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainRecognition />
      <Truth />
      <Specialist />
      <FourPillars />
      <WhatYouGet />
      <Bonuses />
      <ForWhom />
      <Guarantee />
      <Plans />
      <Testimonials />
      <FAQ />
      <FinalLetter />
      <FinalCTA />
      <PurchaseNotification />
      <Footer />
    </main>
  );
}
