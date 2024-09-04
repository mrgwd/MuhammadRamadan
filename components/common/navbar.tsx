import { Sun } from "@/components/common/icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex justify-between border-r border-r-light-secondary px-3 py-10 text-lg text-dark-primary dark:border-r-dark-muted dark:text-light-primary sm:px-6">
      <ul className="flex items-center space-x-4 sm:space-x-8">
        <li>
          <Link
            href="/"
            className="transition-all hover:text-dark-muted dark:hover:text-light-secondary"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            className="transition-all hover:text-dark-muted dark:hover:text-light-secondary"
          >
            work
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-all hover:text-dark-muted dark:hover:text-light-secondary"
          >
            about
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4 sm:space-x-8">
        <p>ar</p>
        <Sun className="size-7 fill-dark-primary dark:fill-light-primary" />
      </div>
      {/* <BackgroundLogo className="absolute bottom-[-0.5px] left-full h-96 w-min fill-light-secondary dark:fill-dark-muted" /> */}
    </nav>
  );
}
