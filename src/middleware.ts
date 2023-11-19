import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (request.nextUrl.searchParams.get("token") !== process.env.API_SECRET) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
  }

  return NextResponse.next();
}
