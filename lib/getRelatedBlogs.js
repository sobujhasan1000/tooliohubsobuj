import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function getRelatedBlogs(keyword) {
  await connectDB();

  const blogs = await Blog.find({
    title: { $regex: keyword, $options: "i" },
  })
    .sort({ createdAt: -1 })
    .limit(5);

  return JSON.parse(JSON.stringify(blogs));
}
