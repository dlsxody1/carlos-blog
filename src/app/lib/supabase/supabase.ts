import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseServerKey: string = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseServerKey, {
  auth: {
    persistSession: false,
  },
});

// Export for usage by the rest of the app
export { supabase };
