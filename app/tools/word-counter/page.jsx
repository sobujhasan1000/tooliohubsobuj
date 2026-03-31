"use client";
import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function WordCounter() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const copyText = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard ✅");
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Word Counter 📝
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Paste or type your text here..."
          className="w-full p-4 border rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        <div className="flex flex-col md:flex-row justify-between mb-6 text-gray-700 font-semibold">
          <div>Words: {wordCount}</div>
          <div>Characters: {charCount}</div>
          <div>Sentences: {sentenceCount}</div>
          <div>Paragraphs: {paragraphCount}</div>
        </div>

        <button
          onClick={copyText}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Copy Text
        </button>
      </div>
    </div>
  );
}