import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Link from "next/link";

export const metadata = {
  title: "Finance Blog | ToolioHub USA Money Tips",
  description:
    "Read high CPC finance blogs, money tips, investment guides and USA salary insights.",
};

export default async function BlogPage() {
  await connectDB();

  const blogs = await Blog.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        💰 Finance Blog (USA High CPC Content)
      </h1>

      {/* ADS TOP */}
      <div className="bg-gray-200 text-center py-4 mb-6 rounded">
        AdSense Banner
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <div className="border rounded-xl p-5 hover:shadow-lg transition bg-white">
              <h2 className="text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-500 mt-2 text-sm">
                {blog.content.slice(0, 140)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
