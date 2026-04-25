import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import mongoose from "mongoose";
import Blog from "../models/Blog.js";

/* ================= SLUG ================= */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ================= CONNECT DIRECT ================= */
async function connect() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not loaded");
  }

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "toolssobuj",
  });
}

/* ================= MAIN ================= */
async function fixSlugs() {
  try {
    console.log("🔄 Connecting...");
    await connect();
    console.log("✅ Connected");

    const blogs = await Blog.find();

    console.log("Total blogs:", blogs.length);

    for (let blog of blogs) {
      const cleanSlug = slugify(blog.title);

      console.log(`${blog.slug} → ${cleanSlug}`);

      blog.slug = cleanSlug;
      await blog.save();
    }

    console.log("🎉 DONE - All slugs fixed");
  } catch (err) {
    console.error("❌ ERROR:", err.message);
  } finally {
    await mongoose.connection.close();
  }
}

fixSlugs();
