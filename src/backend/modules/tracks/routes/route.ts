import { NextResponse } from "next/server";

import { createTracksPlaceholderResponse } from "../functions";

export async function GET() {
  return NextResponse.json(createTracksPlaceholderResponse(), { status: 501 });
}
