import { NextResponse } from "next/server";
import { supabaseServer } from "../../../lib/supabase-server";
import { isWiseEmail } from "../../../lib/config";

const safeNext = (n) => (n && n.startsWith("/") && !n.startsWith("//") ? n : "/");

// Google sign-in and email links land here with a one-time code.
export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = safeNext(url.searchParams.get("next"));
  const supabase = await supabaseServer();
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && isWiseEmail(data.user?.email)) return NextResponse.redirect(new URL(next, url.origin));
    if (!error) {
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL("/login/?error=domain", url.origin));
    }
  }
  return NextResponse.redirect(new URL("/login/?error=link", url.origin));
}
