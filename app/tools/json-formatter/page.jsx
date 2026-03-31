"use client";

import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    } catch (err) {
      setError("Invalid JSON ❌");
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center">
          JSON Formatter
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Format, beautify and validate JSON instantly
        </p>

        {/* INPUT + OUTPUT */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* INPUT */}
          <textarea
            placeholder="Paste your JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-72 p-4 border rounded-xl outline-none"
          />

          {/* OUTPUT */}
          <textarea
            value={output}
            readOnly
            className="w-full h-72 p-4 border rounded-xl bg-gray-100"
          />

        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={formatJSON}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl"
          >
            Format JSON
          </button>

          <button
            onClick={copyToClipboard}
            className="px-6 py-2 bg-green-600 text-white rounded-xl"
          >
            Copy
          </button>
        </div>

        {/* AD */}
        <div className="mt-10 bg-gray-200 text-center py-4 rounded">
          Ad Space
        </div>

      </div>
    </div>
  );
}