import Link from "next/link";

interface Props {
  href: string;
  handle: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
}
export default function ExternalLink({
  href,
  handle,
  children,
  ...props
}: Props) {
  return (
    <Link
      target={props.target || "_blank"}
      href={href}
      className={`cursor-link group flex items-center gap-2 hover:text-dark-muted dark:hover:text-light-primary ${children ? "*:transition-all" : "transition-all"} ${props.className || ""}`}
    >
      {children ? (
        <>
          {children}
          <span>{handle}</span>
        </>
      ) : (
        handle
      )}
    </Link>
  );
}
