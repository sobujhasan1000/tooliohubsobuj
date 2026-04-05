export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tooliohub.vercel.app/sitemap.xml",
  };
}
