"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="p-10 text-center">Loading blogs...</p>;
  }

  

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Latest Blogs 🚀
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog._id}`}
          >
            <div className="p-5 border rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer bg-linear-to-r from-blue-100 to-purple-100">
  
  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
    {blog.title}
  </h3>

  <p className="text-sm text-gray-500 line-clamp-3">
    {blog.content?.slice(0, 100)}...
  </p>

  <p className="text-xs text-gray-400 mt-3">
    {new Date(blog.createdAt).toDateString()}
  </p>
  <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
  Read More →
</button>

</div>
          </Link>
        ))}
      </div>
    </div>
  );
}