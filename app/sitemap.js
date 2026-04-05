// export default function sitemap() {
//   const baseUrl = "https://tooliohub.vercel.app";

//   const tools = [
//     "/tools/salary-calculator",
//     "/tools/investment-calculator",
//     "/tools/retirement-calculator",
//     "/tools/loan-calculator",
//     "/tools/mortgage-calculator",
//     "/tools/credit-card",
//   ];

//   const blogPosts = [
//     "/blog/how-to-save-money-usa",
//     "/blog/best-investment-tips-2026",
//     "/blog/retirement-plan-guide",
//   ];

//   return [
//     { url: baseUrl, lastModified: new Date() },
//     ...tools.map((t) => ({ url: baseUrl + t, lastModified: new Date() })),
//     ...blogPosts.map((b) => ({ url: baseUrl + b, lastModified: new Date() })),
//   ];
// }

import Blog from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";

export default async function sitemap() {
  await connectDB();

  const blogs = await Blog.find();

  const blogUrls = blogs.map((post) => ({
    url: `https://tooliohub.vercel.app/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://tooliohub.vercel.app",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
