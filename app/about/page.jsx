import Link from "next/link";

// ✅ SEO META
export const metadata = {
  title: "About ToolioFinance | Smart Financial Tools & Guides",
  description:
    "Learn about ToolioFinance — your trusted platform for loan calculators, salary tools, and financial planning guides to improve your money decisions.",
  alternates: {
    canonical: "https://www.tooliofinance.com/about",
  },
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">About ToolioFinance</h1>

      <p className="mb-4 text-gray-700">
        Welcome to <strong>ToolioFinance</strong> — your all-in-one platform for
        powerful financial calculators and smart money guides. Our goal is to
        help you make better financial decisions with simple, fast, and accurate
        tools.
      </p>

      <p className="mb-4 text-gray-700">
        We provide a range of free online tools including loan calculators,
        salary calculators, mortgage estimators, and investment planning tools.
        Whether you r planning your monthly budget or long-term financial
        future, our tools are designed to give you instant insights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">💡 What We Offer</h2>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Accurate loan and EMI calculations</li>
        <li>Salary breakdown and tax estimation tools</li>
        <li>Mortgage and interest calculators</li>
        <li>Retirement and investment planning tools</li>
        <li>Easy-to-understand finance blog guides</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Our Mission</h2>

      <p className="mb-4 text-gray-700">
        Our mission is to simplify finance for everyone. We believe financial
        planning should not be complicated. That’s why we build tools that are
        easy to use, fast, and accessible to anyone — even without technical
        knowledge.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🔗 Explore Our Tools</h2>

      <div className="grid grid-cols-2 gap-3 text-blue-600">
        <Link href="/tools/loan-calculator">Loan Calculator</Link>
        <Link href="/tools/salary-calculator">Salary Calculator</Link>
        <Link href="/tools/mortgage-calculator">Mortgage Calculator</Link>
        <Link href="/tools/retirement-calculator">Retirement Calculator</Link>
        <Link href="/tools/interest-calculator">Interest Calculator</Link>
        <Link href="/tools/credit-card">Credit Card Calculator</Link>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">📩 Contact Us</h2>

      <p className="text-gray-700">
        Have questions or suggestions? Feel free to{" "}
        <Link href="/contact" className="text-blue-600 underline">
          contact us
        </Link>{" "}
        anytime. We’re always happy to help!
      </p>
    </div>
  );
}
