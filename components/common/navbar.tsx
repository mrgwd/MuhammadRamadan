import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="borderr-r relative flex justify-between border-r-light-secondary px-3 py-10 text-lg text-dark-primary dark:border-r-dark-muted dark:text-light-primary sm:px-6">
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
