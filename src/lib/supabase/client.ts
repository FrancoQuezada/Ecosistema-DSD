import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnvDiagnostics } from "@/lib/supabase/env";

export { getSupabaseEnvDiagnostics } from "@/lib/supabase/env";
export type { SupabaseEnvDiagnostics } from "@/lib/supabase/env";

let browserClient: SupabaseClient | null = null;
let hasLoggedDevEnvStatus = false;

function logDevEnvStatus() {
  if (process.env.NODE_ENV !== "development" || hasLoggedDevEnvStatus) {
    return;
  }

  hasLoggedDevEnvStatus = true;
  console.info(
    "[Supabase] Diagnostico de variables publicas",
    getSupabaseEnvDiagnostics(),
  );
}

export function getSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const diagnostics = getSupabaseEnvDiagnostics();

  logDevEnvStatus();

  if (!diagnostics.isSupabaseConfigured || !supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return browserClient;
}
