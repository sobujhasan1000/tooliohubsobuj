// import { connectDB } from "@/lib/mongodb";
// import Blog from "@/models/Blog";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const body = await req.json();
//     console.log("BODY:", body);

//     const { title, content } = body;

//     if (!title || !content) {
//       return Response.json(
//         { message: "Title & content required" },
//         { status: 400 }
//       );
//     }

//     // ✅ FIX HERE
//     const slug =
//       title
//         .toLowerCase()
//         .replace(/ /g, "-")
//         .replace(/[^\w-]+/g, "") +
//       "-" +
//       Date.now();

//     const blog = await Blog.create({
//       title,
//       content,
//       slug,
//     });

//     console.log("BLOG CREATED:", blog);

//     return Response.json(blog);
//   } catch (error) {
//     console.log("❌ ERROR:", error);

//     return Response.json(
//       { message: error.message },
//       { status: 500 }
//     );
//   }
// }

// import { connectDB } from "@/lib/mongodb";
// import Blog from "@/models/Blog";

// /* =========================
//    CLEAN SLUG FUNCTION
// ========================= */
// function slugify(text) {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// /* =========================
//    UNIQUE SLUG GENERATOR
// ========================= */
// async function generateUniqueSlug(title) {
//   const baseSlug = slugify(title);

//   let slug = baseSlug;
//   let count = 1;

//   while (await Blog.findOne({ slug })) {
//     slug = `${baseSlug}-${count}`;
//     count++;
//   }

//   return slug;
// }

// /* =========================
//    CREATE BLOG API
// ========================= */
// export async function POST(req) {
//   try {
//     await connectDB();

//     const body = await req.json();
//     console.log("BODY:", body);

//     const { title, content } = body;

//     if (!title || !content) {
//       return Response.json(
//         { message: "Title & content required" },
//         { status: 400 },
//       );
//     }

//     // ✅ CLEAN + UNIQUE SLUG
//     const slug = await generateUniqueSlug(title);

//     const blog = await Blog.create({
//       title,
//       content,
//       slug,
//     });

//     console.log("BLOG CREATED:", blog);

//     return Response.json({
//       success: true,
//       blog,
//     });
//   } catch (error) {
//     console.log("❌ ERROR:", error);

//     return Response.json({ message: error.message }, { status: 500 });
//   }
// }

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateSlug, detectCluster } from "@/lib/seoEngine";

export async function POST(req) {
  try {
    await connectDB();

    const { title, content } = await req.json();

    if (!title || !content) {
      return Response.json(
        { message: "Title & content required" },
        { status: 400 },
      );
    }

    // 🔥 AUTO SYSTEM
    const baseSlug = generateSlug(title);
    const cluster = detectCluster(title, content);

    // 🔥 UNIQUE SLUG FIX
    let slug = baseSlug;
    let count = 1;

    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    const blog = await Blog.create({
      title,
      content,
      slug,
      cluster,
    });

    return Response.json(blog);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
