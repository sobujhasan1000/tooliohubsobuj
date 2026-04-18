export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // 🚫 block API routes
          "/admin/", // 🚫 block admin panel (if exists)
        ],
      },
    ],
    sitemap: "https://www.tooliofinance.com/sitemap.xml",
    host: "https://www.tooliofinance.com", // ✅ helps some crawlers
  };
}
