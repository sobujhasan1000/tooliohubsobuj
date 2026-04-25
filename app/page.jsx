import Link from "next/link";
import SearchTools from "@/components/SearchTools";
import BlogPreview from "@/components/BlogPreview";

// ✅ Lucide Icons
import {
  DollarSign,
  Landmark,
  TrendingUp,
  HouseWifi,
  PiggyBank,
  CreditCard,
} from "lucide-react";

// ✅ SEO META
export const metadata = {
  title: "Best USA Finance Calculators (2026) – Salary, Loan, Investment Tools",
  description:
    "Use free USA finance calculators: salary after tax, loan EMI, mortgage, investment growth & retirement planning tools. Fast, accurate & 100% free.",
  keywords: [
    "salary calculator USA after tax",
    "loan EMI calculator USA",
    "mortgage calculator USA",
    "investment calculator compound interest",
    "retirement calculator USA",
    "credit card payoff calculator free",
  ],
  metadataBase: new URL("https://www.tooliofinance.com"),

  openGraph: {
    title: "USA Finance Calculators – Free & Accurate Tools",
    description:
      "Calculate salary, loan, mortgage, and investments easily with our free tools.",
    url: "https://www.tooliofinance.com",
    siteName: "ToolioFinance",
    type: "website",
  },

  alternates: {
    canonical: "https://www.tooliofinance.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ✅ TOOLS DATA
const tools = [
  {
    title: "Salary Calculator USA",
    href: "/tools/salary-calculator",
    desc: "Calculate salary after tax instantly",
    tag: "Popular",
    icon: DollarSign,
  },
  {
    title: "Loan Calculator",
    href: "/tools/loan-calculator",
    desc: "Estimate monthly loan payments",
    tag: "High CPC",
    icon: Landmark,
  },
  {
    title: "Mortgage Calculator",
    href: "/tools/mortgage-calculator",
    desc: "Home loan monthly estimate",
    tag: "Top",
    icon: HouseWifi,
  },
  {
    title: "Investment Calculator",
    href: "/tools/investment-calculator",
    desc: "Grow money with compound interest",
    tag: "Best",
    icon: TrendingUp,
  },
  {
    title: "Retirement Planner",
    href: "/tools/retirement-calculator",
    desc: "Plan your future savings",
    tag: "Future",
    icon: PiggyBank,
  },
  {
    title: "Credit Card Payoff",
    href: "/tools/credit-card",
    desc: "Pay off debt faster",
    tag: "Hot",
    icon: CreditCard,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* 🔥 HERO */}
      <section className="py-20 px-4 bg-linear-to-br from-green-500 via-green-400 to-cyan-300 text-black text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Smart USA Finance Calculators
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Salary, loan, investment & retirement tools — all free.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/tools/salary-calculator"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold"
          >
            Start Calculator 🚀
          </Link>

          <Link
            href="/blog"
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl"
          >
            Read Blog →
          </Link>
        </div>
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-bold mb-3">
          Free USA Financial Calculators
        </h2>
        <p className="text-gray-600 text-sm">
          ToolioFinance offers free and accurate financial calculators for
          salary, loans, mortgages, investments, and retirement planning in the
          USA. Plan smarter and grow your money easily.
        </p>
      </section>

      {/* 🔥 TOOLS (NERDWALLET STYLE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-green-100 rounded-4xl">
        <h2 className="text-2xl font-bold text-center mb-10">
          Financial Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6 ">
          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <Link
                href={tool.href}
                key={i}
                className="group border rounded-2xl p-6 bg-cyan-100 shadow-sm hover:shadow-xl transition hover:-translate-y-1 text-center"
              >
                {/* ICON */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-linear-to-br from-emerald-300 to-indigo-100 group-hover:from-blue-600 group-hover:to-indigo-600 transition">
                  <Icon
                    size={30}
                    className="text-green-500 group-hover:text-white"
                  />
                </div>

                {/* TITLE + TAG */}
                <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold group-hover:text-blue-700">
                    {tool.title}
                  </h3>

                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {tool.tag}
                  </span>
                </div>

                {/* DESC */}
                <p className="text-sm text-gray-500 mt-2">{tool.desc}</p>

                {/* FEATURES */}
                <div className="mt-4 flex justify-center gap-2 text-xs">
                  <span className="bg-gray-100 px-2 py-1 rounded">Fast</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Accurate
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Free</span>
                </div>

                {/* BUTTON */}
                <div className="mt-5 block bg-green-500 text-balck py-2 rounded-lg  hover:bg-blue-700 transition font-bold">
                  Use Tool →
                </div>
              </Link>
            );
          })}
        </div>

        {/* INTERNAL LINKS */}
        <div className="text-center mt-10 text-sm text-gray-500">
          Popular:
          <Link href="/tools/salary-calculator" className="text-blue-600 ml-2">
            Salary Calculator
          </Link>
          ,
          <Link href="/tools/loan-calculator" className="text-blue-600 ml-2">
            Loan Calculator
          </Link>
        </div>
      </section>

      {/* 🔍 SEARCH */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-xl font-bold mb-4">Find Your Tool 🔍</h2>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow border">
          <SearchTools />
        </div>
      </section>

      {/* 🔥 TRUST */}
      <section className="bg-emerald-100 py-12 text-center">
        <h2 className="text-xl font-bold mb-6">Why Choose ToolioFinance?</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow">
            ✔ 100% Free Tools
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            ✔ Accurate Results
          </div>
          <div className="bg-white p-4 rounded-lg shadow">✔ No Data Stored</div>
        </div>
      </section>

      {/* 🔥 BLOG */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-6">Latest Articles</h2>

        <BlogPreview />

        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="px-6 py-3 bg-green-400 text-black font-bold rounded-lg"
          >
            View All →
          </Link>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          Learn more:
          <Link href="/tools/salary-calculator" className="text-blue-600 ml-2">
            Salary After Tax Guide
          </Link>
          ,
          <Link href="/tools/investment" className="text-blue-600 ml-2">
            Investment Strategy
          </Link>
          ,
          <Link
            href="/tools/retirement-calculator"
            className="text-blue-600 ml-2"
          >
            Save Money Tips
          </Link>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-emerald-300 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Take Control of Your Money 🚀</h2>

        <p className="mt-3 text-white/90">
          Start using powerful finance tools today.
        </p>

        <Link
          href="/tools/investment-calculator"
          className="inline-block mt-6 px-6 py-3 bg-green-400 text-black rounded-xl font-semibold"
        >
          Start Now
        </Link>
      </section>

      {/* 🔥 FAQ */}

      <section className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
        <p>
          Our platform offers the best salary calculator USA, loan EMI
          calculator, mortgage calculator, investment calculator, and retirement
          planner tools. All tools are optimized for accurate financial planning
          in the United States.
        </p>
      </section>
      {/* 🔥 FAQ SEO + UI */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Are these tools free?
            </summary>
            <p className="mt-2 text-sm">
              Yes, all financial calculators on ToolioFinance are completely
              free to use.
            </p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Are results accurate?
            </summary>
            <p className="mt-2 text-sm">
              Our tools use updated USA financial data to provide accurate
              results.
            </p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Do you store user data?
            </summary>
            <p className="mt-2 text-sm">
              No, we do not store any personal or financial data.
            </p>
          </details>
        </div>

        {/* ✅ SEO FAQ SCHEMA */}
        {/* ✅ WEBSITE + ORGANIZATION SCHEMA */}
      </section>
      {/* ✅ WEBSITE + ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ToolioFinance",
            url: "https://www.tooliofinance.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.tooliofinance.com/tools/{search_term}",
              "query-input": "required name=search_term",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ToolioFinance",
            url: "https://www.tooliofinance.com",
            logo: "https://www.tooliofinance.com/logo.png",
          }),
        }}
      />
    </div>
  );
}
