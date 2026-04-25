import Blog from "@/models/Blog";
import { slugify } from "./slugify";

export async function generateUniqueSlug(title) {
  const baseSlug = slugify(title);

  let slug = baseSlug;
  let count = 1;

  while (await Blog.findOne({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}
