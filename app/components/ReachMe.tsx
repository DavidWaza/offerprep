"use client";

import React, { useState } from "react";
import { Calendar, Clock, OctagonAlert, RotateCcw, Send } from "lucide-react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobrole: "",
    company: "",
    package: "",
    jobDescription: "",
    goals: "",
    attachments: [] as File[],
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files) return;

    setFormData((prev) => ({
      ...prev,
      attachments: Array.from(files),
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

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
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#14325A] mb-6">
              Book Your Session
            </h3>

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                />
              </div>

              {/* Job Role */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Job Role
                </label>
                <input
                  type="tel"
                  value={formData.jobrole}
                  onChange={(e) => handleChange("jobrole", e.target.value)}
                  placeholder="Software Developer"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                />
              </div>
              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Company
                </label>
                <input
                  type="tel"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Anthropic"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                />
              </div>

              {/* Select Package */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Select Package
                </label>
                <select
                  value={formData.package}
                  onChange={(e) => handleChange("package", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Choose a package...</option>
                  <option value="starter">Starter Plan</option>
                  <option value="pro">Pro Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
              </div>

              {/* Job Desvription */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Job Description (optional)
                </label>
                <textarea
                  value={formData.jobDescription}
                  onChange={(e) =>
                    handleChange("jobDescription", e.target.value)
                  }
                  placeholder="Add the company's job description you are interviewing for"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                />
              </div>
              {/* Goals */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  What is your current goal? (optional)
                </label>
                <textarea
                  value={formData.goals}
                  onChange={(e) => handleChange("goals", e.target.value)}
                  placeholder="What role are you interviewing for? Any specific areas you'd like to focus on?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* CV / Supporting Materials */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Upload CV or Supporting Documents
                </label>

                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e.target.files)}
                  className="w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 
               bg-gray-50 text-sm text-gray-600
               focus:outline-none focus:ring-2 focus:ring-[#A78BFA] 
               focus:border-transparent transition-all cursor-pointer"
                />

                <p className="mt-2 text-xs text-gray-500">
                  Accepted formats: PDF, DOC, DOCX. You may upload your CV,
                  portfolio, or any other relevant material.
                </p>

                {/* Optional preview */}
                {formData.attachments.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {formData.attachments.map((file, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#A78BFA] rounded-full" />
                        {file.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#A78BFA] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#8B5CF6] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Submit Request
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
