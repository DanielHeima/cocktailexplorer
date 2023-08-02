import { Drink } from "@/types/drink";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const url = process.env.FIRSTROUTE;
  const url = new URL('/mock/data.json')
  console.log(request);

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
