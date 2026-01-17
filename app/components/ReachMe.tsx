"use client";

import React from "react";
import { Calendar, Clock, OctagonAlert, RotateCcw } from "lucide-react";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6" id="booking">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "#F5E6E0",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#14325A] mb-6 uppercase">
                Ready to Crush That Interview?
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Book your session today and take the first step towards landing
                your dream job.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {/* 48-Hour Advance Booking */}
              <div className="flex items-start gap-4 bg-[#FFF4E6] rounded-2xl p-6 border border-[#FFE4C4]">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14325A] mb-1">
                    48-Hour Advance Booking
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    This allows us time to review your information and prepare
                    properly.
                  </p>
                </div>
              </div>

              {/* Flexible Scheduling */}
              <div className="flex items-start gap-4 bg-[#F3E8FF] rounded-2xl p-6 border border-[#E9D5FF]">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14325A] mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Pick a date and time that works for you. We&apos;ll send
                    confirmation to your inbox.
                  </p>
                </div>
              </div>

              {/* 24-Hour Reschedule Policy */}
              <div className="flex items-start gap-4 bg-[#FFE4E1] rounded-2xl p-6 border border-[#FFD4CC]">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <RotateCcw className="w-6 h-6 text-[#E57373]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14325A] mb-1">
                    24-Hour Reschedule Policy
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Need to change your appointment? No problem with 24 hours
                    notice.
                  </p>
                </div>
              </div>
              {/* DISCLAIMER */}
              <div className="py-3">
                <div className="flex items-center gap-1 py-2">
                  <OctagonAlert
                    fontWeight={800}
                    size={27}
                    className="text-amber-700"
                  />
                  <h2 className="text-2xl font-extrabold uppercase text-gray-700">
                    DISCLAIMER
                  </h2>
                </div>
                <h3 className="font-semibold text-gray-700">
                  If you’re preparing for a specific role or company, please
                  include the company name and job description so we can tailor
                  the session to your interview.
                </h3>
                <br />
                <h3 className="font-semibold text-gray-700">
                  If you’re practicing interviews in general, you can leave
                  those fields blank.
                </h3>
                <br />
                <h3 className="font-semibold text-gray-700">
                  Our coaching ensures you are better prepared and more
                  confident, but hiring decisions remain at the discretion of
                  the employer. A successful outcome requires a blend of strong
                  interview performance and the necessary technical expertise
                  for the role.
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
