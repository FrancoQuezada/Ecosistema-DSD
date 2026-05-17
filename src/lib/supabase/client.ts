import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;
let hasLoggedDevEnvStatus = false;

export type SupabaseEnvDiagnostics = {
  hasSupabaseUrl: boolean;
  hasSupabaseAnonKey: boolean;
  isSupabaseConfigured: boolean;
};

export function getSupabaseEnvDiagnostics(): SupabaseEnvDiagnostics {
  const hasSupabaseUrl = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),
  );
  const hasSupabaseAnonKey = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  );

  return {
    hasSupabaseUrl,
    hasSupabaseAnonKey,
    isSupabaseConfigured: hasSupabaseUrl && hasSupabaseAnonKey,
  };
}

function logDevEnvStatus(diagnostics: SupabaseEnvDiagnostics) {
  if (process.env.NODE_ENV !== "development" || hasLoggedDevEnvStatus) {
    return;
  }

  hasLoggedDevEnvStatus = true;
  console.info("[Supabase] Diagnostico de variables publicas", diagnostics);
}

export function getSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const diagnostics = getSupabaseEnvDiagnostics();

  logDevEnvStatus(diagnostics);

  if (!diagnostics.isSupabaseConfigured || !supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return browserClient;
}
