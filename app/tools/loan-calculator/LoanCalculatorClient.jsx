"use client";
import { useMemo, useState } from "react";
import jsPDF from "jspdf";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(2);

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const loanAmount = Number(amount) || 0;
  const interestRate = Number(rate) || 0;
  const loanYears = Number(years) || 0;

  const monthlyRate = interestRate / 100 / 12;
  const months = loanYears * 12;

  const emi = useMemo(() => {
    if (!loanAmount || !months) return 0;
    if (monthlyRate === 0) return loanAmount / months;

    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  }, [loanAmount, monthlyRate, months]);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  // 📊 Chart Data
  const chartData = useMemo(() => {
    let balance = loanAmount;
    const data = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;

      data.push({
        month: i,
        balance: balance > 0 ? balance : 0,
      });
    }

    return data;
  }, [loanAmount, months, emi, monthlyRate]);

  const formatMoney = (num) => new Intl.NumberFormat("en-US").format(num);

  // PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Loan Report", 20, 20);
    doc.text(`Loan Amount: $${formatMoney(loanAmount)}`, 20, 40);
    doc.text(`Monthly: $${emi.toFixed(2)}`, 20, 50);
    doc.text(`Total Payment: $${totalPayment.toFixed(2)}`, 20, 60);
    doc.save("loan-report.pdf");
  };

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setShowPopup(false);
    setEmail("");
    downloadPDF();
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 mx-auto text-center">
          <h1 className="text-4xl font-bold">Smart Loan Calculator USA</h1>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-6">
            Calculate your monthly loan payments, interest, and total repayment
            using our free USA loan calculator. Perfect for personal loans, home
            loans, and auto loans.
          </p>

          <p className="text-gray-400 mt-2">
            Plan your loan with real-time financial insights
          </p>

          <p className="text-green-400 text-sm mt-2">
            ✔ Updated 2026 • ✔ Trusted by users • ✔ Accurate formula
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="bg-[#111827] p-6 rounded-2xl shadow-xl space-y-6">
            {/* Amount */}
            <div>
              <label className="text-sm text-gray-400">Loan Amount</label>
              <p className="text-xl font-bold mb-2">${formatMoney(amount)}</p>

              <div className="flex gap-3">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-1/2 p-3 rounded bg-[#0B0F19] border border-gray-700"
                />
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-1/2"
                />
              </div>
            </div>

            {/* Rate */}
            <div>
              <label className="text-sm text-gray-400">
                Interest Rate ({rate}%)
              </label>

              <div className="flex gap-3">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-1/2 p-3 rounded bg-[#0B0F19] border border-gray-700"
                />
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-1/2"
                />
              </div>
            </div>

            {/* Years */}
            <div>
              <label className="text-sm text-gray-400">
                Loan Term ({years} years)
              </label>

              <div className="flex gap-3">
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-1/2 p-3 rounded bg-[#0B0F19] border border-gray-700"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-1/2"
                />
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setShowPopup(true)}
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold"
            >
              Get Free Loan Report + Best Rates →
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="bg-[#111827] p-6 rounded-2xl">
              <p className="text-gray-400">Monthly Payment</p>
              <h2 className="text-4xl font-bold text-green-400">
                ${emi.toFixed(2)}
              </h2>
            </div>

            {/* Affiliate */}
            <div className="bg-green-600 p-4 rounded-xl text-white">
              <p className="text-sm mb-2">🔥 Recommended</p>
              <a
                href="#"
                className="block bg-white text-black py-2 rounded text-center font-semibold"
              >
                Check Best Loan Rates →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Total Payment</p>
                <p className="text-xl font-bold">${totalPayment.toFixed(0)}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Interest</p>
                <p className="text-xl font-bold text-red-400">
                  ${totalInterest.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="mt-10 bg-[#111827] p-6 rounded-2xl">
          <h2 className="mb-2 text-lg font-semibold">Balance Over Time</h2>

          <p className="text-gray-400 text-sm mb-4">
            This chart shows how your loan balance decreases over time.
          </p>

          <div className="w-full h-75">
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#333" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SEO */}
        <div className="mt-12 bg-white text-black p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Loan Calculator USA – Estimate Monthly Payments
          </h2>

          <p className="text-gray-600">
            Use this calculator to estimate monthly payments, interest, and loan
            cost in the United States.
          </p>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-white text-black p-6 rounded-xl w-full max-w-md">
              <h2 className="text-xl font-bold mb-2">
                Get Your Loan Report + Best Loan Offers
              </h2>

              <input
                className="w-full p-3 border rounded mb-2"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded"
              >
                Download PDF
              </button>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full mt-2 text-sm text-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
