// import SalaryClient from "./SalaryClient";

// export const metadata = {
//   title: "Salary After Tax Calculator USA (2026) – Take Home Pay Estimator",
//   description:
//     "Use our free USA salary calculator to estimate your take-home pay after federal, state taxes, Social Security, and Medicare.",
// };

// export default function Page() {
//   return <SalaryClient />;
// }

import SalaryClient from "./SalaryClient";
import { getRelatedBlogs } from "@/lib/getRelatedBlogs";
import SalarySEO from "./salarySeo";
import Link from "next/link";

export const metadata = {
  title: "Salary After Tax Calculator USA (2026)",
  description: "Calculate your take-home salary after tax with our free tool.",
};

export default async function Page() {
  const blogs = await getRelatedBlogs("salary");

  return (
    <>
      <SalaryClient />
      <SalarySEO />
      {/* 🔥 AUTO BLOG SECTION */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">📚 Salary Guides & Tips</h2>

          {blogs.length === 0 ? (
            <p className="text-gray-500">No related blogs yet</p>
          ) : (
            <div className="space-y-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="block text-blue-600 hover:underline"
                >
                  → {blog.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
