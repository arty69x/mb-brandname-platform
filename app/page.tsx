import Link from "next/link";
import { RuntimeHealthPanel } from "./components/runtime-health";

const capabilitySignals = [
  "Commerce Engine Ready",
  "Monorepo Architecture",
  "Type-safe Contracts"
];

const quickLinks = [
  { href: "/docs/architecture", label: "Architecture" },
  { href: "/docs/roadmap", label: "Roadmap" },
  { href: "/docs/contributing", label: "Contributing" },
  { href: "/docs/contracts", label: "Contracts" },
  { href: "/api/health", label: "API Health" }
];

const nextActions = [
  "Validate preview deployment from this branch.",
  "Review contracts in packages/types before feature work.",
  "Wire service-level alerts to /api/health status checks.",
  "Track migration state and webhook idempotency before release."
];

export default function HomePage() {
  const safeCapabilities = Array.isArray(capabilitySignals) ? capabilitySignals : [];
  const safeLinks = Array.isArray(quickLinks) ? quickLinks : [];
  const safeActions = Array.isArray(nextActions) ? nextActions : [];

  return (
    <main>
      <section style={{ padding: "2.5rem 0 1.5rem" }}>
        <div className="container mx-auto px-4">
          <div className="panel" style={{ padding: "1.25rem" }}>
            <p style={{ marginBottom: "0.8rem" }}>MB Brandname Platform / Operational Hub</p>
            <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: "0.75rem" }}>
              Deployable foundation for commerce runtime confidence
            </h1>
            <p>
              This surface is the platform intelligence layer for engineers and operators: runtime
              visibility, delivery health, and readiness signals in one place.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 1rem" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-2">
            <RuntimeHealthPanel />
            <article className="panel card" style={{ padding: "1rem" }}>
              <h3 style={{ marginBottom: "0.7rem" }}>Capability Signaling</h3>
              <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                {safeCapabilities.map((item) => (
                  <li key={item} style={{ marginBottom: "0.4rem", color: "#dce5ff" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 1rem" }}>
        <div className="container mx-auto px-4">
          <article className="panel" style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.75rem", fontSize: "1.2rem" }}>Navigation Intelligence</h2>
            <div className="grid grid-3">
              {safeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="panel card"
                  style={{ padding: "0.85rem", display: "block" }}
                >
                  <strong>{link.label}</strong>
                  <p style={{ marginTop: "0.25rem" }}>Open {link.href}</p>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section style={{ padding: "0 0 2.5rem" }}>
        <div className="container mx-auto px-4">
          <article className="panel" style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.75rem", fontSize: "1.2rem" }}>Action Guidance</h2>
            <ol style={{ margin: 0, paddingLeft: "1.2rem" }}>
              {safeActions.map((step) => (
                <li key={step} style={{ marginBottom: "0.5rem", color: "#dce5ff" }}>
                  {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
