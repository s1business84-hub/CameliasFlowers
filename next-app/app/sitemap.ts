import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cameliasflowers.example";
  const routes = ["", "/about", "/services", "/shop", "/hampers", "/gallery", "/testimonials", "/faq", "/contact"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
