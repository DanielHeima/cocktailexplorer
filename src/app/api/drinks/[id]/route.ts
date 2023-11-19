import { Drink } from "@/types/drink";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

export async function GET(req: NextApiRequest, { params }: { params: {id: string}}) {
    const id: string = params.id;
    if (!id) {
      NextResponse.json({
        status: 400
      })
      return;
    }

    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    
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
        error: `[2] Internal Server Error: ${err}`,
        status: 500
      })
      //res.status(500).json({ error: `[2] Internal Server Error: ${err}`});
    }
  }
  