import HeroSection from "@/components/common/heroSection";
import Experiences from "@/components/work/experiences";

export default function Work(): JSX.Element {
  return (
    <div className="text-dark-secondary dark:text-light-secondary">
      <HeroSection title="my work">
        <p>
          I have been working as a Frontend Developer for the past recent years.
          I have worked on projects that have helped me grow as an developer and
          as a person. Here&apos;s a summary of my work so far.
        </p>
      </HeroSection>
      <Experiences />
    </div>
  );
}
