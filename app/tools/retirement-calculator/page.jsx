import RetirementCalculator from "./RetirementCalculator";
import RetirementSeo from "./RetirementSEO";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "Retirement Calculator USA (2026) – Plan Your Future Wealth",
  description:
    "Estimate your retirement savings, monthly investments, and future wealth growth using this free retirement calculator USA.",
  keywords: [
    "retirement calculator USA",
    "retirement savings calculator",
    "future wealth calculator",
    "investment retirement planner",
  ],
};

export default async function Page() {
  const blogs = await getRelatedBlogs("retirement");

  return (
    <>
      <RetirementCalculator />
      <RetirementSeo />

      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            📚 retirement Guides & Tips
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
