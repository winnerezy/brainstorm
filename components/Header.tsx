import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "@/components/Search";
import { MenuIcon, Plus } from "lucide-react";
import Link from "next/link";
import { createServerClient } from "@/utils/supabase/server";

export const Header = async () => {
  const supabase = createServerClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <header className="w-full h-14 flex gap-4 border border-[--accent-border] items-center justify-between sticky top-0 z-50 bg-inherit opacity-80 backdrop-blur--2xl p-4">
      <h5 className="text-xl font-extrabold tracking-wider hidden md:block">BrainStorm</h5>
      {data.user ? (
        <>
          <Search />
          <div className="flex items-center gap-4">
            {/* <Button className="flex items-center gap-2 p-2 w-fit rounded-md sm:w-36">
            <Plus />
            <p className="hidden sm:block">New Topic</p>
          </Button> */}
            <Avatar>
              <AvatarImage src="" alt={data.user.id} />
              <AvatarFallback>{data.user.email}</AvatarFallback>
            </Avatar>
          </div>
        </>
      ) : (
        <>
          <nav className="max-w-[400px] w-full hidden sm:flex items-center">
            <ul className="flex justify-between w-full">
              <Link href="">Join the community</Link>
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
