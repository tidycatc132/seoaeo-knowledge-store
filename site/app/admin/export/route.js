import { supabaseServer, currentUser } from "../../../lib/supabase-server";
import { teamProgress } from "../../../lib/team";

export const dynamic = "force-dynamic";

const cell = (v) => {
  const s = v == null ? "" : String(v);
  return /[",\n]/.test(s) || /^[=+\-@]/.test(s) ? `"${s.replace(/^([=+\-@])/, "'$1").replace(/"/g, '""')}"` : s;
};

// One row per person per course they have opened.
export async function GET() {
  const supabase = await supabaseServer();
  const user = await currentUser(supabase);
  const data = await teamProgress(supabase, user);
  if (!data) return new Response("Admins only", { status: 403 });
  const lines = [["email", "name", "course_id", "course_title", "steps_done", "steps_total", "quiz_best_pct", "quiz_passed", "badge_at", "updated_at"]];
  for (const p of data.team) for (const c of p.courses) {
    lines.push([p.email, p.full_name, c.course_id, c.title, c.steps_done, c.steps, c.quiz_best_pct, c.quiz_passed, c.badge_at, c.updated_at]);
  }
  return new Response(lines.map((l) => l.map(cell).join(",")).join("\n") + "\n", {
    headers: { "content-type": "text/csv; charset=utf-8", "content-disposition": 'attachment; filename="wise-academy-progress.csv"', "cache-control": "no-store" },
  });
}
