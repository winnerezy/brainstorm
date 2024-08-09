import { Search } from "@/components/Search";
import { Bell, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { UserAccountNav } from "./UserAccountNav";
import { UserAvatar } from "./UserAvatar";

export const Navbar = async () => {

  const session = await auth();
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id!
    }
  })

  return (
    <header className="w-full h-16 flex gap-4 border border-[--accent-border] items-center justify-between sticky top-0 z-50 bg-background p-4">
      <h5 className="text-xl font-extrabold tracking-wider hidden md:block">
        BrainStorm
      </h5>
      {session && user ? (
        <>
          <Search />
          <div className="flex items-center gap-4">
            <Link
              href={"/create-post"}
              className={buttonVariants({ className: "rounded-full lg:rounded-md size-6 lg:w-[120px] lg:h-10 text-white px-2" })}
            >
              <PlusIcon className="block lg:hidden bg-white size-8"/>
            <p className="hidden lg:block">  Create Topic</p>
            </Link>
            <Bell/>
            {/* <UserAvatar user={user}/> */}
            <UserAccountNav user={user}/>
          </div>
        </>
      ) : (
        <>
          <nav className="max-w-[400px] w-full hidden sm:flex items-center">
            <ul className="flex justify-between w-full">
              <Link href="/sign-in">Join the community</Link>
              <Link href="">Pricing</Link>
              <Link href="">Support Us</Link>
            </ul>
          </nav>
          <MenuIcon className="block sm:hidden cursor-pointer" />
        </>
      )}
    </header>
  );
};
