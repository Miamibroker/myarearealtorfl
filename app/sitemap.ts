// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://myarearealtorfl.vercel.app";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
  ];
}
