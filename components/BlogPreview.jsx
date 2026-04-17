"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs?limit=6");
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

  // 🔥 LOADING SKELETON
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 px-4 py-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-100 h-48 rounded-xl"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Latest Finance Blogs 🚀
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <div className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
              {/* 🖼 IMAGE */}
              {/* <div className="h-40 bg-gray-200 overflow-hidden">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div> */}

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-3">
                  {blog.content?.slice(0, 110)}...
                </p>

                {/* DATE */}
                <p className="text-xs text-gray-400 mt-3">
                  {new Date(blog.createdAt).toDateString()}
                </p>

                {/* CTA */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-600 text-sm font-medium group-hover:underline">
                    Read More →
                  </span>

                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Blog
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
