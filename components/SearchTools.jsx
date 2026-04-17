"use client";
import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Loan Calculator", link: "/tools/loan-calculator", icon: "💳" },
  { name: "Salary Calculator", link: "/tools/salary-calculator", icon: "💰" },
  {
    name: "Mortgage Calculator",
    link: "/tools/mortgage-calculator",
    icon: "🏠",
  },
  { name: "Credit Card Payoff", link: "/tools/credit-card", icon: "💸" },
  {
    name: "Investment Calculator",
    link: "/tools/investment-calculator",
    icon: "📈",
  },
  {
    name: "Retirement Calculator",
    link: "/tools/retirement-calculator",
    icon: "👴",
  },
];

export default function SearchTools() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-xl mx-auto px-4">
      {/* 🔍 INPUT */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search finance tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 pr-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />

        {/* ❌ CLEAR BUTTON */}
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
          >
            ✕
          </button>
        )}
      </div>

      {/* RESULTS */}
      <div className="mt-4 space-y-2">
        {filtered.length > 0 ? (
          filtered.map((tool, i) => (
            <Link key={i} href={tool.link}>
              <div className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50 hover:shadow-md transition cursor-pointer">
                {/* ICON */}
                <span className="text-xl">{tool.icon}</span>

                {/* TEXT */}
                <span className="font-medium text-gray-800">{tool.name}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">
            ❌ No tools found
          </div>
        )}
      </div>
    </div>
  );
}
