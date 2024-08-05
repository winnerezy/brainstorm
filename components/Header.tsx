import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full h-14 flex gap-4 items-center justify-between">
      <h5 className="text-2xl font-extrabold tracking-wider">BrainStorm</h5>
    <div className="flex items-center gap-4">
        <Button className="flex items-center gap-2 p-2 w-36"><Plus/><p>New Topic</p></Button>
    <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    </header>
  );
};
