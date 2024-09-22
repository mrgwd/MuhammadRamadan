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
    "esbuild.exe",
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild",
  );
}

export async function getMdxSource(slug: string) {
  const postsDirectory = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`,
  );
  const source = fs.readFileSync(postsDirectory, "utf8");

  const { content, data } = matter(source);

  const { code } = await bundleMDX({
    source: content,
    cwd: path.dirname(postsDirectory),
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: { className: "anchor" },
          },
        ],
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

export async function getAllMdxFiles() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = await fs.promises.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(source);
      return { data, slug };
    }),
  );
  return posts;
}
