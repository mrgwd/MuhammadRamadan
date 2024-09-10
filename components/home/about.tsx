import { PaperClip, Twitter, Github } from "@/components/common/icons";
import Link from "next/link";

export default function About() {
  return (
    <section className="hero border border-light-secondary text-dark-primary dark:border-dark-muted dark:text-light-primary">
      <h1 className="__cclassName_9e5c11 test">hey, I&apos;m Muhammad 👋</h1>
      <p>
        I am a Frontend Engineer, I work with the React ecosystem. I design and
        develop responsive and user-friendly user interfaces. I share my
        thoughts often to teach people about web development, JS, TS, React and
        Next.js.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-light-muted *:*:transition-all">
        <Link
          href="./assets/resume.pdf"
          className="cursor-link group flex items-center gap-2 hover:text-dark-muted dark:hover:text-light-primary"
        >
          <PaperClip className="size-5 stroke-light-muted grayscale group-hover:stroke-dark-muted group-hover:grayscale-0 dark:group-hover:stroke-light-primary" />
          <span>Resume</span>
        </Link>
        <Link
          target="_blank"
          href="https://www.twitter.com/_MuhammedR"
          className="cursor-link group flex items-center gap-2 hover:text-dark-muted dark:hover:text-light-primary"
        >
          <Twitter className="size-5 fill-light-muted group-hover:fill-[#1da1f2]" />
          <span>@_MuhammedR</span>
        </Link>
        <Link
          href="https://www.github.com/mrgwd"
          className="cursor-link group flex items-center gap-2 hover:text-dark-muted dark:hover:text-light-primary"
          target="_blank"
        >
          <Github className="size-5 fill-light-muted group-hover:fill-dark-muted dark:group-hover:fill-light-primary" />
          <span>mrgwd</span>
        </Link>
      </div>
    </section>
  );
}
