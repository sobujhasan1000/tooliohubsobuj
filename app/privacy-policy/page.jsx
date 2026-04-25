import Link from "next/link";

// ✅ SEO META
export const metadata = {
  title: "Privacy Policy | ToolioFinance",
  description:
    "Read the Privacy Policy of ToolioFinance to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://www.tooliofinance.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        At <strong>ToolioFinance</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our website and financial tools.
      </p>

      {/* INFO */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        📊 Information We Collect
      </h2>
      <p className="mb-4 text-gray-700">
        We may collect non-personal information such as browser type, device
        information, pages visited, and usage data to improve our tools and user
        experience.
      </p>

      {/* COOKIES */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🍪 Cookies</h2>
      <p className="mb-4 text-gray-700">
        We use cookies to enhance your experience. Cookies help us understand
        how users interact with our site and allow us to improve performance.
      </p>

      {/* ADSENSE */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        💰 Google AdSense & Advertising
      </h2>
      <p className="mb-4 text-gray-700">
        We may use Google AdSense to display ads. Google uses cookies (such as
        the DoubleClick cookie) to serve ads based on users’ visits to this and
        other websites.
      </p>

      <p className="mb-4 text-gray-700">
        Users may opt out of personalized advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>
        .
      </p>

      {/* DATA SECURITY */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔒 Data Security</h2>
      <p className="mb-4 text-gray-700">
        We take reasonable measures to protect your data. However, no method of
        transmission over the internet is 100% secure.
      </p>

      {/* THIRD PARTY */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        🔗 Third-Party Services
      </h2>
      <p className="mb-4 text-gray-700">
        We may use third-party services like analytics tools and advertising
        networks that may collect information in accordance with their own
        privacy policies.
      </p>

      {/* USER CONSENT */}
      <h2 className="text-xl font-semibold mt-6 mb-2">✅ Your Consent</h2>
      <p className="mb-4 text-gray-700">
        By using our website, you consent to our Privacy Policy and agree to its
        terms.
      </p>

      {/* UPDATES */}
      <h2 className="text-xl font-semibold mt-6 mb-2">🔄 Policy Updates</h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page.
      </p>

      {/* CONTACT */}
      <h2 className="text-xl font-semibold mt-6 mb-2">📩 Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please{" "}
        <Link href="/contact" className="text-blue-600 underline">
          contact us
        </Link>
        .
      </p>
    </div>
  );
}
