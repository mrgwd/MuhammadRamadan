import Link from "next/link";

export default function CurrentActivities() {
  return (
    <section data-fade-2>
      <h2 className="font-medium text-dark-primary dark:text-light-primary">
        Now
      </h2>
      <p className="">
        Working on some{" "}
        <Link href="https://github.com/mrgwd" className="link cursor-link">
          open-source projects
        </Link>
        , getting my YouTube channel ready to start making videos, and seeking a
        new challenge as a frontend developer.
      </p>
      {/* <hr /> */}
    </section>
  );
}
