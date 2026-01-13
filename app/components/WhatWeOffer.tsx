'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, DollarSign, Zap } from 'lucide-react';

const WhatWeOffer = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerOpacity = Math.max(0, 1 - scrollY / 300);
  const headerScale = Math.max(0.8, 1 - scrollY / 1000);
  const cardsTranslate = Math.min(scrollY * 0.3, 200);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 px-6 min-h-screen">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(
              circle at ${20 + scrollY * 0.05}% ${30 + scrollY * 0.03}%,
              rgba(247, 185, 85, 0.15),
              transparent 60%
            ),
            radial-gradient(
              circle at ${80 - scrollY * 0.04}% ${70 - scrollY * 0.02}%,
              rgba(167, 139, 250, 0.15),
              transparent 60%
            ),
            linear-gradient(
              135deg,
              #FEF7F0 0%,
              #F5E6FF 50%,
              #E8F4FF 100%
            )
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Sticky Header with Parallax */}
        <div 
          className="sticky top-20 mb-32 transition-all duration-300"
          style={{
            opacity: headerOpacity,
            transform: `scale(${headerScale}) translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h2 className="text-5xl md:text-4xl font-extrabold text-[#14325A] mb-12 text-center uppercase">
            What we Offer.
          </h2>
          
          {/* Key Value Proposition - Floating Card */}
          <div 
            className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-10 border border-black/5 shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            <div className="md:flex items-start gap-8">
              <div className="shrink-0">
                <div className="w-15 h-15 md:w-20 md:h-20 rounded-2xl bg-linear-to-br from-[#14325A] to-[#2A4A7A] flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#14325A] mb-4 uppercase mt-2 md:mt-0">
                  Key Value Proposition
                </h3>
                <p className="text-xl text-[#3A3A3A] leading-relaxed">
                  We help candidates gain real interview experience, improve how they answer questions, and build the confidence needed to secure job offers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Cards with Parallax Overlap */}
        <div 
          className="space-y-8"
          style={{
            transform: `translateY(-${cardsTranslate}px)`,
          }}
        >
          {/* Core Offering */}
          <div 
            className="bg-linear-to-br from-[#F5A623] via-[#F7B955] to-[#FDC97D] rounded-[2rem] p-12 shadow-2xl border border-[#F5A623]/20 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(245,166,35,0.3)]"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            <div className="flex items-start gap-8 flex-col md:flex-row">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/40">
                  <Zap className="w-12 h-12 text-[#14325A]" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#14325A] mb-5 uppercase">
                  Core Offering
                </h3>
                <p className="text-[#14325A]/90 leading-relaxed text-lg md:text-xl">
                  You don&apos;t just learn how to answer interview questions. You learn what hiring managers are really evaluating when they ask them.
                </p>
              </div>
            </div>
          </div>

          {/* Personalized Feedback */}
          <div 
            className="bg-linear-to-br from-[#A78BFA] via-[#B99EFB] to-[#C4B5FD] rounded-[2rem] p-12 shadow-2xl border border-[#A78BFA]/20 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(167,139,250,0.3)] md:ml-20"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          >
            <div className="flex items-start gap-8 flex-col md:flex-row">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/40">
                  <Target className="w-12 h-12 text-[#14325A]" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl  font-extrabold text-[#14325A] mb-5 uppercase">
                  Personalized Feedback
                </h3>
                <p className="text-[#14325A]/90 leading-relaxed text-lg md:text-xl">
                  Every session is tailored to your specific role, industry, and interview style. You get actionable feedback you can implement immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Affordable Tiers */}
          <div 
            className="bg-linear-to-br from-[#C4B5FD] via-[#D4C5FD] to-[#DDD6FE] rounded-[2rem] p-12 shadow-2xl border border-[#C4B5FD]/20 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(196,181,253,0.3)] md:ml-40"
            style={{
              transform: `translateY(${scrollY * 0.11}px)`,
            }}
          >
            <div className="flex items-start gap-8 flex-col md:flex-row">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/40">
                  <DollarSign className="w-12 h-12 text-[#14325A]" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#14325A] mb-5 uppercase">
                  Affordable Tiers
                </h3>
                <p className="text-[#14325A]/90 leading-relaxed text-lg md:text-xl">
                  We offer options that fit your needs and budget. Invest in your career without breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for scroll effect */}
      {/* <div className="h-32" /> */}
    </section>
  );
};

export default WhatWeOffer;