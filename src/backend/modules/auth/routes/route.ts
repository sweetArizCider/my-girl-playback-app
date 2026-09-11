import { NextResponse } from "next/server";

import { createAuthPlaceholderResponse } from "../functions";

export async function GET() {
  return NextResponse.json(createAuthPlaceholderResponse(), { status: 501 });
}
