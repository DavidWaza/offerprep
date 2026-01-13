import Hero from "./components/Hero";
import PricingPlans from "./components/Pricing";
import BookingSection from "./components/ReachMe";
import WhatWeOffer from "./components/WhatWeOffer";
import WhoWeServe from "./components/WhoWeServe";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <WhoWeServe />
      <WhatWeOffer />
      <PricingPlans />
      <BookingSection />
    </div>
  );
}
