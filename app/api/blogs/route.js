// import { connectDB } from "@/lib/mongodb";
// import Blog from "@/models/Blog";

// export async function GET(req) {
//   await connectDB();

//   const { searchParams } = new URL(req.url);

//   const page = Number(searchParams.get("page")) || 1;
//   const limit = 6;
//   const skip = (page - 1) * limit;

//   const blogs = await Blog.find()
//     .sort({ createdAt: -1 })
//     .skip(skip)
//     .limit(limit);

//   return Response.json(blogs);
// }

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 6;
  const getAll = searchParams.get("all");

  // 🔵 Admin: get all blogs
  if (getAll === "true") {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    const total = blogs.length;

    return Response.json({ blogs, total });
  }

  // 🟢 Frontend / Admin pagination
  const skip = (page - 1) * limit;

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments();

  return Response.json({
    blogs,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}
