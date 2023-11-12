import { Drink } from "@/types/drink";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';



export async function GET(request: NextRequest) {
    const id: string  = request.nextUrl.pathname;
    console.log(id);
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001';
    
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
  