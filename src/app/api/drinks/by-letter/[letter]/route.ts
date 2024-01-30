import { Drink } from "@/types/drink";
import { NextRequest, NextResponse } from "next/server";
import { alphabet } from "@/components/letters/Letters";

export async function GET(req: NextRequest, { params }: { params: { letter: string } }) {
  console.log('LEEEETTER');
  const letter: string = params.letter;
  if (!letter) {
    NextResponse.json({
      status: 400
    })
    return;
  }

  if (!alphabet.includes(letter)) {
    NextResponse.json({
      status: 400
    })
    return;
  }

  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/search.php?f=${letter}`;

  try {
    const fetchRes = await fetch(cocktailUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await fetchRes.json();
    return NextResponse.json({ data });
  } catch (err) {
    console.error(err);
    NextResponse.json({
      error: `[6] Internal Server Error: ${err}`,
      status: 500
    })
  }
}
