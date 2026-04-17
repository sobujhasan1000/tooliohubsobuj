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
    href: "/tools/retirement-calculator",
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
      {/* 🔥 HERO */}
      <section className="relative py-16 sm:py-20 md:py-28 px-4 bg-linear-to-br from-blue-500 via-indigo-500 to-blue-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-3xl bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Smart USA Finance Calculators
            <span className="block text-cyan-300 mt-2">
              Salary, Tax & Investment Tools
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90">
            Free tools to calculate salary, tax, loans and retirement in the
            USA.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/salary-calculator"
              className="px-6 py-3 bg-white text-blue-800 rounded-xl font-semibold shadow hover:scale-105 transition"
            >
              Start Calculator 🚀
            </Link>

            <Link
              href="/blog"
              className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition"
            >
              Read Blog →
            </Link>
          </div>

          {/* TRUST */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
            <div className="bg-white/10 rounded-lg py-3">✔ 10K+ Users</div>
            <div className="bg-white/10 rounded-lg py-3">
              ✔ Accurate USA Data
            </div>
            <div className="bg-white/10 rounded-lg py-3">✔ Updated 2026</div>
          </div>
        </div>
      </section>

      {/* 🔥 FEATURED TOOL */}
      <section className="max-w-5xl mx-auto px-4 mt-10">
        <div className="bg-linear-to-r from-blue-500 to-indigo-400 text-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            🔥 Most Popular: Salary Calculator USA
          </h2>
          <p className="mt-2 text-white/90 text-sm sm:text-base">
            Calculate your take-home salary after tax instantly.
          </p>

          <Link
            href="/tools/salary-calculator"
            className="inline-block mt-4 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold"
          >
            Use Now →
          </Link>
        </div>
      </section>

      {/* 🔥 TOOLS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          USA Finance Calculators
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {tools.map((tool, i) => (
            <Link key={i} href={tool.href}>
              <div className="group relative p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                {/* 🔥 TOP ICON + TITLE */}
                <div className="flex items-start gap-3">
                  {/* ICON BOX */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-lg group-hover:bg-blue-600 group-hover:text-white transition">
                    💰
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold group-hover:text-blue-700 transition">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                </div>

                {/* 🔥 BOTTOM */}
                <div className="mt-5 flex justify-between items-center">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Popular
                  </span>

                  <span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Use Tool →
                  </span>
                </div>

                {/* 🔥 HOVER GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-blue-500/5 to-indigo-500/5"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔍 SEARCH */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 🔍 TITLE */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
            Search Finance Tools 🔍
          </h2>

          {/* 🔥 SUBTEXT */}
          <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-xl mx-auto">
            Quickly find calculators like salary, loan, investment and more.
          </p>

          {/* 🔍 SEARCH COMPONENT */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border">
            <SearchTools />
          </div>
        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="bg-gray-50 py-14 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-8">
          Why ToolioFinance?
        </h2>

        <div className="grid gap-5 md:grid-cols-3 max-w-6xl mx-auto px-4">
          <div className="p-5 bg-white rounded-xl shadow">
            ⚡ Instant Results
          </div>
          <div className="p-5 bg-white rounded-xl shadow">
            🔒 Secure & Private
          </div>
          <div className="p-5 bg-white rounded-xl shadow">💰 High Accuracy</div>
        </div>
      </section>

      {/* 🔥 BLOG */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Latest Finance Articles
        </h2>

        <BlogPreview />

        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            View All →
          </Link>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-blue-700 text-white text-center py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Take Control of Your Financial Future 🚀
        </h2>

        <p className="mt-3 text-white/90">
          Start using powerful USA finance tools today.
        </p>

        <Link
          href="/tools/investment-calculator"
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold"
        >
          Try Now
        </Link>
      </section>

      {/* 🔥 FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">FAQ</h2>

        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Are these tools free?
            </summary>
            <p className="mt-2 text-sm">Yes, all tools are 100% free.</p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Are results accurate?
            </summary>
            <p className="mt-2 text-sm">Based on USA financial data.</p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Do you store data?
            </summary>
            <p className="mt-2 text-sm">No, everything is private.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
