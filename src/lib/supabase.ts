import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export interface Post {
  id: string;
  slug: string;
  title_vi: string;
  title_en: string;
  excerpt_vi: string | null;
  excerpt_en: string | null;
  content_vi: string;
  content_en: string;
  cover_image_url: string | null;
  tags: string[] | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

let browserClient: SupabaseClient | null = null;

/**
 * Public, read-only client for use in Server Components / the browser.
 * Uses the publishable (anon) key — safe to expose, RLS restricts it to
 * published posts only. Never put the service-role key behind NEXT_PUBLIC_*.
 */
export function getSupabaseClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  browserClient = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
  return browserClient;
}

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[supabase] getPublishedPosts error:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("[supabase] getPostBySlug error:", error.message);
    return null;
  }
  return data;
}
