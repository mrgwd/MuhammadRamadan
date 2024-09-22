import { getAllMdxFiles } from "@/lib/mdx";
import Card from "../common/card";

export default async function RecentPosts() {
  const posts = await getAllMdxFiles();
  const recentPosts = posts.slice(0, 3);
  return (
    <section data-fade-3>
      <h2 className="font-medium text-dark-primary dark:text-light-primary">
        Recent posts
      </h2>
      <div className="">
        {recentPosts.map((post, index) => (
          <Card
            key={post.slug}
            href={post.slug}
            title={post.data.title}
            date={post.data.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
