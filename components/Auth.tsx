"use client";

import { FcGoogle } from "react-icons/fc";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { handleSignIn } from "@/app/actions/actions";

export const Auth = ({ name }: { name: string }) => {

  return (
   <div className="w-full min-h-screen flex items-center justify-center">
     <section className="flex w-full items-center justify-center h-full">
      <section className="relative w-[450px] h-[600px] rounded-md justify-center flex flex-col gap-8 p-4">
        <h3 className="text-3xl font-semibold absolute top-4">{name === 'register' ? 'Welcome' : 'Welcome Back'}</h3>
       <section className="flex flex-col gap-4">
       <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="Enter valid email address" />
        </div>
       <div className="space-y-2">
          <Label>Password</Label>
          <Input placeholder="Enter a secure password" />
        </div>
        <Button className="flex items-center w-full self-center text-white">
      {
        name === 'register' ? 'Register' : 'Sign In'
      }
        </Button>
       </section>
        <div className="flex w-full gap-2 items-center">
          <hr className="h-2 w-full" />
          <p> or</p>
          <hr className="h-2 w-full" />
        </div>
        <section className="flex flex-col gap-4 w-full  self-center">
          <Button className="flex items-center gap-3 bg-white "  onClick={async () => await handleSignIn("google")}>
            <FcGoogle size={25} />
            <p>Sign In With Google</p>
          </Button>
          <Button className="flex items-center gap-3 bg-white" onClick={async () => await handleSignIn("github")}>
            <FaGithub size={25} />
            <p>Sign In With Github</p>
          </Button>
        </section>
        <p className="text-sm self-center">Don&apos;t have an account ? <Link href={"/sign-up"} className="text-[--primary]">Click here</Link></p>
      </section>
     
    </section>
     <section className="w-full min-h-screen border-4 sticky hidden xl:flex items-center justify-center">
    <h2 className="text-4xl">  Brainstorm</h2>
     </section>
   </div>
  );
};
