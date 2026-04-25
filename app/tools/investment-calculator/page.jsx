import InvestmentDashboard from "./InvestmentClient";
import InvestmentSeo from "./InvestmentSeo";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import Link from "next/link";

export const metadata = {
  title: "Investment Calculator USA (2026) – ROI, Profit & Growth Tool",
  description:
    "Use this free investment calculator USA to estimate ROI, compound growth, inflation-adjusted returns, and long-term wealth projections.",
  keywords: [
    "investment calculator USA",
    "ROI calculator",
    "compound interest calculator",
    "wealth growth calculator",
  ],
};

export default async function Page() {
  const blogs = await getRelatedBlogs("investmen");

  return (
    <>
      <InvestmentDashboard />
      <InvestmentSeo />

      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4 ">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            📚 investmen Guides & Tips
          </h2>

          {blogs.length === 0 ? (
            <p className="text-gray-500">No related blogs yet</p>
          ) : (
            <div className="space-y-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="block text-blue-600 hover:underline"
                >
                  → {blog.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
