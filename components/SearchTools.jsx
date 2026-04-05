"use client";
import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Loan calculator", link: "/tools/loan-calculator" },
  { name: "salary calculator", link: "/tools/salary-calculator" },
  { name: "mortgage calculator", link: "/tools/mortgage-calculator" },
  { name: "credit card", link: "/tools/credit-card" },
  { name: "investment calculator", link: "/tools/investment-calculator" },
  { name: "retierment calculator", link: "/tools/retierment-calculator" },
];

export default function SearchTools() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()),
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
            <div className="p-3 border rounded-xl hover:bg-blue-50 cursor-pointer m-2">
              {tool.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
