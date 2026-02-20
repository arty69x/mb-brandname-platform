# MB Brandname Platform

Deployable Next.js App Router operational surface for platform trust, runtime transparency, and monorepo scalability.

## Commands

- `npm run dev` — local platform hub
- `npm run build` — production build validation
- `npm run typecheck` — strict TypeScript checks

## Monorepo layout

```txt
app/
apps/
packages/
  config/
  lib/
  types/
docs/
prisma/
```

## Operational primitives

- `/api/health` runtime visibility endpoint.
- `packages/types/src/commerce.ts` contract baseline.
- `packages/lib/src/inventory.ts` and `rate-limit.ts` infra helpers.
- `app/docs/[slug]` docs routing for architecture, roadmap, contributing, and contracts.
