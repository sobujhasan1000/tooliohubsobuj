"use client";
import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Image Compressor", link: "/tools/image-compressor" },
  { name: "JSON Formatter", link: "/tools/json-formatter" },
  { name: "Password Generator", link: "/tools/password-generator" },
  { name: "Age Calculator", link: "/tools/age-calculator" },
  { name: "Word Counter", link: "/tools/word-counter" },
  { name: "Base64 Encoder", link: "/tools/base64-tool" },
  { name: "UUID Generator", link: "/tools/uuid-generator" },
];

export default function SearchTools() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-4 space-y-2">
        {filtered.map((tool, i) => (
          <Link key={i} href={tool.link}>
            <div className="p-3 border rounded-xl hover:bg-blue-50 cursor-pointer">
              {tool.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}