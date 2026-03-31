"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 📥 Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🗑 DELETE BLOG
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this blog?");
    if (!confirmDelete) return;

    await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    // 🔄 refresh list
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  };

  // ✏️ EDIT BLOG
  const handleEdit = (id) => {
    router.push(`/admin/blogs/edit/${id}`);
  };

  if (loading) {
    return <p className="text-center p-10">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-6">Admin Blogs</h1>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden">
          
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-t">
                
                <td className="p-3">{blog.title}</td>

                <td className="p-3 text-sm text-gray-500">
                  {new Date(blog.createdAt).toDateString()}
                </td>

                <td className="p-3 flex gap-2 justify-center">
                  
                  {/* EDIT */}
                  <button
                    onClick={() => handleEdit(blog._id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}