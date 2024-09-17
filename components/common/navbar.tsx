import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-md mb-16 mt-12 flex justify-between text-dark-primary dark:text-light-primary">
      <ul className="flex items-center gap-4 sm:gap-6">
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
            href="/blog"
            className="transition-all hover:text-dark-muted dark:hover:text-light-secondary"
          >
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
