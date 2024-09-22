import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import HeroSection from "@/components/common/heroSection";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body
        className={`${karla.className} scrollbar bg-light-primary dark:bg-dark-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
