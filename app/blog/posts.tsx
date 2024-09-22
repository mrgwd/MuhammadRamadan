import Card from "@/components/common/card";
import { getAllMdxFiles } from "@/lib/mdx";

export default async function Posts() {
  const posts = await getAllMdxFiles();
  return (
    <section data-fade-2>
      {posts.map((post) => (
        <Card
          key={post.slug}
          title={post.data.title}
          date={post.data.createdAt}
          href={post.slug}
        />
      ))}
    </section>
  );
}
