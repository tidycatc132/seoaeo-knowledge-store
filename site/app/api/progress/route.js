import { NextResponse } from "next/server";
import { supabaseServer, currentUser } from "../../../lib/supabase-server";

const COURSE = /^(T\d+|HUB)$/;

// Body: {course, state} to save a course's (or the hub's) progress,
// or {attempt: {course, picks, score, passed}} to log a quiz submission.
export async function POST(request) {
  const text = await request.text();
  if (text.length > 65536) return NextResponse.json({ error: "too large" }, { status: 413 });
  let body;
  try { body = JSON.parse(text); } catch { return NextResponse.json({ error: "bad json" }, { status: 400 }); }
  const supabase = await supabaseServer();
  if (!(await currentUser(supabase))) return NextResponse.json({ error: "sign in required" }, { status: 401 });
  let error;
  if (body.attempt) {
    const a = body.attempt;
    if (!/^T\d+$/.test(a.course) || typeof a.picks !== "object" || !Number.isInteger(a.score)) {
      return NextResponse.json({ error: "bad attempt" }, { status: 400 });
    }
    ({ error } = await supabase.rpc("record_quiz_attempt", { p_course: a.course, p_picks: a.picks, p_score: a.score, p_passed: !!a.passed }));
  } else {
    if (!COURSE.test(body.course) || typeof body.state !== "object" || !body.state) {
      return NextResponse.json({ error: "bad progress" }, { status: 400 });
    }
    ({ error } = await supabase.rpc("save_progress", { p_course: body.course, p_state: body.state }));
  }
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
