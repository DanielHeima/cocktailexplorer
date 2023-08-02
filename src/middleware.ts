import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // const url = "./mock/data.json"f
  if (!request.url.startsWith('api')) {
    return NextResponse.next();
  }
  if (request.nextUrl.searchParams.get("secret") !== process.env.API_SECRET) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
  }

  return NextResponse.next();
}
