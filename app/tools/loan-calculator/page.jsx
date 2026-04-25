import LoanCalculatorPage from "./LoanCalculatorClient";
import LoanSeo from "./LoanSeo";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import Link from "next/link";

export const metadata = {
  title: "Loan Calculator USA (2026) – EMI, Interest & Monthly Payment Tool",
  description:
    "Use our free USA loan calculator to estimate monthly EMI, total interest, and loan repayment schedule. Fast, accurate, and easy to use.",
  keywords: [
    "loan calculator USA",
    "EMI calculator",
    "loan payment calculator",
    "interest calculator USA",
  ],
};

export default async function Page() {
  const blogs = await getRelatedBlogs("loan");

  return (
    <>
      <LoanCalculatorPage />
      <LoanSeo />

      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">📚 loan Guides & Tips</h2>

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
