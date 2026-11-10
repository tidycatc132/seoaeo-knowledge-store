import SignIn from "./sign-in";

export const metadata = { title: "Sign in · WISE Academy" };

const MESSAGES = {
  domain: ["bad", "WISE Academy is only open to @wisedigitalpartners.com accounts. Sign in with your WISE email."],
  link: ["bad", "That sign-in link didn't work or has expired. Try again."],
  signedout: ["ok", "You're signed out."],
};

export default async function LoginPage({ searchParams }) {
  const q = await searchParams;
  const msg = q.error ? MESSAGES[q.error] || MESSAGES.link : q.signedout ? MESSAGES.signedout : null;
  const next = typeof q.next === "string" && q.next.startsWith("/") && !q.next.startsWith("//") ? q.next : "/";
  return (
    <main className="signin">
      <div className="signin-card">
        <img src="/wise-logo.png" alt="WISE Digital Partners" width="116" height="48" />
        <h1>Sign in to WISE Academy</h1>
        <p>Courses on how search engines and AI answer engines find, understand and rank content.</p>
        {msg && <div className={`note ${msg[0]}`} role="status">{msg[1]}</div>}
        <SignIn next={next} />
        <p className="fine">For WISE Digital Partners staff. Your course progress is saved to your account.</p>
      </div>
    </main>
  );
}
