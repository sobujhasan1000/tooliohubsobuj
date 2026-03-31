import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

// ✅ GET SINGLE BLOG
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ message: "Invalid ID" }, { status: 400 });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return Response.json({ message: "Blog not found" }, { status: 404 });
    }

    return Response.json(blog);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Fetch failed" }, { status: 500 });
  }
}

// ✅ UPDATE BLOG
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: body.title,
        content: body.content,
      },
      { new: true }
    );

    return Response.json(updatedBlog);
  } catch (error) {
    return Response.json({ message: "Update failed" }, { status: 500 });
  }
}

// ✅ DELETE BLOG
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    await Blog.findByIdAndDelete(id);

    return Response.json({ message: "Deleted" });
  } catch (error) {
    return Response.json({ message: "Delete failed" }, { status: 500 });
  }
}