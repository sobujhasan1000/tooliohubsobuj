import Link from "next/link";
import SearchTools from "@/components/SearchTools";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="text-center py-20 px-4 bg-linear-to-r from-blue-600 to-indigo-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          All-in-One Free Online Tools 🚀
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl">
          Fast, secure and powerful tools for developers & everyone.
        </p>

        <Link
          href="/tools/image-compressor"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Start Now
        </Link>
      </section>


      {/* TOOLS GRID */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link href="/tools/image-compressor">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">Image Compressor</div>
        </Link>
        <Link href="/tools/json-formatter">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">JSON Formatter</div>
        </Link>
        <Link href="/tools/password-generator">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">Password Generator</div>
        </Link>
        <Link href="/tools/age-calculator">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">Age Calculator</div>
        </Link>
        <Link href="/tools/word-counter">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">Word Counter</div>
        </Link>
        <Link href="/tools/base64-tool">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">Base64 Encoder</div>
        </Link>
        <Link href="/tools/uuid-generator">
          <div className="p-5 border rounded-xl hover:shadow-lg text-center cursor-pointer">UUID Generator</div>
        </Link>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="p-4 text-xl font-semibold">⚡ Fast</div>
          <div className="p-4 text-xl font-semibold">🔒 Secure</div>
          <div className="p-4 text-xl font-semibold">💯 Free</div>
        </div>
      </section>

       {/* SEARCH BAR */}
      <SearchTools />

      {/* BLOG */}
      <BlogPreview />

      {/* AD SPACE */}
      {/* <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-gray-200 text-center py-6 rounded shadow">
          Ad Space
        </div>
      </div> */}
    </div>
  );
}