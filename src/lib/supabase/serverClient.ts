import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnvDiagnostics } from "@/lib/supabase/env";

let serverClient: SupabaseClient | null = null;

// Uses only the anon key (never the service role key), so reads stay subject to RLS.
export function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const diagnostics = getSupabaseEnvDiagnostics();

  if (!diagnostics.isSupabaseConfigured || !supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!serverClient) {
    serverClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }

  return serverClient;
}
