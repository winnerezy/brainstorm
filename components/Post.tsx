"use client";

import { FaRegCommentDots } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bookmark, HeartIcon } from "lucide-react";

export const Post = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full lg:max-w-[400px] h-full min-h-[400px] rounded-lg border border-border shadow-md bg-[--card]">
      <div className="flex flex-col gap-4 w-full py-4 px-6">
        <p className="text-xs">Posted 3 minutes ago</p>
        <h4>
         { title }
        </h4>
        <section className="w-full flex items-center gap-2">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <p
                className="w-24 h-6 rounded-full border border-border text-sm grid place-content-center"
                key={index}
              >
                #anime
              </p>
            ))}
        </section>
      </div>
      <section className="w-full p-2 flex flex-col gap-2">
        <div className="w-full min-h-[100px] h-full border border-border rounded-md"></div>
      </section>
      <section className="flex w-full gap-4 items-center absolute bottom-8 justify-between">
        <div className="absolute left-4 flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>Winner</AvatarFallback>
          </Avatar>
          <p className="text-md sm:text-xs">Created by Winner</p>
        </div>
        <div className="absolute right-4 flex items-center gap-2">
          <HeartIcon />
          <FaRegCommentDots size={25} />
          <Bookmark />
        </div>
      </section>
    </div>
  );
};
