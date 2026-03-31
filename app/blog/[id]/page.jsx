import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function generateMetadata({ params }) {
  const { id } = await params;
  await connectDB();

  const blog = await Blog.findById(id);

  return {
    title: blog?.title || "Blog Not Found",
    description: blog?.content?.slice(0, 150),
  };
}

export default async function Blogsingle({ params }) {
  await connectDB();

  const { id } = await params;

  const blog = await Blog.findById(id);

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Blog Not Found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {blog.title}
        </h1>

        {/* Date */}
        <p className="text-sm text-gray-400 mb-6">
          📅 {new Date(blog.createdAt).toDateString()}
        </p>

        {/* Divider */}
        <div className="border-b mb-6"></div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
          {blog.content}
        </p>

      </div>
    </div>
  );
}