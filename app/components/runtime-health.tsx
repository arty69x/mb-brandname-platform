"use client";

import { useEffect, useState } from "react";

type Health = {
  ok: true;
  service: string;
  ts: string;
  env: string;
  commit: string | null;
};

function isHealthShape(input: unknown): input is Health {
  if (!input || typeof input !== "object") {
    return false;
  }

  const candidate = input as Partial<Health>;
  return (
    candidate.ok === true &&
    typeof candidate.service === "string" &&
    typeof candidate.ts === "string" &&
    typeof candidate.env === "string" &&
    (typeof candidate.commit === "string" || candidate.commit === null)
  );
}

async function fetchHealth(): Promise<Health | null> {
  try {
    const res = await fetch("/api/health", { cache: "no-store" });
    if (!res.ok) return null;
    const json: unknown = await res.json();
    if (!json || typeof json !== "object") return null;
    if (!isHealthShape(json)) return null;
    return json;
  } catch {
    return null;
  }
}

export function RuntimeHealthPanel() {
  const [health, setHealth] = useState<Health | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadHealth = async () => {
      try {
        const value = await fetchHealth();
        if (isMounted) {
          setHealth(value);
        }
      } catch {
        if (isMounted) {
          setHealth(null);
        }
      }
    };

    void loadHealth();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <article className="panel card" style={{ padding: "1rem" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>Runtime Health</h3>
      {!health ? (
        <p>Health signal unavailable. Verify /api/health route in this environment.</p>
      ) : (
        <div className="grid" style={{ gap: "0.4rem" }}>
          <p>Service: {health.service}</p>
          <p>Environment: {health.env}</p>
          <p>Timestamp: {new Date(health.ts).toLocaleString()}</p>
          <p>Commit: {health.commit ?? "not exposed"}</p>
        </div>
      )}
    </article>
  );
}
