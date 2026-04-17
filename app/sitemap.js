import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

export default async function sitemap() {
  await connectDB();

  const blogs = await Blog.find();

  const baseUrl = "https://www.tooliofinance.com";

  // Static Pages
  const staticPages = [
    { path: "", priority: 1.0, changefreq: "daily" },
    { path: "/about", priority: 0.5, changefreq: "monthly" },
    { path: "/contact", priority: 0.5, changefreq: "monthly" },
  ];

  // Tools (HIGH SEO PAGES)
  const tools = [
    "/tools/salary-calculator",
    "/tools/investment-calculator",
    "/tools/retirement-calculator", // fixed typo
    "/tools/loan-calculator",
    "/tools/mortgage-calculator",
    "/tools/credit-card",
  ];

  return [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      priority: page.priority,
      changeFrequency: page.changefreq,
    })),

    // Tools (very important pages)
    ...tools.map((tool) => ({
      url: `${baseUrl}${tool}`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    })),

    // Blog posts
    ...blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || Date.now()),
      priority: 0.7,
      changeFrequency: "monthly",
    })),
  ];
}
