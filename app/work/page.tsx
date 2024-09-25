import HeroSection from "@/components/common/heroSection";
import Experiences from "@/components/work/experiences";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "I started my professional career as a Frontend Developer recently. I have worked on projects and collaborated with awesome teams and people that have helped me grow as a developer and as a person. Here's a summary of my work so far.",
  keywords: [
    "work",
    "experience",
    "professional",
    "career",
    "projects",
    "accomplishments",
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Development",
  ],
};

export default function Work(): JSX.Element {
  return (
    <div className="text-dark-secondary dark:text-light-secondary">
      <HeroSection title="my work">
        <p>
          I started my professional career as a{" "}
          <strong>Frontend Developer</strong> recently. I have worked on
          projects and collaborated with awesome teams and people that have
          helped me grow as a developer and as a person. Here&apos;s a summary
          of my work so far.
        </p>
      </HeroSection>
      <Experiences />
    </div>
  );
}
