import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

export default async function sitemap() {
  await connectDB();

  const blogs = await Blog.find().select("slug updatedAt createdAt");

  const baseUrl = "https://www.tooliofinance.com";

  // ✅ STATIC PAGES
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
  ];

  // ✅ TOOLS (MONEY PAGES 💰)
  const tools = [
    "/tools/salary-calculator",
    "/tools/investment-calculator",
    "/tools/retirement-calculator",
    "/tools/loan-calculator",
    "/tools/mortgage-calculator",
    "/tools/credit-card",
  ].map((tool) => ({
    url: `${baseUrl}${tool}`,
    lastModified: new Date(),
    priority: 0.95, // 🔥 HIGH PRIORITY
    changeFrequency: "weekly",
  }));

  // ✅ BLOG POSTS
  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...tools, ...blogUrls];
}
