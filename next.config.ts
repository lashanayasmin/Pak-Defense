import type { NextConfig } from "next";

/* The previous hand-written listings used coarser slugs. Keep those URLs
   working so old bookmarks and search results do not 404.

   `/airforce/paf-specialist` was one combined course that is now split into
   branch-specific entries, so it falls back to the category page. */
const redirects = [
  {
    source: "/army/short-service-commission",
    destination: "/army/direct-short-service-commission",
    permanent: true,
  },
  { source: "/airforce/paf-specialist", destination: "/airforce", permanent: true },
];

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
