import fs from "fs";
import Card from "@/components/common/card";
import { createADMINClient } from "@/utils/supabase/server";
import path from "path";
import matter from "gray-matter";

export default async function articles() {
  // const supabase = createADMINClient();
  // const { data: articles, error } = await supabase.from("articles").select("*");
  // console.log(articles, error);

  const articlesDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      filename: filename.replace(/\.mdx$/, ""), // Remove .mdx extension
      data: data,
    };
  });
  return (
    <section className="border border-t-0" data-fade-2>
      {articles.map((post) => (
        <Card
          key={post.filename}
          title={post.filename}
          content="content"
          date={post.data.createdAt}
          href={post.filename}
        />
      ))}
    </section>
  );
}
