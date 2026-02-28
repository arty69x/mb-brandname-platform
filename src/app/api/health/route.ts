import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "OK", version: "1.0.0-STRICT" });
}
