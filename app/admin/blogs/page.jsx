"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Search } from "lucide-react";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const router = useRouter();
  const limit = 50;

  const fetchBlogs = async (currentPage = 1) => {
    const res = await fetch(`/api/blogs?page=${currentPage}&limit=${limit}`);
    const data = await res.json();

    setBlogs(data.blogs);
    setTotalPages(data.totalPages);
    setPage(currentPage);
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this blog?")) return;
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchBlogs(page);
  };

  const handleEdit = (id) => {
    router.push(`/admin/blogs/edit/${id}`);
  };

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">📊 Admin Blogs</h1>

        <div className="flex items-center gap-2 w-full md:w-80">
          <Search className="w-4 h-4 text-gray-500" />
          <Input
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE CARD */}
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBlogs.map((blog, index) => (
                <tr
                  key={blog._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">
                    {(page - 1) * limit + index + 1}
                  </td>

                  <td className="p-4 font-semibold text-gray-800">
                    {blog.title}
                  </td>

                  <td className="p-4 text-gray-500">
                    {new Date(blog.createdAt).toDateString()}
                  </td>

                  <td className="p-4 flex justify-center gap-2">
                    <Button
                      size="sm"
                      className="flex gap-1 items-center"
                      onClick={() => handleEdit(blog._id)}
                    >
                      <Pencil size={14} /> Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      className="flex gap-1 items-center"
                      onClick={() => handleDelete(blog._id)}
                    >
                      <Trash2 size={14} /> Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* PAGINATION */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Page {page} of {totalPages}
        </p>

        <div className="flex gap-2">
          <Button
            disabled={page === 1}
            onClick={() => fetchBlogs(page - 1)}
            variant="outline"
          >
            Prev
          </Button>

          <Button
            disabled={page === totalPages}
            onClick={() => fetchBlogs(page + 1)}
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
