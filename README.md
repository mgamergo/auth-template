# Auth Template — Next.js + Convex + Clerk

Reusable auth starter. Clone → fill envs → build.

## First-time setup (per new project)

1. Click **"Use this template"** on GitHub → create new repo
2. Clone locally → `bun install`
3. **Clerk:** Create new app at clerk.com → copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
4. **Convex:** Run `bunx convex dev` → new project auto-created → `NEXT_PUBLIC_CONVEX_URL` auto-added to `.env.local`
5. **Link Clerk ↔ Convex:**
   - In Convex dashboard → Settings → Authentication → Add Clerk as JWT provider
   - In Clerk dashboard → JWT Templates → Create "Convex" template → copy Issuer URL
   - Add `CLERK_JWT_ISSUER_DOMAIN=<issuer_url>` to `.env.local`
6. Copy `.env.local.example` → `.env.local` and fill in values
7. `bun dev` → auth is live ✅

## What's included

- Clerk sign-in / sign-up pages (catch-all routes)
- Convex user sync on first login (`users` table with Clerk ID index)
- Protected routes via middleware (everything except `/`, `/sign-in`, `/sign-up`)
- `useCurrentUser()` hook — returns `{ user, isLoading, isSignedIn }`
- `UserButton` on dashboard for sign-out

## Using `useCurrentUser` in any component

```tsx
"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function MyComponent() {
  const { user, isLoading } = useCurrentUser();
  if (isLoading) return <p>Loading...</p>;
  return <p>Hello, {user?.name}</p>;
}
```

## Adding new protected pages

Just create the page under `src/app/`. Middleware auto-protects all non-public routes.
To add more public routes, edit the `isPublicRoute` matcher in `src/middleware.ts`.
