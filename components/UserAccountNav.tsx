'use client'

import { User } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserAvatar } from "./UserAvatar";
import Link from "next/link";
import { handleSignOut } from "@/lib/actions";

export const UserAccountNav = ({ user }: { user: User }) => {
  
    return (
    <DropdownMenu>
        <DropdownMenuTrigger className="border-none">
          <UserAvatar 
          className="h-8 w-8"
          user={user}   />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <div className="flex items-center justify-center gap-2 p-2">
               <section className="flex gap-2 items-center">
                <UserAvatar className="size-16" user={user}/>
                <div className="flex flex-col space-y-1 leading-none">
                    {
                        user.name && <p>{user.name}</p>
                    }
                    {
                        user.email && <p className="w-[200px] truncate text-sm">{user.email}</p>
                    }

                </div>
               </section>
            </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={async () => await handleSignOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
