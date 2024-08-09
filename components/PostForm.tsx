"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useActionState, useState } from "react";
import { useSession } from "next-auth/react";
import { savePost } from "@/lib/actions";

export const PostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // const handlePost = async function (title: string, content: string) {
  //   try {
  //     const res = await fetch("/api/posts/create", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: title,
  //         content: content,
  //         authorId: data?.user?.id!,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const ans = await res.json();
  //     return ans;
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  // const [error, action, isPending] = useActionState(() =>handlePost(title, content),
  //   null
  // );
  // console.log(isPending)

  return (
    <div className="w-full p-2 flex flex-col gap-6 self-center">
      <Input
        placeholder="Enter title"
        spellCheck
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Write out your thoughts h-60"
        spellCheck
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        className="self-end p-2 text-white w-36"
        onClick={async () => await savePost({ title, content })}
      >
        Post
      </Button>
    </div>
  );
};
