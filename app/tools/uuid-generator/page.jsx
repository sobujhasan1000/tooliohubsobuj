"use client";
import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    // Simple UUID v4 generator
    const id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    setUuid(id);
  };

  const copyUUID = () => {
    if (!uuid) return;
    navigator.clipboard.writeText(uuid);
    alert("UUID copied ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">UUID Generator 🆔</h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <button
          onClick={generateUUID}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-6"
        >
          Generate UUID
        </button>

        {uuid && (
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg font-mono break-words mb-4">{uuid}</div>
            <button
              onClick={copyUUID}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Copy UUID
            </button>
          </div>
        )}
      </div>
    </div>
  );
}