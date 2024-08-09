import NextAuth from "next-auth"
import github from "next-auth/providers/github";
import { prisma } from "./lib/prisma";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
   redirect({ url, baseUrl }) {
      return `/home`;
    },
    async signIn({ user }) {
      try {
        const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email!,
            },
          });
        if (!existingUser) {
          await prisma.user.create({
            data: {
              id: user.id,
              name: user.name!,
              email: user.email!,
              avatar: user.image
            },
          });
        }
        return true;
      } catch (error: any) {
        console.log("Error signing in", error.message);
        return false;
      }
    },
  },

  pages: {
    signOut: "/sign-in",
  },
});

