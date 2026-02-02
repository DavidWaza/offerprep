import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#14325A] text-white">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
           <Link
            href="/"
            className="font-montserrat font-extrabold tracking-tight text-white/70 uppercase text-2xl"
          >
            Offerprep.
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                <Phone className="w-5 h-5" />
              </span>
              <a
                href="tel:+2348012345678"
                className="text-sm md:text-base hover:text-[#F59E0B] transition-colors"
              >
                +234 801 234 5678
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                <Mail className="w-5 h-5" />
              </span>
              <a
                href="mailto:hello@interviewcoach.com"
                className="text-sm md:text-base hover:text-[#F59E0B] transition-colors"
              >
                hello@interviewcoach.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} InterviewCoach. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
