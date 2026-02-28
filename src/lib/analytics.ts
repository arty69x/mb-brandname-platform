export const trackEvent = async (event: string, payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, payload, timestamp: new Date().toISOString() }),
    });
  } catch {
    // noop
  }
};
