import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = process.env.FIRSTROUTE;
  if (!url) {
    return NextResponse.json(
      { error: "[1] Internal Server Error" },
      { status: 500 }
    );
  }
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json(
      { error: "[2] Internal Server Error" },
      { status: 500 }
    );
  }
}