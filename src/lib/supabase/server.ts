import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnvDiagnostics } from "@/lib/supabase/client";

/**
 * Creates a request-safe Supabase client with the public anonymous key.
 * This client deliberately has no elevated privileges and is subject to RLS.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const diagnostics = getSupabaseEnvDiagnostics();

  if (!diagnostics.isSupabaseConfigured || !supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}
