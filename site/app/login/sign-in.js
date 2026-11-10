"use client";
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const DOMAIN = "wisedigitalpartners.com";

export default function SignIn({ next }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ busy: false, sent: false, error: "" });
  const client = () => createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const redirectTo = () => `${window.location.origin}/auth/callback/?next=${encodeURIComponent(next)}`;

  async function google() {
    setState({ busy: true, sent: false, error: "" });
    const { error } = await client().auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: redirectTo(), queryParams: { hd: DOMAIN, prompt: "select_account" } },
    });
    if (error) setState({ busy: false, sent: false, error: error.message });
  }

  async function emailLink(e) {
    e.preventDefault();
    const addr = email.trim().toLowerCase();
    if (!addr.endsWith("@" + DOMAIN)) { setState({ busy: false, sent: false, error: `Use your @${DOMAIN} email.` }); return; }
    setState({ busy: true, sent: false, error: "" });
    const { error } = await client().auth.signInWithOtp({ email: addr, options: { emailRedirectTo: redirectTo() } });
    setState({ busy: false, sent: !error, error: error ? error.message : "" });
  }

  return (
    <>
      {state.error && <div className="note bad" role="alert">{state.error}</div>}
      {state.sent && <div className="note ok" role="status">Check your inbox for a sign-in link.</div>}
      <button className="btn primary" type="button" onClick={google} disabled={state.busy}>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#fff" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" opacity=".85"/><path fill="#fff" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14z" opacity=".7"/><path fill="#fff" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6z" opacity=".55"/></svg>
        Sign in with Google
      </button>
      <div className="or">or get an email link</div>
      <form onSubmit={emailLink}>
        <label htmlFor="email">WISE email</label>
        <input id="email" type="email" autoComplete="email" placeholder={`you@${DOMAIN}`} value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="btn" type="submit" disabled={state.busy}>Email me a sign-in link</button>
      </form>
    </>
  );
}
