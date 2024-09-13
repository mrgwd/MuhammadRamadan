import { Envelope, Github, Linkedin, Twitter } from "@/components/common/icons";
import Link from "next/link";
import PageSize from "./pageSize";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="space-x-3 text-light-muted dark:border-dark-muted max-sm:flex-col">
      <Link
        href="https://twitter.com/_MuhammedR"
        className="cursor-link transition-all dark:hover:text-light-primary"
      >
        @_MuhammedR
      </Link>
      <Link
        href="https://linkedin.com/in/mrgwd"
        className="cursor-link transition-all dark:hover:text-light-primary"
      >
        linkedin
      </Link>
      <Link
        href="https://github.com/mrgwd"
        className="cursor-link transition-all dark:hover:text-light-primary"
      >
        github
      </Link>
      <Link
        href="mailto:mogdwd@gmail.com"
        className="cursor-link transition-all dark:hover:text-light-primary"
      >
        email
      </Link>
    </footer>
  );
}
