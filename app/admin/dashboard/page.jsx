import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function Dashboard() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>

        <Link
          href="/admin/add"
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          + Add Blog
        </Link>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto">
        {/* EMPTY STATE */}
        {blogs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-600">
              No blog yet 😔
            </h2>
            <p className="text-gray-400 mt-2">
              Create your first blog to get started
            </p>

            <Link
              href="/admin/add"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Create Blog
            </Link>
          </div>
        )}

        {/* BLOG LIST */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* TITLE */}
              <h2 className="text-xl font-bold mb-2">
                {blog.title}
              </h2>

              {/* CONTENT PREVIEW */}
              <div
                className="text-gray-500 text-sm mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />

              {/* ACTIONS */}
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={`/admin/edit/${blog._id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  ✏️ Edit
                </Link>

                <form
                  action={`/api/blogs/delete/${blog._id}`}
                  method="POST"
                >
                  <button className="text-red-600 font-medium hover:underline">
                    🗑 Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}