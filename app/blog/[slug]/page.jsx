import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import { getInternalLinks } from "@/lib/internalLinks";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import Link from "next/link";

// ✅ SEO META (ADVANCED)
export async function generateMetadata({ params }) {
  await connectDB();

  const { slug } = await params;
  const blog = await Blog.findOne({ slug });

  if (!blog) {
    return {
      title: "Blog Not Found | ToolioFinance",
      description: "This blog does not exist",
    };
  }

  const url = `https://www.tooliofinance.com/blog/${blog.slug}`;
  const description = blog.metaDescription || blog.content.slice(0, 160);

  return {
    title: blog.title,
    description,

    keywords: [
      "finance tools",
      "loan calculator",
      "salary calculator",
      "mortgage calculator",
      "investment planning",
      "personal finance 2026",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.title,
      description,
      url,
      siteName: "ToolioFinance",
      type: "article",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ EXTRACT HEADINGS (TOC)
function extractHeadings(content) {
  const regex = /^(##|###)\s+(.*)/gm;
  const headings = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    headings.push({
      text: match[2],
      level: match[1],
      id: match[2]
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-"),
    });
  }

  return headings;
}

// ✅ MAIN PAGE
export default async function BlogSingle({ params }) {
  await connectDB();

  const { slug } = await params;
  const blog = await Blog.findOne({ slug });

  if (!blog) return notFound();

  const headings = extractHeadings(blog.content);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {/* MAIN CONTENT */}
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow">
          {/* ✅ JSON-LD STRUCTURED DATA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: blog.title,
                description: blog.content.slice(0, 160),
                author: {
                  "@type": "Organization",
                  name: "ToolioFinance",
                },
                publisher: {
                  "@type": "Organization",
                  name: "ToolioFinance",
                },
                datePublished: blog.createdAt,
                dateModified: blog.updatedAt || blog.createdAt,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.tooliofinance.com/blog/${blog.slug}`,
                },
              }),
            }}
          />

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          {/* DATE */}
          <p className="text-gray-400 mb-6">
            📅 {new Date(blog.createdAt).toDateString()}
          </p>

          {/* MARKDOWN CONTENT */}
          <article className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeRaw,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ]}
              components={{
                a: ({ href, children }) => {
                  if (href.startsWith("/")) {
                    return (
                      <Link
                        href={href}
                        className="text-blue-600 hover:underline"
                      >
                        {children}
                      </Link>
                    );
                  }

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </article>

          {/* RELATED TOOLS */}
          <div className="mt-10 bg-blue-50 p-5 rounded-xl">
            <h3 className="font-bold mb-3">🔥 Related Tools</h3>

            {getInternalLinks().map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className="block text-blue-600 hover:underline"
              >
                {link.title} →
              </Link>
            ))}
          </div>
        </div>

        {/* SIDEBAR TOC */}
        <div className="hidden md:block bg-white p-4 rounded-xl shadow h-fit sticky top-10">
          <h3 className="font-semibold mb-3">📑 Contents</h3>

          {headings.map((h, i) => (
            <a
              key={i}
              href={`#${h.id}`}
              className={`block text-sm mb-2 hover:text-blue-600 ${
                h.level === "###" ? "ml-4" : ""
              }`}
            >
              {h.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
