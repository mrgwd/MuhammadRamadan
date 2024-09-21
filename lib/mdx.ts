import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

export async function getMdxSource(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  const { code } = await bundleMDX({
    source: content,
    cwd: path.dirname(filePath),
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ];
      options.remarkPlugins = [...(options.remarkPlugins || []), remarkGfm];
      return options;
    },
  });

  return {
    code,
    frontMatter: data,
  };
}
