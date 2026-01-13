import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import LoadingOverlay from "./components/LoadingOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Offerprep.",
  description: "Ace Your Interviews with Expert Coaching and Personalized Feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.className} antialiased`}
      >
        <Header />
  <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
