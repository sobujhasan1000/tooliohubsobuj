"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    await fetch("/api/auto-blog", {
      method: "POST",
      body: JSON.stringify({ keyword }),
    });

    setLoading(false);
    alert("Blog Created 🚀");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">AI Blog Generator</h1>

      <input
        type="text"
        placeholder="Enter keyword (USA finance)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-3 w-full mb-4"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>
    </div>
  );
}
