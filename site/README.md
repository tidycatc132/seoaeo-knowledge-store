# WISE Academy site

The hub and all courses as one private website for WISE staff, hosted on Vercel, with sign-in and
per-person progress in Supabase (project `wise-academy`). The repo stays the master copy of the content.

## How it fits together

- `npm run build` first runs `scripts/build-content.mjs`, which uses the course kit in `../courses`
  (`build.py` for every lesson layer, `build_hub.py --links relative`) to write the pages into `content/`
  (not committed), plus `content/courses.json` for the admin page. Then `next build`.
- `middleware.js` sends anyone who isn't signed in with a `@wisedigitalpartners.com` account to `/login/`.
- `/` serves the hub and `/T48/` (etc.) serve courses. Before serving, `lib/content.js` adds the person's
  saved progress and `public/academy-sync.js` to the page.
- `academy-sync.js` merges the saved progress into the browser's copy, then sends every change the page
  saves to `/api/progress`, plus one row per quiz submission. The course and hub code is unchanged.
- `/admin/` shows team progress to people with `profiles.is_admin = true`, with a CSV export.
- Database schema and security rules: `../supabase/migrations/`. Writes go only through
  `save_progress` and `record_quiz_attempt`, which act on the caller's own rows.

## Setup

1. **Vercel project:** import the repo, set the root directory to `site`, framework Next.js.
2. **Env vars** (both safe to expose): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
   Values are in `.env.example`.
3. **Supabase Auth > URL configuration:** set the site URL to the production URL and add
   `https://<your-domain>/auth/callback/**` and `https://*-wise-digital-partners.vercel.app/auth/callback/**`
   to the redirect URLs.
4. **Google sign-in:** in Google Cloud (WISE Workspace), create an OAuth client of type Web application with
   the redirect URI `https://figevlldlakwhjuibahs.supabase.co/auth/v1/callback`, then paste its client ID and
   secret into Supabase Auth > Sign In / Providers > Google.
5. **Email links** need custom SMTP in Supabase Auth (the built-in sender only reaches project members).
6. **Optional, recommended:** Supabase Auth > Hooks > Before User Created → `public.hook_restrict_domain`,
   so accounts from other domains are never created.
7. **Admins:** after a person signs in once, run
   `update public.profiles set is_admin = true where email = '<their email>';` in the SQL editor.

## Local development

`cp .env.example .env.local && npm install && npm run dev`, then add `http://localhost:3000/auth/callback/**`
to the Supabase redirect URLs.
