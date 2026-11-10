import { readPage, sitePage, htmlResponse } from "../../lib/content";
import { supabaseServer, currentUser } from "../../lib/supabase-server";

export const dynamic = "force-dynamic";

// One course page, e.g. /T48/, with the signed-in person's saved progress for it.
export async function GET(_req, { params }) {
  const { topic } = await params;
  const id = String(topic).toUpperCase();
  const html = /^T\d+$/.test(id) ? await readPage(id) : null;
  if (!html) return htmlResponse("<!doctype html><title>Not found</title><p>No such course. <a href='/'>All courses</a></p>", 404);
  const supabase = await supabaseServer();
  const user = await currentUser(supabase);
  const { data } = await supabase.from("course_progress").select("state").eq("user_id", user.id).eq("course_id", id).maybeSingle();
  const boot = { email: user.email, page: id, progress: { [id]: data?.state || null } };
  return htmlResponse(sitePage(html, { boot, nav: { course: true } }));
}
