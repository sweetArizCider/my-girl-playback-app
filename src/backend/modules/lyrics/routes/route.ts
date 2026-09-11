import { NextResponse } from "next/server";

import { createLyricsPlaceholderResponse } from "../functions";

export async function GET() {
  return NextResponse.json(createLyricsPlaceholderResponse(), { status: 501 });
}
