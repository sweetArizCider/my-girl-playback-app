import { NextResponse } from "next/server";

import { createPlaybackPlaceholderResponse } from "../functions";

export async function GET() {
  return NextResponse.json(createPlaybackPlaceholderResponse(), { status: 501 });
}
