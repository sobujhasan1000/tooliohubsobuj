import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return Response.json(blogs);
}
