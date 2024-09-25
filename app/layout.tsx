import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import opengraphImage from "@/public/static/images/opengraph-image.png";
import { Analytics } from "@vercel/analytics/react";
import ConsoleBanner from "@/components/consoleBanner";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Muhammad Ramadan",
    default: "Muhammad Ramadan",
  },
  description:
    "I am a Frontend Engineer, I work with the React ecosystem. I design and develop responsive and user-friendly user interfaces. I share my thoughts often to teach people about web development, JS, TS, React and Next.js.",
  keywords: [
    "Muhammad Ramadan",
    "Frontend Developer",
    "UI",
    "UX Designer",
    "React",
    "web development",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Egypt",
    "Mansoura",
    "Dakahlia",
    "UI Engineer",
    "UI/UX",
    "UI Developer",
    "Frontend Engineer",
  ],
  openGraph: {
    images: {
      url: opengraphImage.src,
      alt: "Opengraph Image of Muhammad Ramadan",
    },
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body
        className={`${karla.className} scrollbar bg-light-primary tracking-tight dark:bg-dark-primary`}
      >
        <Navbar />
        {children}
        <Footer />
        <ConsoleBanner />
        <Analytics />
      </body>
    </html>
  );
}
