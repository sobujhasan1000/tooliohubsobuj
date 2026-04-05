import Link from "next/link";
import SearchTools from "@/components/SearchTools";
import BlogPreview from "@/components/BlogPreview";

const tools = [
  {
    title: "Salary After Tax (USA)",
    href: "/tools/salary-calculator",
    desc: "Calculate net income after US tax",
  },
  {
    title: "Investment Calculator",
    href: "/tools/investment-calculator",
    desc: "Grow money with compound interest",
  },
  {
    title: "Retirement Planner",
    href: "/tools/retierment-calculator",
    desc: "Plan your financial future",
  },
  {
    title: "Loan Calculator",
    href: "/tools/loan-calculator",
    desc: "Monthly loan payment estimator",
  },
  {
    title: "Mortgage Calculator",
    href: "/tools/mortgage-calculator",
    desc: "USA home loan calculator",
  },
  {
    title: "Credit Card Payoff",
    href: "/tools/credit-card",
    desc: "Pay off debt faster plan",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO - USA SEO FOCUS */}
      <section className="text-center py-24 px-4 bg-linear-to-r from-blue-800 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Free USA Finance Tools & Money Blog 🚀
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          Salary, Tax, Investment, Loan & Retirement calculators with expert
          finance blogs powered by MongoDB.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/tools/salary-calculator"
            className="px-8 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Salary Tool
          </Link>

          <Link
            href="/blog"
            className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:scale-105 transition"
          >
            Read Finance Blog
          </Link>
        </div>
      </section>

      {/* TOP AD */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="bg-gray-200 text-center py-6 rounded-xl">
          AdSense Top Banner
        </div>
      </div>

      {/* TOOLS GRID (ONLY 6 CORE TOOLS) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          USA Finance Calculators
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, i) => (
            <Link key={i} href={tool.href}>
              <div className="p-6 border rounded-2xl hover:shadow-xl transition bg-white group">
                <h3 className="text-lg font-semibold group-hover:text-blue-700">
                  {tool.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">{tool.desc}</p>

                <p className="mt-4 text-blue-600 font-medium text-sm">
                  Use Tool →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEARCH TOOLS */}
      <section className="max-w-4xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">
          Search Finance Tools 🔍
        </h2>
        <SearchTools />
      </section>

      {/* FEATURES - SEO TRUST SIGNAL */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">
          Why ToolioHub is Trusted in USA
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="p-6 bg-white rounded-xl shadow">
            ⚡ Instant Financial Calculations
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            🔒 Secure & Private (No Data Save)
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            💰 High CPC Finance Niche
          </div>
        </div>
      </section>

      {/* BLOG SECTION (MONGODB AUTO BLOG SYSTEM) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Latest Finance Articles (USA Guide)
        </h2>

        <BlogPreview />
      </section>

      {/* MID AD */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-gray-200 text-center py-6 rounded-xl">
          AdSense In-Content Ad
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="bg-blue-700 text-white text-center py-16 px-4 mt-10">
        <h2 className="text-3xl font-bold">
          Start Managing Your Money Smarter Today
        </h2>

        <p className="mt-3 text-white/90">
          Use USA finance tools + expert blogs for better financial decisions.
        </p>

        <Link
          href="/tools/investment-calculator"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition"
        >
          Try Investment Tool
        </Link>
      </section>

      {/* BOTTOM AD */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gray-200 text-center py-6 rounded-xl">
          AdSense Footer Banner
        </div>
      </div>
    </div>
  );
}
