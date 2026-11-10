-- WISE Academy: people, per-course progress and quiz attempts.
-- Only signed-in users with a @wisedigitalpartners.com email can read or write anything.

create or replace function public.is_wise()
returns boolean language sql stable set search_path = '' as $$
  select coalesce(lower(auth.jwt() ->> 'email') like '%@wisedigitalpartners.com', false)
$$;

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  is_admin boolean not null default false,
  hub_state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table public.course_progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id text not null check (course_id ~ '^T[0-9]+$'),
  state jsonb not null default '{}'::jsonb,
  steps_done integer not null default 0,
  quiz_best_pct integer,
  quiz_passed boolean not null default false,
  badge_at timestamptz,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

create table public.quiz_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id text not null check (course_id ~ '^T[0-9]+$'),
  picks jsonb not null,
  score_pct integer not null check (score_pct between 0 and 100),
  passed boolean not null,
  created_at timestamptz not null default now()
);
create index quiz_attempts_user_course on public.quiz_attempts (user_id, course_id, created_at desc);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = '' as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = auth.uid()), false)
$$;

-- New sign-ups get a profile row.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'))
  on conflict (id) do nothing;
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Optional "Before User Created" auth hook: rejects sign-ups from other domains.
-- Enable it in Supabase dashboard > Authentication > Hooks.
create or replace function public.hook_restrict_domain(event jsonb)
returns jsonb language plpgsql set search_path = '' as $$
begin
  if lower(event -> 'user' ->> 'email') like '%@wisedigitalpartners.com' then
    return '{}'::jsonb;
  end if;
  return jsonb_build_object('error', jsonb_build_object(
    'http_code', 403, 'message', 'WISE Academy is only open to @wisedigitalpartners.com accounts.'));
end $$;
grant execute on function public.hook_restrict_domain(jsonb) to supabase_auth_admin;
revoke execute on function public.hook_restrict_domain(jsonb) from authenticated, anon, public;

alter table public.profiles enable row level security;
alter table public.course_progress enable row level security;
alter table public.quiz_attempts enable row level security;

create policy "own profile or admin" on public.profiles for select to authenticated
  using (public.is_wise() and (id = (select auth.uid()) or public.is_admin()));
create policy "own progress or admin" on public.course_progress for select to authenticated
  using (public.is_wise() and (user_id = (select auth.uid()) or public.is_admin()));
create policy "own attempts or admin" on public.quiz_attempts for select to authenticated
  using (public.is_wise() and (user_id = (select auth.uid()) or public.is_admin()));

-- Writes go only through the two functions below, which act on the caller's own rows.
revoke insert, update, delete on public.profiles, public.course_progress, public.quiz_attempts from anon, authenticated;

-- Saves one course's progress (the course page's own saved state) or the hub's ticks (course 'HUB').
create or replace function public.save_progress(p_course text, p_state jsonb)
returns void language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid();
begin
  if uid is null or not public.is_wise() then raise exception 'not allowed' using errcode = '42501'; end if;
  insert into public.profiles (id, email) values (uid, auth.jwt() ->> 'email') on conflict (id) do nothing;
  if p_course = 'HUB' then
    update public.profiles set hub_state = p_state, last_seen_at = now() where id = uid;
    return;
  end if;
  if p_course !~ '^T[0-9]+$' then raise exception 'bad course id'; end if;
  insert into public.course_progress as cp (user_id, course_id, state, steps_done, quiz_best_pct, quiz_passed, badge_at)
  values (
    uid, p_course, p_state,
    (select count(*) from jsonb_each(coalesce(p_state -> 'done', '{}'::jsonb)) d where d.value = 'true'::jsonb),
    (p_state -> 'quiz' ->> 'pct')::int,
    coalesce((p_state -> 'quiz' ->> 'pass')::boolean, false),
    case when jsonb_typeof(p_state -> 'badge') = 'object' then now() end)
  on conflict (user_id, course_id) do update set
    state = excluded.state,
    steps_done = excluded.steps_done,
    quiz_best_pct = greatest(cp.quiz_best_pct, excluded.quiz_best_pct),
    quiz_passed = cp.quiz_passed or excluded.quiz_passed,
    badge_at = coalesce(cp.badge_at, excluded.badge_at),
    updated_at = now();
  update public.profiles set last_seen_at = now() where id = uid;
end $$;

create or replace function public.record_quiz_attempt(p_course text, p_picks jsonb, p_score integer, p_passed boolean)
returns void language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid();
begin
  if uid is null or not public.is_wise() then raise exception 'not allowed' using errcode = '42501'; end if;
  if p_course !~ '^T[0-9]+$' then raise exception 'bad course id'; end if;
  insert into public.profiles (id, email) values (uid, auth.jwt() ->> 'email') on conflict (id) do nothing;
  insert into public.quiz_attempts (user_id, course_id, picks, score_pct, passed)
  values (uid, p_course, p_picks, p_score, p_passed);
end $$;

revoke execute on function public.save_progress(text, jsonb), public.record_quiz_attempt(text, jsonb, integer, boolean) from public, anon;
grant execute on function public.save_progress(text, jsonb), public.record_quiz_attempt(text, jsonb, integer, boolean) to authenticated;
