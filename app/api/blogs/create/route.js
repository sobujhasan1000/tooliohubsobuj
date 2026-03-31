import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("BODY:", body);

    const { title, content } = body;

    if (!title || !content) {
      return Response.json(
        { message: "Title & content required" },
        { status: 400 }
      );
    }

    // ✅ FIX HERE
    const slug =
      title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") +
      "-" +
      Date.now();

    const blog = await Blog.create({
      title,
      content,
      slug,
    });

    console.log("BLOG CREATED:", blog);

    return Response.json(blog);
  } catch (error) {
    console.log("❌ ERROR:", error);

    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}