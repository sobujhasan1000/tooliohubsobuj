"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams(); // ✅ correct way

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ Fetch blog data
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setBlog(data);

      } catch (error) {
        console.log("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // ✅ Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!res.ok) throw new Error("Update failed");

      // ✅ redirect after update
      router.push("/admin/blogs");

    } catch (error) {
      console.log("Update Error:", error);
    } finally {
      setSaving(false);
    }
  };

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500">Loading blog...</p>
      </div>
    );
  }

  // ❌ Not found
  if (!blog) {
    return (
      <div className="p-10 text-center text-red-500">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          ✏️ Edit Blog
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">

          {/* TITLE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={blog.title || ""}
              onChange={(e) =>
                setBlog({ ...blog, title: e.target.value })
              }
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              value={blog.content || ""}
              onChange={(e) =>
                setBlog({ ...blog, content: e.target.value })
              }
              className="w-full border p-3 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {saving ? "Updating..." : "Update Blog"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/blogs")}
              className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}