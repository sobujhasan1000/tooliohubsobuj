import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";

// ✅ STRONG SEO METADATA (USA TARGETED)
export const metadata = {
  title: "Finance Blog USA 2026 | Loan, Salary, Investment & Money Guides",
  description:
    "Explore expert finance blogs in the USA including loan calculators, salary insights, mortgage guides, and investment strategies for 2026. Improve your financial planning today.",
  keywords: [
    "finance blog usa",
    "loan calculator usa",
    "salary calculator usa",
    "mortgage tips usa",
    "investment strategies usa 2026",
  ],
  alternates: {
    canonical: "https://www.tooliofinance.com/blog",
  },
  openGraph: {
    title: "Finance Blog USA | ToolioFinance",
    description:
      "Read high-quality finance blogs and guides to manage loans, salary, and investments in the USA.",
    url: "https://www.tooliofinance.com/blog",
    type: "website",
  },
};

export default async function BlogPage({ searchParams }) {
  await connectDB();

  const { page } = searchParams;
  const currentPage = Number(page) || 1;

  const limit = 8;
  const skip = (currentPage - 1) * limit;

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments();
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* ✅ ADVANCED SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "ToolioFinance Blog",
            url: "https://www.tooliofinance.com/blog",
            blogPost: blogs.map((b) => ({
              "@type": "BlogPosting",
              headline: b.title,
              url: `https://www.tooliofinance.com/blog/${b.slug}`,
            })),
          }),
        }}
      />

      {/* ✅ SEO H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Finance Blog USA 2026 – Loan, Salary & Investment Guides
      </h1>

      {/* ✅ SEO INTRO (150+ WORDS) */}
      <p className="text-gray-600 mb-10 leading-relaxed text-sm md:text-base">
        Welcome to our Finance Blog USA 2026, where you can explore expert
        guides on loans, salary calculations, investments, and credit card
        strategies. Our blog is designed to help individuals in the United
        States make smarter financial decisions using accurate tools and
        real-world insights. Whether you are planning a mortgage, calculating
        your take-home salary, or looking for the best ways to invest money, our
        detailed guides provide valuable information. Each article is carefully
        written to explain financial concepts in a simple and practical way,
        making it easier for beginners and professionals alike to understand.
        Stay updated with the latest financial trends, tips, and strategies to
        improve your financial future.
      </p>

      {/* ✅ BLOG GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-2xl p-5 hover:shadow-lg transition bg-white"
          >
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {(blog.metaDescription ||
                blog.content.replace(/<[^>]+>/g, "").slice(0, 160)) + "..."}
            </p>

            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-500 text-sm mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ PAGINATION */}
      <div className="flex justify-center mt-12 gap-3 flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/blog?page=${i + 1}`}
            className={`px-4 py-2 rounded-lg text-sm ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>

      {/* ✅ INTERNAL LINKING (BOOST SEO + ADSENSE TRUST) */}
      <div className="mt-14 bg-blue-50 p-6 rounded-2xl">
        <h3 className="font-semibold text-lg mb-2">
          🔥 Popular Financial Tools
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          Use our free financial calculators to plan your income, loans, and
          investments more effectively.
        </p>

        <div className="grid md:grid-cols-2 gap-2 text-blue-600 text-sm">
          <Link href="/tools/loan-calculator">Loan Calculator</Link>
          <Link href="/tools/salary-calculator">Salary Calculator</Link>
          <Link href="/tools/mortgage-calculator">Mortgage Calculator</Link>
          <Link href="/tools/retirement-calculator">Retirement Calculator</Link>
          <Link href="/tools/investment-calculator">Investment Calculator</Link>
          <Link href="/tools/credit-card">Credit Card Calculator</Link>
        </div>
      </div>
    </div>
  );
}
