import CurrentActivities from "@/components/home/currentActivities";
import HeroSection from "@/components/home/about";
import RecentPosts from "@/components/home/recentPosts";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <main className="text-dark-primary dark:text-light-primary">
      <HeroSection />
      <CurrentActivities />
      <RecentPosts />
    </main>
  );
}
