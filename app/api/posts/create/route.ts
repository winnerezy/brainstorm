import { prisma } from "@/lib/prisma";
import { PostValidator } from "@/lib/validators/post";
import { Post } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        
    const body = await req.json()

    console.log(body)

    const { title, content, authorId } = PostValidator.parse(body)
    const user = await prisma.user.findUnique({
        where: {
            id: authorId
        }
    })

    if(!user){
        return new NextResponse(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }

    const post: Post = await prisma.post.create({
        data: {
            title,
            content,
            authorId

        }
    })
    return new NextResponse(JSON.stringify(post), { status: 201 })
    } catch (error: any) {
        console.log('Error saving post', error.message)
        return new NextResponse(JSON.stringify({message: error.message}), {
            status: 500
        })
    }

}