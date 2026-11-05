import type { MetadataRoute } from "next";

const pages = [
  { path: "", priority: 1 },
  { path: "/donate", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/apply", priority: 0.8 },
  { path: "/founder", priority: 0.7 },
  { path: "/trustees", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `https://sadique.org${p.path}`,
    lastModified: new Date(),
    priority: p.priority,
  }));
}
