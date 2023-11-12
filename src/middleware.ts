import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (!request.url.startsWith('api')) {
    return NextResponse.next();
  }
  
  console.log(request.nextUrl.searchParams.get("secret"));
  if (request.nextUrl.searchParams.get("secret") !== process.env.API_SECRET) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
  }

  return NextResponse.next();
}
