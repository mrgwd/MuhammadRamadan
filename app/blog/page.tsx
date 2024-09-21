import HeroSection from "@/components/common/heroSection";
import Articles from "./articles";

export default function Blog() {
  return (
    <main className="text-dark-secondary dark:text-light-secondary">
      <HeroSection title="read my blog">
        <p>
          Tutorials, stories and Thoughts about programming, web development and
          life.
        </p>
      </HeroSection>
      <Articles />
    </main>
  );
}
