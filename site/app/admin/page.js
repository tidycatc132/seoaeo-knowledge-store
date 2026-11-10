import { supabaseServer, currentUser } from "../../lib/supabase-server";
import { teamProgress } from "../../lib/team";

export const dynamic = "force-dynamic";
export const metadata = { title: "Team progress · WISE Academy" };

const when = (t) => (t ? new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "");

export default async function AdminPage() {
  const supabase = await supabaseServer();
  const user = await currentUser(supabase);
  const data = await teamProgress(supabase, user);
  if (!data) {
    return (
      <main className="admin"><h1>Team progress</h1><p>Only Academy admins can see this page. <a href="/">Back to courses</a></p></main>
    );
  }
  const { courses, team } = data;
  const passes = team.reduce((n, p) => n + p.passed.length, 0);
  return (
    <>
      <header className="topbar"><div className="topbar-in gutter">
        <a className="brand" href="/" aria-label="WISE Academy home"><img src="/wise-logo.png" alt="WISE Digital Partners" width="116" height="48" /><span className="brand-sub">Academy</span></a>
        <nav className="topnav" aria-label="Site"><a href="/">All courses</a><a href="/auth/signout/">Sign out</a></nav>
      </div></header>
      <main className="admin">
        <div className="row-head">
          <div><h1>Team progress</h1><p>Who has started and passed each of the {courses.length} courses.</p></div>
          <a className="btn" href="/admin/export/" download>Download CSV</a>
        </div>
        <div className="stats">
          <div className="stat"><b>{team.length}</b><span>people signed in</span></div>
          <div className="stat"><b>{team.filter((p) => p.started).length}</b><span>have started a course</span></div>
          <div className="stat"><b>{passes}</b><span>course quizzes passed</span></div>
          <div className="stat"><b>{team.reduce((n, p) => n + p.attempts, 0)}</b><span>quiz attempts</span></div>
        </div>
        <div className="tablewrap">
          <table>
            <thead><tr><th>Person</th><th>Started</th><th>Passed</th><th>Badges</th><th>Avg best score</th><th>Last seen</th><th>Courses</th></tr></thead>
            <tbody>
              {team.map((p) => (
                <tr key={p.id}>
                  <td><b>{p.full_name || p.email}</b>{p.full_name && <><br /><span>{p.email}</span></>}</td>
                  <td className="num">{p.started}</td>
                  <td className="num">{p.passed.length} of {courses.length}</td>
                  <td className="num">{p.badges}</td>
                  <td className="num">{p.avg == null ? "" : `${p.avg}%`}</td>
                  <td className="num">{when(p.last_seen_at)}</td>
                  <td>{p.courses.length ? (
                    <details><summary>{p.courses.length} course{p.courses.length === 1 ? "" : "s"}</summary>
                      <ul>{p.courses.map((c) => (
                        <li key={c.course_id}>{c.course_id} {c.title}: {c.steps_done} of {c.steps} steps
                          {c.quiz_best_pct != null && `, best quiz ${c.quiz_best_pct}%`} {c.quiz_passed && <span className="pill">Passed</span>}</li>
                      ))}</ul>
                    </details>
                  ) : "None yet"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
