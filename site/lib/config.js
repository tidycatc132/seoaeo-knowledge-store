export const DOMAIN = "wisedigitalpartners.com";
export const isWiseEmail = (email) => typeof email === "string" && email.toLowerCase().endsWith("@" + DOMAIN);
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
