import { catalog } from "./content";

// Everyone's progress, for admins. Returns null when the caller isn't an admin.
export async function teamProgress(supabase, user) {
  const { data: me } = await supabase.from("profiles").select("is_admin").eq("id", user.id).maybeSingle();
  if (!me?.is_admin) return null;
  const [courses, { data: people }, { data: rows }, { data: attempts }] = await Promise.all([
    catalog(),
    supabase.from("profiles").select("id, email, full_name, last_seen_at").order("email"),
    supabase.from("course_progress").select("user_id, course_id, steps_done, quiz_best_pct, quiz_passed, badge_at, updated_at"),
    supabase.from("quiz_attempts").select("user_id, course_id"),
  ]);
  const byId = Object.fromEntries(courses.map((c) => [c.id, c]));
  const team = (people || []).map((p) => {
    const mine = (rows || []).filter((r) => r.user_id === p.id && byId[r.course_id]);
    const scores = mine.map((r) => r.quiz_best_pct).filter((n) => n != null);
    return {
      ...p,
      started: mine.filter((r) => r.steps_done > 0).length,
      passed: mine.filter((r) => r.quiz_passed),
      badges: mine.filter((r) => r.badge_at).length,
      attempts: (attempts || []).filter((a) => a.user_id === p.id).length,
      avg: scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null,
      courses: mine.map((r) => ({ ...r, title: byId[r.course_id].title, steps: byId[r.course_id].steps }))
        .sort((a, b) => a.course_id.localeCompare(b.course_id, "en", { numeric: true })),
    };
  });
  return { courses, team };
}
