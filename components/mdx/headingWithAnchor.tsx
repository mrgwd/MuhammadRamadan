import Link from "next/link";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  id?: string;
}

const HeadingWithAnchor = ({ id, children }: HeadingProps) => {
  if (!id) return <>{children}</>;
  return (
    <h2 id={id} className="scroll-mt-5">
      <Link href={`#${id}`} className="anchor-link">
        {children}
      </Link>
    </h2>
  );
};

export default HeadingWithAnchor;
