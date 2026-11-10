-- The sign-up trigger is never called directly; is_admin() is only needed by signed-in users' RLS checks.
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
