"use client";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/Button";
// import Lottie from "lottie-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      {/* === LINEAR GRADIENT BACKGROUND === */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              #E1D8F2 0%,
              #F8D6CD 45%,
              #FEF7F0 100%
            )
          `,
        }}
      />

      {/* === DECORATIVE BLOBS === */}
      <div className="absolute lg:top-20 left-10 w-72 h-72 bg-[#F8D6CD]/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E1D8F2]/40 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FEF7F0]/60 rounded-full blur-3xl" />
      <div className="mx-auto mb-12 w-full max-w-lg md:max-w-2xl">
        {/* <Lottie animationData={interviewAnimation} loop autoplay /> */}
      </div>
      {/* === CONTENT === */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 mt-10 lg:mt-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
            <span className="text-sm font-medium text-[#14325A]">
              Interview Coaching That Works
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold text-[#14325A] mb-6 uppercase">
            Master the Interview. <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#14325A] to-[#4B6CB7] uppercase">
              Land the Offer.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#3A3A3A] max-w-2xl mx-auto mb-10">
            Personalized coaching that gives you the confidence, skills, and
            insider knowledge to excel in interviews and land your dream job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" onClick={scrollToBooking}>
              Book a Session
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToServices}>
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* === BOTTOM WAVE === */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
            fill="#FEF7F0"

          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
