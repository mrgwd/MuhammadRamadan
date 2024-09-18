import CurrentActivities from "@/components/home/currentActivities";
import RecentPosts from "@/components/home/recentPosts";
import React from "react";
import HeroSection from "@/components/common/heroSection";
import { PaperClip, Twitter, Github } from "@/components/common/icons";
import Link from "next/link";
import ExternalLink from "@/components/home/externalLink";

export default function Home(): JSX.Element {
  return (
    <main className="text-dark-primary dark:text-light-secondary">
      <HeroSection title="hey, I'm Muhammad 👋">
        <p>
          I am a Frontend Engineer, I{" "}
          <Link href="/work" className="link">
            work
          </Link>{" "}
          with the React ecosystem. I design and develop responsive and
          user-friendly user interfaces. I{" "}
          <Link href="/blog" className="link">
            share
          </Link>{" "}
          my thoughts often to teach people about web development, JS, TS, React
          and Next.js.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-light-muted">
          <ExternalLink href="./assets/resume.pdf" handle="Resume">
            <PaperClip className="size-5 stroke-dark-muted group-hover:stroke-dark-primary dark:stroke-light-muted dark:group-hover:stroke-light-primary" />
          </ExternalLink>

          <ExternalLink
            href="https://www.twitter.com/_MuhammedR"
            handle="@_MuhammedR"
          >
            <Twitter className="size-5 fill-light-muted group-hover:fill-[#1da1f2]" />
          </ExternalLink>

          <ExternalLink href="https://www.github.com/mrgwd" handle="mrgwd">
            <Github className="size-5 fill-dark-muted group-hover:fill-dark-primary dark:fill-light-muted dark:group-hover:fill-light-primary" />
          </ExternalLink>
        </div>
      </HeroSection>
      {/* <div className="divider"></div> */}
      <CurrentActivities />
      {/* <div className="divider"></div> */}
      <RecentPosts />
    </main>
  );
}
