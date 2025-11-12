import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clouds-above-earth.vercel.app";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/playlists`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/gallery`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
