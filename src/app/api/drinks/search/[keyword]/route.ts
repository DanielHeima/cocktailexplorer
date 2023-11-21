import { Drink } from "@/types/drink";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

export async function GET(req: NextRequest, { params }: { params: {keyword: string}}) {
    const keyword: string = params.keyword;
    if (!keyword) {
      NextResponse.json({
        status: 400
      })
      return;
    }

    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/search.php?s=${keyword}`;
    
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
  