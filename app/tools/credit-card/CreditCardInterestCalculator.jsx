"use client";
import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import jsPDF from "jspdf";

export default function CreditCardInterestCalculator() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const monthlyRate = apr / 100 / 12;

  const result = useMemo(() => {
    let currentBalance = Number(balance);
    let month = 0;
    let totalInterest = 0;
    let chart = [];

    if (!monthlyPayment || monthlyPayment <= 0) return null;

    while (currentBalance > 0 && month < 600) {
      const interest = currentBalance * monthlyRate;
      const principal = monthlyPayment - interest;

      if (principal <= 0) break;

      currentBalance -= principal;
      totalInterest += interest;
      month++;

      chart.push({
        month,
        balance: currentBalance > 0 ? currentBalance : 0,
      });
    }

    return {
      months: month,
      totalInterest,
      totalPayment: Number(balance) + totalInterest,
      chart,
      isValid: currentBalance <= 0,
    };
  }, [balance, monthlyRate, monthlyPayment]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Credit Card Report", 20, 20);
    doc.text(`Balance: $${balance}`, 20, 40);
    doc.text(`APR: ${apr}%`, 20, 50);
    doc.text(`Monthly Payment: $${monthlyPayment}`, 20, 60);

    if (result) {
      doc.text(`Months: ${result.months}`, 20, 80);
      doc.text(`Interest: $${result.totalInterest.toFixed(2)}`, 20, 90);
      doc.text(`Total Payment: $${result.totalPayment.toFixed(2)}`, 20, 100);
    }

    doc.save("credit-card-report.pdf");
  };

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    setShowPopup(false);
    setEmail("");
    setError("");
    downloadPDF();
  };

  return (
    <div className="bg-linear-30-to-br from-purple-50 to-gray-100 px-4 py-10">
      {/* SEO TOP */}
      <p className="text-gray-400 text-center mb-2">
        Credit Card Payoff Calculator USA – APR & Debt Planner 2026
      </p>

      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Credit Card Interest Calculator USA
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Calculate your credit card payoff time, interest cost, and monthly
            repayment plan. This tool helps USA users reduce debt faster and
            save money on high APR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* INPUT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Balance ($)</label>
                <input
                  type="number"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  className="w-full p-3 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">APR (%)</label>
                <input
                  type="number"
                  value={apr}
                  onChange={(e) => setApr(e.target.value)}
                  className="w-full p-3 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Monthly Payment ($)
                </label>
                <input
                  type="number"
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(e.target.value)}
                  className="w-full p-3 border rounded-lg mt-1"
                />
              </div>
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl"
            >
              Download Report
            </button>

            <div className="mt-6 bg-purple-50 p-4 rounded-xl">
              {result ? (
                <>
                  <p className="text-xl font-bold text-purple-600">
                    {result.months} months
                  </p>
                  <p>Total Interest: ${result.totalInterest.toFixed(2)}</p>
                </>
              ) : (
                <p className="text-red-500">
                  Payment too low – increase amount
                </p>
              )}
            </div>
          </div>

          {/* CHART */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="mb-3 font-semibold">Balance Over Time</h3>

            <div className="h-64">
              <ResponsiveContainer>
                <LineChart data={result?.chart || []}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="balance" stroke="#7c3aed" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {result && result.isValid && (
              <p className="mt-3 text-sm">
                Total Payment: ${result.totalPayment.toFixed(2)}
              </p>
            )}

            <p className="text-xs text-gray-500 mt-3">
              This calculator uses standard APR formulas used in the USA banking
              system. Results are estimates only.
            </p>
          </div>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h2 className="font-bold mb-2">Enter Email</h2>

              <input
                className="w-full p-3 border rounded mb-2"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white py-2 rounded"
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
