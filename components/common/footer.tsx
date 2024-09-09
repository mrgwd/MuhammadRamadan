import { Envelope, Github, Linkedin, Twitter } from "@/components/common/icons";
import Link from "next/link";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between border-l border-light-secondary font-medium text-light-muted dark:border-dark-muted max-sm:flex-col">
      <div className="flex items-center gap-4">
        <p>Reach me out:</p>
        <div className="flex gap-2">
          <Link href="https://github.com/mrgwd" className="cursor-link">
            <Github className="h-5 fill-light-muted hover:fill-primary-muted" />
          </Link>
          <Link href="https://twitter.com/_MuhammedR" className="cursor-link">
            <Twitter className="h-5 fill-light-muted hover:fill-primary-muted" />
          </Link>
          <Link href="https://twitter.com/_MuhammedR" className="cursor-link">
            <Linkedin className="h-5 fill-light-muted hover:fill-primary-muted" />
          </Link>
          <Link href="mailto:mogdwd@gmail.com" className="cursor-link">
            <Envelope className="h-5 fill-light-muted hover:fill-primary-muted" />
          </Link>
        </div>
      </div>
      <p>&copy; mrgwd {date} • Got any feedback?</p>
    </footer>
  );
}
