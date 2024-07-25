import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = req.headers.get('x-vercel-ip-country') || 'US'; 
  // const country =  req.headers.set('x-vercel-ip-country') ||;
  res.cookies.set('country', '', { maxAge: -1, path: '/' });
  console.log(req.headers.get('x-vercel-ip-country'));
  console.log('Pays détecté :', country);  
  res.cookies.set('country', country);
}