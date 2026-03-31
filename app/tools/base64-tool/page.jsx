"use client";
import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function Base64Encoder() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");

  const encodeText = () => {
    setEncoded(btoa(text)); // Encode to Base64
  };

  const decodeText = () => {
    try {
      setEncoded(atob(text)); // Decode from Base64
    } catch (e) {
      alert("Invalid Base64 string ❌");
    }
  };

  const copyText = () => {
    if (!encoded) return;
    navigator.clipboard.writeText(encoded);
    alert("Copied to clipboard ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Base64 Encoder/Decoder 🔐</h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          className="w-full p-4 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <button
            onClick={encodeText}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Encode
          </button>
          <button
            onClick={decodeText}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Decode
          </button>
        </div>

        {encoded && (
          <div className="mt-4">
            <p className="font-semibold text-gray-700 mb-2">Result:</p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono break-words mb-4">{encoded}</div>
            <button
              onClick={copyText}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Copy Result
            </button>
          </div>
        )}
      </div>
    </div>
  );
}