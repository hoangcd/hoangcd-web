-- hoangcd.com — Supabase schema
-- Run this once in the Supabase SQL editor (or via `supabase db push`)
-- for project ref iptncwfrruwezjpdwqtl.

-- ============================================================
-- posts: bilingual blog / news entries
-- ============================================================
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_vi text not null,
  title_en text not null,
  excerpt_vi text,
  excerpt_en text,
  content_vi text not null,
  content_en text not null,
  cover_image_url text,
  tags text[] default '{}',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_published_at_idx
  on public.posts (published_at desc)
  where published = true;

create index if not exists posts_slug_idx on public.posts (slug);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

alter table public.posts enable row level security;

-- Anyone (anon or authenticated) may read PUBLISHED posts only.
drop policy if exists "public read published posts" on public.posts;
create policy "public read published posts"
  on public.posts for select
  to anon, authenticated
  using (published = true);

-- Writes are NOT allowed via the anon/publishable key. Manage content
-- either from the Supabase dashboard table editor, or server-side using
-- the service-role key (SUPABASE_SERVICE_ROLE_KEY, never exposed to the
-- browser), which bypasses RLS entirely.

-- ============================================================
-- contact_messages: submissions from the public contact form
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- No public select/insert policies are created: this table is written
-- exclusively by the /api/contact Route Handler using the service-role
-- key (server-side only), which bypasses RLS. The public site never
-- reads or writes this table directly with the anon key.
