import ExternalLink from "../home/externalLink";

export default function Footer() {
  return (
    <footer className="mb-10 mt-16 flex space-x-3 text-dark-muted hover:text-dark-primary dark:text-light-muted dark:hover:text-light-primary">
      <ExternalLink
        href="https://twitter.com/_MuhammedR"
        handle="@_MuhammedR"
      />
      <ExternalLink href="https://linkedin.com/in/mrgwd" handle="linkedin" />
      <ExternalLink href="https://github.com/mrgwd" handle="github" />
      <ExternalLink href="mailto:mogdwd@gmail.com" handle="email" />
    </footer>
  );
}
