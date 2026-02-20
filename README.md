# ForLuxury Ecommerce Monorepo

Production-ready monorepo baseline for a **fullstack luxury ecommerce platform** with:

- **Next.js + TypeScript** frontend (`apps/web`)
- **Tailwind CSS** design foundation
- **Express API** service (`apps/api`)
- **Shared UI package** (`packages/ui`)
- **GitHub Actions CI** and **Vercel preview deployment workflow**

## Project Structure

```txt
apps/
  web/        # Next.js storefront (App Router)
  api/        # Node/Express backend
packages/
  ui/         # Shared UI components
```

## Prerequisites

- Node.js 22+
- pnpm 9+

## Setup

```bash
pnpm install
```

## Run in Development

```bash
pnpm dev
```

Services:
- Web: http://localhost:3000
- API: http://localhost:4000/health

By default, the web app calls `NEXT_PUBLIC_API_URL` (fallbacks to `http://localhost:4000`).

## Quality Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## GitHub + Vercel Preview Setup

Create the following repository secrets for `.github/workflows/vercel-preview.yml`:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Then link your Vercel project from repo root once:

```bash
pnpm dlx vercel link
```

Each PR to `main` will run CI and attempt a preview deployment.

## Demo Endpoints

- `GET /health` → API health status
- `GET /products/featured` → sample featured product catalog for demo pages

## Showroom Readiness Checklist

- Add repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- Ensure `NEXT_PUBLIC_API_URL` points to your API preview URL in Vercel project settings
- Run `pnpm build` locally before client demo to verify all packages
