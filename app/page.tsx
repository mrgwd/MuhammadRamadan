import CurrentActivities from "@/components/home/currentActivities";
import RecentPosts from "@/components/home/recentPosts";
import React from "react";
import HeroSection from "@/components/common/heroSection";
import { PaperClip, Twitter, Github } from "@/components/common/icons";
import SocialLink from "@/components/home/socialLink";

export default function Home(): JSX.Element {
  return (
    <main className="text-dark-primary dark:text-light-primary">
      <HeroSection
        title="hey, I'm Muhammad 👋"
        description="I am a Frontend Engineer, I work with the React ecosystem. I design
          and develop responsive and user-friendly user interfaces. I share my
          thoughts often to teach people about web development, JS, TS, React
          and Next.js."
      >
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-light-muted">
          <SocialLink href="./assets/resume.pdf" handle="Resume">
            <PaperClip className="size-5 stroke-light-muted grayscale group-hover:stroke-dark-muted group-hover:grayscale-0 dark:group-hover:stroke-light-primary" />
          </SocialLink>

          <SocialLink
            href="https://www.twitter.com/_MuhammedR"
            handle="@_MuhammedR"
          >
            <Twitter className="size-5 fill-light-muted group-hover:fill-[#1da1f2]" />
          </SocialLink>

          <SocialLink href="https://www.github.com/mrgwd" handle="mrgwd">
            <Github className="size-5 fill-light-muted group-hover:fill-dark-muted dark:group-hover:fill-light-primary" />
          </SocialLink>
        </div>
      </HeroSection>
      <CurrentActivities />
      <RecentPosts />
    </main>
  );
}
