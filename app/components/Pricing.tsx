'use client';

import React from 'react';
import { Check, DollarSign, Sparkles } from 'lucide-react';
import { CurrencyNgn } from '@phosphor-icons/react/dist/ssr';

const plans = [
  {
    id: 1,
    name: 'Starter Plan',
    number: '1',
    amount: '4,000',
    DollarAmount: '$2.81',
    description: '60-minute focused session to boost your confidence and fix critical interview mistakes fast.',
    features: [
      '30-min mock interview',
      '15-min feedback session',
      'Written summary of strengths',
      'Actionable improvement plan'
    ],
    borderColor: 'border-[#A78BFA]',
    numberColor: 'text-[#A78BFA]',
    buttonStyle: 'border-[#A78BFA] text-[#A78BFA] hover:bg-[#A78BFA] hover:text-white',
    popular: false
  },
  {
    id: 2,
    name: 'Pro Plan',
    number: '2',
    amount: '7,500',
    DollarAmount: '$5.27',
    description: 'A comprehensive mock interview paired with detailed coaching, practical HR insights, and a follow-up session.',
    features: [
      '45-min full mock interview',
      '30-min detailed coaching',
      'HR perspective insights',
      '5-7 page feedback document',
      'A follow-up mock interview session'
    ],
    borderColor: 'border-[#F5A623]',
    numberColor: 'text-[#F5A623]',
    buttonStyle: 'bg-[#F5A623] text-white hover:bg-[#8B5CF6]',
    popular: true
  },
  {
    id: 3,
    name: 'Premium Plan',
    number: '3',
    amount: '10,000',
    DollarAmount: '$7.03',
    description: 'Three coaching sessions covering end-to-end interview preparation, including CV review and career coaching.',
    features: [
      '3 comprehensive sessions',
      'CV review and restructuring',
      'Strategic preparation',
      'Salary negotiation coaching'
    ],
    borderColor: 'border-[#A78BFA]',
    numberColor: 'text-[#A78BFA]',
    buttonStyle: 'border-[#A78BFA] text-[#A78BFA] hover:bg-[#A78BFA] hover:text-white',
    popular: false
  }
];

const PricingPlans = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background with subtle gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #F5F5F5 0%,
              #FAFAFA 100%
            )
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#14325A] mb-4 uppercase">
            Our Services.
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Choose the package that fits your needs and career goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl border-2 ${plan.borderColor} p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#F5A623] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Number and Title */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-0">
                  <span className={`text-5xl font-bold ${plan.numberColor}`}>
                    {plan.number}
                  </span>
                  <h3 className="text-2xl font-bold text-[#14325A]">
                    {plan.name}
                  </h3>
                </div>
                  <h3 className="ml-auto text-2xl font-extrabold text-[#14325A] text-right pt-2 pb-4 flex justify-end items-center">
                    <CurrencyNgn size={25} weight='bold'/>
                    {plan.amount} ~ <span className='text-lg'>{(plan.DollarAmount)}</span>
                    </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span className="text-[#14325A]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold border-2 transition-all duration-300 ${plan.buttonStyle}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;