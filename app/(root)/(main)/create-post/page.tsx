import { PostForm } from "@/components/PostForm";


export default function CreatePost() {
  return (
    <section className='w-full max-w-screen-lg h-full flex flex-col mx-auto p-4 justify-center gap-8'>
        <h3 className='text-3xl font-semibold '>Create Post</h3>
      <PostForm/>
    </section>
  )
}
