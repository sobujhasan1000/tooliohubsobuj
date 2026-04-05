"use client";

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-5">
        <h1 className="text-xl font-bold mb-6">🛠 Admin Panel</h1>

        <nav className="flex flex-col gap-3">
          <Link href="/admin" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/admin/add" className="hover:text-gray-300">
            Add Blog
          </Link>
          <Link href="/admin/blogs" className="hover:text-gray-300">
            All Blogs
          </Link>
          <Link href="/admin/auto-post" className="hover:text-gray-300">
            auto post
          </Link>
        </nav>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
