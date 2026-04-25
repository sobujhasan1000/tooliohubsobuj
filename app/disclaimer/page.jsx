import Link from "next/link";

// ✅ SEO META
export const metadata = {
  title: "Disclaimer | ToolioFinance",
  description:
    "Read the disclaimer of ToolioFinance. We provide financial tools and information for educational purposes only.",
  alternates: {
    canonical: "https://www.tooliofinance.com/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p className="mb-4 text-gray-700">
        Welcome to <strong>ToolioFinance</strong>. By using our website, you
        acknowledge and agree to the terms of this disclaimer.
      </p>

      {/* GENERAL */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        📊 General Information
      </h2>
      <p className="mb-4 text-gray-700">
        All content on this website, including financial calculators, blog
        posts, and guides, is provided for informational and educational
        purposes only. We do not provide financial, legal, or professional
        advice.
      </p>

      {/* NO LIABILITY */}
      <h2 className="text-xl font-semibold mt-6 mb-2">⚠️ No Liability</h2>
      <p className="mb-4 text-gray-700">
        ToolioFinance is not responsible for any financial decisions you make
        based on the information provided on this website. You should always
        consult with a qualified financial advisor before making important
        decisions.
      </p>

      {/* ACCURACY */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        📈 Accuracy of Information
      </h2>
      <p className="mb-4 text-gray-700">
        While we strive to provide accurate and up-to-date information, we make
        no guarantees regarding completeness, reliability, or accuracy.
        Financial data and results from calculators are estimates only.
      </p>

      {/* TOOLS */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🧮 Calculator Disclaimer
      </h2>
      <p className="mb-4 text-gray-700">
        Our financial tools such as loan calculators, salary calculators, and
        investment tools provide estimated results based on user input. Actual
        results may vary depending on real-world factors such as interest rates,
        taxes, and financial policies.
      </p>

      {/* ADS */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        💰 Advertising & Affiliates
      </h2>
      <p className="mb-4 text-gray-700">
        We may display advertisements and participate in affiliate marketing
        programs. This means we may earn commissions when users click on ads or
        affiliate links. These partnerships do not influence our content or
        recommendations.
      </p>

      {/* EXTERNAL LINKS */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔗 External Links</h2>
      <p className="mb-4 text-gray-700">
        Our website may contain links to external websites. We are not
        responsible for the content, policies, or practices of third-party
        websites.
      </p>

      {/* CONSENT */}
      <h2 className="text-xl font-semibold mt-6 mb-2">✅ Consent</h2>
      <p className="mb-4 text-gray-700">
        By using our website, you agree to this disclaimer and its terms.
      </p>

      {/* CONTACT */}
      <h2 className="text-xl font-semibold mt-6 mb-2">📩 Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Disclaimer, please{" "}
        <Link href="/contact" className="text-blue-600 underline">
          contact us
        </Link>
        .
      </p>
    </div>
  );
}
