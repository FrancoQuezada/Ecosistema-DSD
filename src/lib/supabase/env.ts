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
