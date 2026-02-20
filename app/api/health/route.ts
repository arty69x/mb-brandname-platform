import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = {
      ok: true as const,
      service: "mb-brandname-platform",
      ts: new Date().toISOString(),
      env: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown",
      commit: process.env.VERCEL_GIT_COMMIT_SHA ?? null
    };

    return NextResponse.json(payload, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        service: "mb-brandname-platform",
        ts: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
