import { Post } from "@/components/Post";
import { Topics } from "@/components/Topics";
import { getPosts } from "@/lib/actions";
import { Post as PostType } from "@prisma/client";

export default async function Home() {
  
  const posts: PostType[] = await getPosts();

  return (
    <section className="w-full max-w-screen-2xl min-h-screen flex flex-col gap-4 items-center self-center p-4">
      <Topics />
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center lg:px-16 py-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} title={post.title} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </section>
    </section>
  );
}
