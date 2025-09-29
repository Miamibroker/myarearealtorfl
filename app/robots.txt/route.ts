// app/robots.txt/route.ts
import type { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  const body = `User-agent: *
Allow: /

Sitemap: https://myarearealtorfl.vercel.app/sitemap.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
