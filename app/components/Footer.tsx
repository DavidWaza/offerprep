<<<<<<< HEAD
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
=======
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-[#4a5565]">
          OFFERPREP.
        </Link>

        {/* Email */}
        <div className="flex items-center gap-1">
            <Send size={15} color="#4a5565" />
 <a
          href="mailto:hello@offerprep.net"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          info@offerprep.net
        </a>
        </div>
       
      </div>
    </footer>
  );
}
>>>>>>> 363cbca67de4f195227920a54adf0b88e561b77a
