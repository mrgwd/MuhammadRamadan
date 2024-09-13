import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MSXRenderer";
import { formateDate } from "@/utils/formateDate";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `content/blog/${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  const date = formateDate(data.createdAt);

  return (
    <>
      <section className="space-y-0 border">
        <h1>{data.title}</h1>
        <div className="flex gap-2 text-dark-muted dark:text-light-muted">
          <p>{date}</p>
          <span>-</span>
          <p>{data.tags}</p>
        </div>
      </section>
      <article className="border border-t-0">
        <MDXRenderer source={mdxSource} />
      </article>
    </>
  );
}
