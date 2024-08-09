import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'avatar'>
}

export const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={user.avatar!} width={30} height={30} />
      <AvatarFallback>{user.name}</AvatarFallback>
    </Avatar>
  );
};
