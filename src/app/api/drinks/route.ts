import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest) {
    // const url = process.env.FIRSTROUTE;
    // const url = new URL('mock/data.json');
    const file = await fs.readFile(process.cwd() + '/public/mock/drinks.json', 'utf8');
    // const data = JSON.parse(file);
    // console.log(url);
  
    // if (!url) {
    //   return NextResponse.json(
    //     { error: "[3] Internal Server Error" },
    //     { status: 500 }
    //   );
    // }
    try {
      // const res = await fetch('/mock/data.json', { 
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await res.json();
      const data = JSON.parse(file);
  
      return NextResponse.json({ data });
    } catch (err) {
      return NextResponse.json(
        { error: "[4] Internal Server Error" },
        { status: 500 }
      );
    }
  }