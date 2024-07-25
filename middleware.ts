// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = req.headers.get('x-vercel-ip-country') || 'USA'; 
  res.cookies.set('country', '', { maxAge: -1, path: '/' });
  console.log(req.headers.get('x-vercel-ip-country'));
  console.log('Pays détecté :', country);  
  res.cookies.set('country', country);
  return res;
}

export const config = {
  matcher: ['/page', '/dashboard/:path*'],
};

