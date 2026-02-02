import type { Metadata } from "next";
import { Inter, Montserrat, Changa_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LoadingOverlay from "./components/LoadingOverlay";
import { Toaster, toast } from "sonner";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Offerprep.",
  description:
    "Ace Your Interviews with Expert Coaching and Personalized Feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.className} ${changaOne.variable} antialiased`}
      >
        <Header />
        <Toaster richColors />
        <LoadingOverlay />
        {children}
        <Footer />
      </body>
    </html>
  );
}
