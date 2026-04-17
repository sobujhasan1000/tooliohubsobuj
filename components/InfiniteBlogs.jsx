"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function InfiniteBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const res = await fetch(`/api/blog?page=${page}`);
    const data = await res.json();

    setBlogs((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
  };

  //   useEffect(() => {
  //     loadMore();
  //   }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug}`}>
            <div className="p-5 border rounded-xl">
              <h3>{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={loadMore}
          className="px-6 py-2 bg-blue-600 text-white rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
