'use server'

import { redirect } from "next/navigation"
import { Provider } from "@supabase/supabase-js"
import { createServerClient } from "@/utils/supabase/server"

export const handleSignIn =  async (provider: Provider) => {
 
    const supabase = createServerClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: 'http://localhost:3000/auth/callback',
        }
    })
    if(error){
        console.log(error.message)
        return
    }
    console.log(data.url)
    if(data.url){
        redirect(data.url)
    }
}