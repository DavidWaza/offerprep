'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book Session', href: '#booking' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  
 const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-6 left-0 z-50 w-full px-4">
      {/* === GLASS BAR === */}
      <div className="mx-auto max-w-4xl">
        <div
          className="
            flex items-center justify-between
            rounded-full
            border border-white/30
            bg-white/40
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            px-6 py-4
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="font-montserrat font-extrabold tracking-tight text-[#14325A] uppercase text-2xl"
          >
            Offerprep.
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="text-sm uppercase font-bold text-[#14325A]/80 hover:text-[#14325A]"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-[#14325A]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
              md:hidden
              mx-auto mt-4 max-w-6xl
              rounded-3xl
              border border-white/30
              bg-white/50
              backdrop-blur-xl
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              px-6 py-6
            "
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
                    text-base font-medium
                    text-[#14325A]
                    py-2
                  "
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
