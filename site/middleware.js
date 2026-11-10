import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { SUPABASE_URL, SUPABASE_KEY, isWiseEmail } from "./lib/config";

const OPEN = ["/login", "/auth/"];

// Every page except sign-in needs a signed-in @wisedigitalpartners.com user.
export async function middleware(request) {
  let response = NextResponse.next({ request });
  const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  const { data } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  if (OPEN.some((p) => path.startsWith(p))) return response;
  if (data.user && isWiseEmail(data.user.email)) return response;
  if (path.startsWith("/api/")) return NextResponse.json({ error: "sign in required" }, { status: 401 });
  const url = request.nextUrl.clone();
  url.pathname = "/login/";
  url.search = "";
  if (data.user) url.searchParams.set("error", "domain");
  else if (path !== "/") url.searchParams.set("next", path);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|wise-logo.png|owl.png|favicon.ico).*)"],
};
