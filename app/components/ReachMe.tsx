'use client';

import React, { useState } from 'react';
import { Calendar, Clock, RotateCcw, Send } from 'lucide-react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    package: '',
    goals: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#F5E6E0'
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
                Book your session today and take the first step towards landing your dream job.
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
                    This allows us time to review your information and prepare properly.
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
                    Pick a date and time that works for you. We&apos;ll send confirmation to your inbox.
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
                    Need to change your appointment? No problem with 24 hours notice.
                  </p>
                </div>
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
                  onChange={(e) => handleChange('fullName', e.target.value)}
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
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
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
                  onChange={(e) => handleChange('package', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Choose a package...</option>
                  <option value="starter">Starter Plan</option>
                  <option value="pro">Pro Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
              </div>

              {/* Goals */}
              <div>
                <label className="block text-sm font-semibold text-[#14325A] mb-2">
                  Tell us about your goals (optional)
                </label>
                <textarea
                  value={formData.goals}
                  onChange={(e) => handleChange('goals', e.target.value)}
                  placeholder="What role are you interviewing for? Any specific areas you'd like to focus on?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                />
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