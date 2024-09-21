import { getMDXComponent } from "mdx-bundler/client";
import { getMdxSource } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Header from "@/components/blog/header";
// import HeadingWithAnchor from "@/components/mdx/headingWithAnchor";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getMdxSource(slug);

  if (!post) {
    notFound();
  }

  const { code, frontMatter } = post;
  const Component = getMDXComponent(code);

  // const components = {
  //   h2: (props: any) => <HeadingWithAnchor id={props.children} {...props} />,
  // };

  return (
    <main className="article">
      <Header title={frontMatter.title} createdAt={frontMatter.createdAt} />
      <article data-fade-2>
        <Component /*components={{ components }}*/ />{" "}
      </article>
      {/* Render MDX */}
    </main>
  );
}
