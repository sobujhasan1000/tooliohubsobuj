"use client";
import { useState } from "react";

export default function AutoPostPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handlePost = async () => {
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/auto-post");
      const data = await res.json();

      setMsg(`✅ Blog Created: ${data.keyword}`);
    } catch (err) {
      setMsg("❌ Error creating blog");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚀 Auto Blog Publisher</h1>

      <button
        onClick={handlePost}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Publishing..." : "Publish New Blog"}
      </button>

      {msg && <p className="mt-4 text-green-600 font-medium">{msg}</p>}
    </div>
  );
}
