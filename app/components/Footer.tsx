import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold text-[#4a5565]"
        >
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
