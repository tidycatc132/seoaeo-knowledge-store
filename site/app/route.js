import { readPage, sitePage, htmlResponse } from "../lib/content";
import { supabaseServer, currentUser } from "../lib/supabase-server";

export const dynamic = "force-dynamic";

// The hub, with the signed-in person's progress on every course and their hub ticks.
export async function GET() {
  const html = await readPage(null);
  if (!html) return htmlResponse("<!doctype html><p>The site content was not built.</p>", 500);
  const supabase = await supabaseServer();
  const user = await currentUser(supabase);
  const [{ data: rows }, { data: profile }] = await Promise.all([
    supabase.from("course_progress").select("course_id, state").eq("user_id", user.id),
    supabase.from("profiles").select("hub_state, is_admin").eq("id", user.id).maybeSingle(),
  ]);
  const progress = Object.fromEntries((rows || []).map((r) => [r.course_id, r.state]));
  progress.HUB = profile?.hub_state && Object.keys(profile.hub_state).length ? profile.hub_state : null;
  const boot = { email: user.email, page: "HUB", progress };
  return htmlResponse(sitePage(html, { boot, nav: { admin: !!profile?.is_admin, email: user.email } }));
}
