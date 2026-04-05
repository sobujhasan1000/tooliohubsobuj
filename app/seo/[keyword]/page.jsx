import { generateBlog } from "@/lib/aiBlogGenerator";

export async function generateMetadata({ params }) {
  const blog = generateBlog({ keyword: params.keyword });

  return {
    title: blog.title,
    description: blog.metaDescription,
  };
}

export default function SeoPage({ params }) {
  const blog = generateBlog({ keyword: params.keyword });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <div className="bg-gray-200 text-center py-4 mb-6">AdSense Banner</div>

      <div className="prose max-w-none whitespace-pre-line">{blog.content}</div>

      <div className="mt-10 p-5 bg-blue-50 rounded-xl">
        <h3>Try Tools</h3>
        <a href="/tools/investment-calculator">Investment Tool →</a>
      </div>
    </div>
  );
}
