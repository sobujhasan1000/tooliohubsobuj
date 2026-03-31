"use client";
import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?";

  const generatePassword = () => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      result += characters[index];
    }
    setPassword(result);
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Password Generator 🔒
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <label className="block mb-2 font-semibold text-gray-700">
          Password Length
        </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min={4}
          max={50}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
        >
          Generate Password
        </button>

        {password && (
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Your Password:</p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-blue-600 mb-3 break-words">
              {password}
            </div>
            <button
              onClick={copyPassword}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}