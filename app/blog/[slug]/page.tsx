import { getMDXComponent } from "mdx-bundler/client";
import { getMdxSource } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Header from "@/components/blog/header";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getMdxSource(slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The article you are looking for does not exist.",
    };
  }

  const { frontMatter } = post;

  return {
    title: `${frontMatter.title}`,
    description: frontMatter.description.slice(0, 160),
    keywords: frontMatter.tags,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getMdxSource(slug);

  if (!post) {
    notFound();
  }

  const { code, frontMatter } = post;
  const Component = getMDXComponent(code);

  return (
    <main className="article">
      <Header title={frontMatter.title} createdAt={frontMatter.createdAt} />
      <article data-fade-2>
        <Component />
      </article>
    </main>
  );
}
