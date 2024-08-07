import { Post } from "@/components/Post";
import { Topics } from "@/components/Topics";

export default function Home() {
  return (
    <section className="w-full  max-w-screen-xl min-h-screen flex flex-col gap-4 items-center self-center">
      <Topics />
      <section className="w-full px-2 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </section>
  );
}
