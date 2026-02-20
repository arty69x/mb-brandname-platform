import { LuxuryCard } from '@forluxury/ui/LuxuryCard';

type Product = {
  id: string;
  name: string;
  category: string;
  priceTHB: number;
  tone: 'gold' | 'silver' | 'charcoal';
};

const highlights = [
  'Next.js App Router + TypeScript baseline',
  'Tailwind CSS luxury-ready design tokens',
  'API service in the same monorepo',
  'GitHub Actions CI + Vercel preview deploy workflow'
];

const formatTHB = (value: number) =>
  new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(value);

const toneStyles: Record<Product['tone'], string> = {
  gold: 'from-amber-300/40 to-yellow-700/30',
  silver: 'from-slate-100/40 to-slate-600/30',
  charcoal: 'from-neutral-500/40 to-neutral-900/50'
};

export default async function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
  let health = 'API unavailable';
  let featuredProducts: Product[] = [];

  try {
    const [healthResponse, productResponse] = await Promise.all([
      fetch(`${apiUrl}/health`, { cache: 'no-store' }),
      fetch(`${apiUrl}/products/featured`, { cache: 'no-store' })
    ]);

    if (healthResponse.ok) {
      const payload = (await healthResponse.json()) as { status: string };
      health = payload.status;
    }

    if (productResponse.ok) {
      const payload = (await productResponse.json()) as { items: Product[] };
      featuredProducts = payload.items;
    }
  } catch {
    health = 'API unavailable';
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <section className="flex flex-col items-center gap-6 text-center">
        <p className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs tracking-[0.2em] text-gold">
          FORLUXURY ECOMMERCE STARTER
        </p>
        <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
          Ship a luxury commerce platform with confidence.
        </h1>
        <p className="max-w-3xl text-white/70">
          Monorepo baseline for a fullstack setup with Next.js, TypeScript, Tailwind CSS, GitHub CI,
          and Vercel preview deployments.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <LuxuryCard key={item}>{item}</LuxuryCard>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <p className="text-sm text-white/50">Backend health check: {health}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <LuxuryCard key={product.id} title={product.name} subtitle={product.category}>
              <div className="space-y-4">
                <div className={`h-44 w-full rounded-xl bg-gradient-to-br ${toneStyles[product.tone]}`} />
                <p className="text-gold">{formatTHB(product.priceTHB)}</p>
              </div>
            </LuxuryCard>
          ))}
        </div>
      </section>
    </main>
  );
}
