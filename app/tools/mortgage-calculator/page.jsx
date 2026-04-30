import MortgageCalculatorPage from "./MortgageClient";
import MortgageSeo from "./MortgageSEO";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "Mortgage Calculator USA (2026) – Home Loan & Monthly Payment Tool",
  description:
    "Calculate your monthly mortgage payments, interest, and total home loan cost in the USA using our free mortgage calculator.",
  keywords: [
    "mortgage calculator USA",
    "home loan calculator",
    "monthly mortgage payment",
    "house loan calculator",
  ],
};

export default async function Page() {
  const blogs = await getRelatedBlogs("mortgage");

  return (
    <>
      <MortgageCalculatorPage />
      <MortgageSeo />
      <CtaButton />

      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">📚 mortgage Guides & Tips</h2>

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
