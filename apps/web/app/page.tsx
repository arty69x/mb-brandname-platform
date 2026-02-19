import { LuxuryCard } from '@forluxury/ui/LuxuryCard';

const highlights = [
  'Next.js App Router + TypeScript baseline',
  'Tailwind CSS luxury-ready design tokens',
  'API service in the same monorepo',
  'GitHub Actions CI + Vercel preview deploy workflow'
];

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
  let health = 'API unavailable';

  try {
    const response = await fetch(`${apiUrl}/health`, { cache: 'no-store' });
    if (response.ok) {
      const payload = (await response.json()) as { status: string };
      health = payload.status;
    }
  } catch {
    health = 'API unavailable';
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-6 py-16">
      <p className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs tracking-[0.2em] text-gold">
        FORLUXURY ECOMMERCE STARTER
      </p>
      <h1 className="text-center text-5xl font-semibold leading-tight md:text-6xl">
        Ship a luxury commerce platform with confidence.
      </h1>
      <p className="max-w-3xl text-center text-white/70">
        This monorepo is preconfigured for a fullstack setup with Next.js, TypeScript, Tailwind CSS,
        GitHub CI, and Vercel preview deployments.
      </p>
      <div className="grid w-full gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <LuxuryCard key={item}>{item}</LuxuryCard>
        ))}
      </div>
      <p className="text-sm text-white/50">Backend health check: {health}</p>
    </main>
  );
}
