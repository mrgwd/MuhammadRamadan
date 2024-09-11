import HeroSection from "@/components/common/heroSection";
import BlogHeroSection from "./blogHeroSection";
import Posts from "./posts";

export default function Blog() {
  return (
    <main className="text-dark-primary dark:text-light-primary">
      <HeroSection
        title="blog"
        description="Thoughts, sories and tutorials about programming, web development and
        life."
      />
      <Posts />
    </main>
  );
}
