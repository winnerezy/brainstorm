'use server'

import { createClient } from "@/utils/supabase/client";
// import { createServerClient } from "@/utils/supabase/server";

// export const supbaseServerClient = async () => {
//     return await createServerClient()
// }

export const supabaseClient = createClient()