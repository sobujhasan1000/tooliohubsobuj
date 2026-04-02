import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Free Online Tools
          </h2>
          <p>Fast, secure and free tools for developers and everyone.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Popular Tools</h3>
          <div className="flex flex-col gap-2">
            <Link href="/tools/image-compressor">Image Compressor</Link>
            <Link href="/tools/json-formatter">JSON Formatter</Link>
            <Link href="/tools/password-generator">Password Generator</Link>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Free Online Tools. All rights reserved
        tooliohub.
      </div>
    </footer>
  );
}
