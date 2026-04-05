import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateBlog } from "@/lib/aiBlogGenerator";
import { getRandomKeyword } from "@/lib/getRandomKeyword";

export async function GET() {
  await connectDB();

  const keyword = getRandomKeyword();

  const blogData = generateBlog({ keyword });

  const exists = await Blog.findOne({ slug: blogData.slug });

  if (!exists) {
    await Blog.create(blogData);
  }

  return Response.json({ success: true, keyword });
}
