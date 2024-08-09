"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "./prisma";
import { PostValidator } from "./validators/post";
import { Post } from "@prisma/client";

export const handleSignIn = async (provider: string) => {
  await signIn("github");
};

export const handleSignOut = async () => {
    await signOut();
};

export const getPosts = async () => {
  try {

    const session = await auth()

    if(!session?.user){
        return []
    }
    const posts = await prisma.post.findMany({
        where: {
            authorId: session.user.id
        }
    })

    return posts
} catch (error: any) {
    console.log(error.message)
    return []
}
}

export const savePost = async (body: {title: string, content: string}) => {
    try {
        

    const session = await auth()

    if(!session?.user){
        return
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email!
        }
    })

    if(!user){
        return 
    }

    const { title, content, authorId, topic } = PostValidator.parse({ ...body, authorId: user.id, topic: 'Movies' })

    const post: Post = await prisma.post.create({
        data: {
            title,
            content,
            authorId

        }
    })
    return post
    } catch (error: any) {
        console.log('Error saving post', error.message)
        return null
    }

}