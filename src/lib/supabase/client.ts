import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;
let hasLoggedDevEnvStatus = false;

function logDevEnvStatus(hasUrl: boolean, hasAnonKey: boolean) {
  if (process.env.NODE_ENV !== "development" || hasLoggedDevEnvStatus) {
    return;
  }

  hasLoggedDevEnvStatus = true;
  console.info(
    `[Supabase] Variables publicas: NEXT_PUBLIC_SUPABASE_URL ${
      hasUrl ? "presente" : "ausente"
    }, NEXT_PUBLIC_SUPABASE_ANON_KEY ${hasAnonKey ? "presente" : "ausente"}.`,
  );
}

export function getSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const hasUrl = Boolean(supabaseUrl);
  const hasAnonKey = Boolean(supabaseAnonKey);

  logDevEnvStatus(hasUrl, hasAnonKey);

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!browserClient) {
    try {
      browserClient = createClient(supabaseUrl, supabaseAnonKey);
    } catch {
      return null;
    }
  }

  return browserClient;
}
