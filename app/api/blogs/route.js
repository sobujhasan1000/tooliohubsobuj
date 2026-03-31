import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return Response.json(blogs);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}