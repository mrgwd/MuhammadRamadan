import HeroSection from "@/components/common/heroSection";
import Posts from "./posts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tutorials, stories and Thoughts about programming, web development and life.",
  keywords: [
    "blog",
    "programming",
    "web development",
    "Tutorials",
    "stories",
    "Thoughts",
    "Tech",
    "React",
    "Next.js",
    "Tech Blog",
    "Developer Blog",
  ],
};

export default function Blog() {
  return (
    <main className="text-dark-secondary dark:text-light-secondary">
      <HeroSection title="read my blog">
        <p>
          Tutorials, stories and Thoughts about programming, web development and
          life.
        </p>
      </HeroSection>
      <Posts />
    </main>
  );
}
