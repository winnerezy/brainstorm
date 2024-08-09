
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="flex flex-col items-center gap-16">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16 mx-auto">
        <div className="flex flex-col w-full  gap-6 items-center justify-center mt-36 px-8">
          <h3 className="font-[800] text-4xl md:text-5xl lg:text-6xl tracking-wide w-full max-w-[800px] text-center leading-[40px] ">
            Find A Topic And Talk About It!
          </h3>
          <p className="max-w-[400px] lg:max-w-[600px] w-full text-center text-md md:text-xl">
            Create a topic and comment on existing topic threads. Find new
            trends on shows, books, news and more.
          </p>
        </div>
        <Link
          href={"/sign-in"}
          className={buttonVariants({ className: "w-36 h-12 space-x-2 text-white" })}
        >
          <p>Join Us</p>
          <ArrowRightIcon />
        </Link>
      <div className="w-full flex flex-col gap-6 h-[600px] px-8">
        <h4 className="text-3xl font-[400] text-center underline">Make your own stories</h4>
        <div className="w-full h-full max-h-[60vh] border border-border">

        </div>
      </div>
      <div className="w-full flex flex-col gap-6 h-[600px] px-8">
        <h4 className="text-3xl font-[400] text-center underline">Find Latest Trends</h4>
        <div className="w-full h-full max-h-[60vh] border border-border">

        </div>
      </div>
      </div>
    </section>
  );
}
