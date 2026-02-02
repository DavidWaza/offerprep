import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import PricingPlans from "./components/Pricing";
import BookingSection from "./components/ReachMe";
import Testimonials from "./components/Testimonial";
import WhatWeOffer from "./components/WhatWeOffer";
import WhoWeServe from "./components/WhoWeServe";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <WhoWeServe />
      <MissionVision />
      <WhatWeOffer />
      <PricingPlans />
      <BookingSection />
      <Testimonials />
    </div>
  );
}
