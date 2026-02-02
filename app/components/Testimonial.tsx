"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Adewale O.",
    role: "Frontend Engineer",
    quote:
      "OfferPrep helped me structure my interview prep properly. I went into my interviews confident and prepared.",
  },
  {
    name: "Blessing A.",
    role: "Product Designer",
    quote:
      "The guidance was practical and tailored. I finally understood how to communicate my value clearly.",
  },
  {
    name: "Daniel K.",
    role: "Backend Developer",
    quote:
      "From mock interviews to feedback, everything felt intentional. I landed an offer within weeks.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Section header */}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
          What people are saying
        </h2>
        <p className="mt-3 text-gray-600">
          Real stories from candidates who prepared with OfferPrep
        </p>

        {/* Slider */}
        <div className="relative mt-14 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <blockquote className="text-lg leading-relaxed text-gray-800">
                “{testimonials[index].quote}”
              </blockquote>

              <div className="mt-6">
                <p className="font-medium text-gray-900">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-gray-900" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
