# MB Brandname Platform Architecture

## Monorepo structure

- `app/` hosts the deployable Next.js App Router operational surface.
- `packages/types` contains shared commerce contracts used across apps and services.
- `packages/lib` contains infra helpers such as inventory and rate-limit primitives.
- `packages/config` carries strict TypeScript defaults for every workspace.
- `apps/*` is reserved for future domain apps (`api`, `admin`, `web`) without coupling to root runtime.

## Shared contracts and boundaries

Contract-driven development starts in `packages/types/src/commerce.ts`. The `Money`, `Product`, `Cart`, and `Order` contracts are intended to be imported by API handlers, worker jobs, and frontend surfaces to keep payload shape consistent.

## Migrations and database strategy

`prisma/schema.prisma` is the canonical data model source. Migration flow should be:

1. update Prisma schema,
2. generate migration,
3. run against preview/staging,
4. validate read/write compatibility before production rollout.

All schema changes should be additive-first to avoid runtime breakage in preview deployments.

## Payments and webhook reliability

Payments should be processed with idempotency keys and webhook signature validation at ingress. Webhook handlers must persist event delivery state and safely reprocess retries without duplicate order mutations.

## CI/CD and deployment split

- Root Next.js app deploys to Vercel for preview and production web surfaces.
- Service workloads under `apps/*` can deploy independently (container or serverless) while reusing contracts.
- CI must enforce `npm run typecheck` and `npm run build` before merge.
- Preview health checks target `/api/health` to verify commit-level runtime transparency.
