# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- `artifacts/api-server` — Express 5 API. Mounts auth routes (Replit Auth / OIDC) and questions routes (CRUD + seed) under `/api`. Uses cookie sessions (`sid`) backed by Drizzle's `sessions` table, with admin gating in `src/lib/admin.ts` (env var `ADMIN_EMAILS` — comma-separated allowlist; empty = every signed-in user is treated as admin, with a startup warning).
- `artifacts/quiz` — **O Level Quiz** (React + Vite, served at `/`). Bilingual (EN/HI) NIELIT O Level practice quizzes. 4 subject quizzes (M1 IT Tools, M2 Web Designing, M3 Python, M4 IoT) with 20 questions / 20 minutes each, plus a mixed Mock Test (50 questions / 60 minutes). Neo-brutalist design, dark mode, attempt history persisted in `localStorage`. Question bank loads from `/api/questions` and falls back to the bundled static bank in `src/data/questions.ts` (~405 Qs) when the API is empty/unavailable. Routing uses `wouter`. Result hand-off between Quiz and Results pages goes through `sessionStorage` via `src/lib/resultStore.ts`. Admin console at `/admin` (gated by Replit Auth) lets approved users CRUD questions and bulk-seed the static bank into the DB.

## Auth

- **Replit Auth (OIDC + PKCE)**, opaque `sid` cookies stored in PostgreSQL via `lib/db/src/schema/auth.ts`. Implementation lives in `artifacts/api-server/src/lib/auth.ts`, `middlewares/authMiddleware.ts`, `routes/auth.ts`. Browser hook `useAuth()` from `@workspace/replit-auth-web` returns `{ user, isAdmin, isAuthenticated, login, logout, refresh }` and is consumed by `artifacts/quiz/src/pages/AdminLogin.tsx` and `AdminQuestions.tsx`.
- Admin allowlist: set the `ADMIN_EMAILS` secret to a comma-separated list of admin emails (e.g. `admin@example.com,owner@example.com`). If unset, every signed-in user is treated as admin (logged once at startup).
