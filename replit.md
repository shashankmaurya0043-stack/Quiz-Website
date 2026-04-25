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

- `artifacts/quiz` — **O Level Quiz** (React + Vite, frontend-only). Bilingual (EN/HI) NIELIT O Level practice quizzes. 4 subject quizzes (M1 IT Tools, M2 Web Designing, M3 Python, M4 IoT) with 20 questions / 20 minutes each, plus a mixed Mock Test (50 questions / 60 minutes). Neo-brutalist design, dark mode, attempt history persisted in `localStorage`. Question bank (~405 questions) is static in `src/data/questions.ts`. Routing uses `wouter`. Result hand-off between Quiz and Results pages goes through `sessionStorage` via `src/lib/resultStore.ts`.
