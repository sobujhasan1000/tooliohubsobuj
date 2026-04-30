import CreditCardInterestCalculator from "./CreditCardInterestCalculator";
import CreditCardSeo from "./CreditCardSEO";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "Credit Card Interest Calculator USA (2026) – Payoff & APR Tool",
  description:
    "Use this free credit card calculator USA to estimate payoff time, total interest, and monthly payments. Plan your debt repayment smartly.",
  keywords: [
    "credit card calculator USA",
    "credit card payoff calculator",
    "APR interest calculator",
    "debt payoff calculator",
  ],
};

export default async function Page() {
  const blogs = await getRelatedBlogs("credit");

  return (
    <>
      <CreditCardInterestCalculator />
      <CreditCardSeo />
      <CtaButton />

      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            📚credit Card Guides & Tips
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
