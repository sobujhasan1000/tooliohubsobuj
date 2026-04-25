"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">📩 Contact ToolioFinance</h1>

      <p className="text-gray-600 mb-8">
        Have questions? Reach out anytime — we usually respond within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          placeholder="Write your message..."
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 border rounded-lg h-32"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>

      {/* EMAIL (IMPORTANT FOR TRUST) */}
      <p className="mt-6 text-gray-600">
        Or email us: <strong>support@tooliofinance.com</strong>
      </p>

      {/* INTERNAL LINKS */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">🔗 Explore Our Tools</h2>
      <div className="grid grid-cols-2 gap-3 text-blue-600">
        <Link href="/tools/loan-calculator">Loan Calculator</Link>
        <Link href="/tools/salary-calculator">Salary Calculator</Link>
        <Link href="/tools/mortgage-calculator">Mortgage Calculator</Link>
        <Link href="/tools/retirement-calculator">Retirement Calculator</Link>
        <Link href="/tools/interest-calculator">Interest Calculator</Link>
        <Link href="/tools/credit-card">Credit Card Calculator</Link>
      </div>
    </div>
  );
}
