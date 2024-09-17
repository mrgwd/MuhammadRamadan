"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { slugify } from "@/utils/slugify";
import HeadingWithAnchor from "./headingWithAnchor";

export default function MDXRenderer({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  const components = {
    h2: (props: any) => (
      <HeadingWithAnchor id={slugify(props.children)} {...props} />
    ),
  };
  return <MDXRemote {...source} components={components} />;
}
