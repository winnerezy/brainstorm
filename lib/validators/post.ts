import { z } from "zod"

export const PostValidator = z.object({
    title: z.string().min(3, {
        message: 'Title must be at least 3 characters'
    }).max(150, {
        message: 'Title long'
    }),
    content: z.any(),
    authorId: z.string(),
    topic: z.string()
})

export type PostValidator = z.infer<typeof PostValidator>