// import { connectDB } from "@/lib/mongodb";
// import Blog from "@/models/Blog";
// import { generateBlog } from "@/lib/aiBlogGenerator";

// export async function POST(req) {
//   await connectDB();

//   const { keyword } = await req.json();

//   const blogData = generateBlog({ keyword });

//   const newBlog = await Blog.create(blogData);

//   return Response.json({
//     success: true,
//     blog: newBlog,
//   });
// }

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateBlog } from "@/lib/aiBlogGenerator";

const keywords = [
  "how to save money in usa",
  "best investment apps usa",
  "retirement planning tips usa",
  "how to reduce tax usa",
  "passive income ideas usa",
];

export async function GET() {
  await connectDB();

  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

  const blogData = generateBlog({ keyword: randomKeyword });

  const exists = await Blog.findOne({ slug: blogData.slug });

  if (!exists) {
    await Blog.create(blogData);
  }

  return Response.json({ success: true, keyword: randomKeyword });
}
