import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import { getInternalLinks } from "@/lib/internalLinks";

export async function generateMetadata({ params }) {
  await connectDB();

  const { slug } = await params; // ✅ FIX (IMPORTANT)

  const blog = await Blog.findOne({ slug });

  return {
    title: blog?.title || "Blog Not Found | ToolioHub",
    description:
      blog?.metaDescription ||
      blog?.content?.slice(0, 160) ||
      "Finance blog article",
  };
}

export default async function BlogSingle({ params }) {
  await connectDB();

  const { slug } = await params; // ✅ FIX HERE ALSO

  const blog = await Blog.findOne({ slug });

  if (!blog) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        {/* DATE */}
        <p className="text-sm text-gray-400 mb-6">
          📅 {new Date(blog.createdAt).toDateString()}
        </p>

        {/* CONTENT */}
        <div className="text-gray-700 text-lg whitespace-pre-line">
          {blog.content}
        </div>

        {/* INTERNAL LINKS */}
        <div className="mt-10 p-5 bg-blue-50 rounded-xl">
          <h3 className="font-semibold mb-3">🔥 Try Our Free Finance Tools</h3>

          {getInternalLinks().map((link, i) => (
            <a key={i} href={link.url} className="block text-blue-600">
              {link.title} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
