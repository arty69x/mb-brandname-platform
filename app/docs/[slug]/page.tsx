import Link from "next/link";
import { notFound } from "next/navigation";

type DocsPageData = {
  title: string;
  summary: string;
  bullets: string[];
};

const docsContent: Record<string, DocsPageData> = {
  architecture: {
    title: "Platform Architecture",
    summary: "Reference topology for scalable delivery and runtime reliability.",
    bullets: [
      "App Router surface at root with operational routing.",
      "Shared contracts in packages/types and infra utilities in packages/lib.",
      "Deployment split supports Vercel previews and service tier evolution."
    ]
  },
  roadmap: {
    title: "Execution Roadmap",
    summary: "Milestones that sequence migration, scale, and operational maturity.",
    bullets: [
      "Stabilize data migrations and webhook idempotency.",
      "Scale observability and SLO alerting by service domain.",
      "Automate CI gates for contracts, build, and deployment checks."
    ]
  },
  contributing: {
    title: "Contributing",
    summary: "Developer workflow for adding features safely in a strict monorepo.",
    bullets: [
      "Model contracts first in packages/types.",
      "Add defensive runtime checks in all async integrations.",
      "Keep docs, architecture notes, and roadmap aligned with changes."
    ]
  },
  contracts: {
    title: "Contracts",
    summary: "Type-safe commerce entities that anchor cross-service compatibility.",
    bullets: [
      "Money, Product, Cart, and Order types are reusable primitives.",
      "Infra helpers consume these contracts to reduce integration risk.",
      "Schema-first changes should propagate through API and apps together."
    ]
  }
};

export default async function DocsPage({ params }: { params: Promise<{ slug?: string }> }) {
  let slug = "";

  try {
    const resolved = await params;
    slug = typeof resolved?.slug === "string" ? resolved.slug : "";
  } catch {
    slug = "";
  }

  if (!slug || !Object.prototype.hasOwnProperty.call(docsContent, slug)) {
    notFound();
  }

  const page = docsContent[slug];
  if (!page || !Array.isArray(page.bullets)) {
    notFound();
  }

  return (
    <main>
      <section style={{ padding: "2rem 0" }}>
        <div className="container mx-auto px-4">
          <article className="panel" style={{ padding: "1rem" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{page.title}</h1>
            <p style={{ marginBottom: "1rem" }}>{page.summary}</p>
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              {page.bullets.map((bullet) => (
                <li key={bullet} style={{ marginBottom: "0.55rem", color: "#dce5ff" }}>
                  {bullet}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <Link href="/">Back to operational hub</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
