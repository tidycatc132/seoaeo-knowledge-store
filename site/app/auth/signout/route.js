import { supabaseServer } from "../../../lib/supabase-server";

// Signs out, then clears this browser's copy of course progress so the next person starts clean.
export async function GET() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  const page = `<!doctype html><meta charset="utf-8"><title>Signing out</title><script>
try { Object.keys(localStorage).filter(k => /^t\\d+-course-v1$|^wise-academy-hub-v1$/.test(k)).forEach(k => localStorage.removeItem(k)); } catch (e) {}
location.replace("/login/?signedout=1");
</script>`;
  return new Response(page, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
}
