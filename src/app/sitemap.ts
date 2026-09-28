import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { FORCES } from "@/lib/content/forces";

export default function sitemap(): MetadataRoute.Sitemap {
  /* Category pages are generated from FORCES, so /colleges is not listed
     separately here. */
  const staticRoutes = ["", "/about", "/courses", "/gallery", "/contact"].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })
  );

  const forceRoutes = FORCES.flatMap((force) => [
    { url: `${SITE.url}/${force.slug}`, lastModified: new Date() },
    ...force.courses.map((course) => ({
      url: `${SITE.url}/${force.slug}/${course.slug}`,
      lastModified: new Date(),
    })),
  ]);

  return [...staticRoutes, ...forceRoutes];
}
