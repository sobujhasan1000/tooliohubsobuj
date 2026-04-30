"use client";

import { useState, useMemo } from "react";
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

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [savings, setSavings] = useState(5000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(7);

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const result = useMemo(() => {
    let balance = savings;
    let chart = [];

    for (let age = currentAge; age <= retirementAge; age++) {
      balance += monthly * 12;
      balance *= 1 + rate / 100;
      chart.push({ age, value: Math.round(balance) });
    }

    const invested = savings + monthly * 12 * (retirementAge - currentAge);

    return {
      final: balance,
      invested,
      profit: balance - invested,
      chart,
    };
  }, [currentAge, retirementAge, savings, monthly, rate]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Retirement Report", 20, 20);
    doc.text(`Final Wealth: $${result.final.toFixed(2)}`, 20, 40);
    doc.text(`Total Invested: $${result.invested.toFixed(2)}`, 20, 50);

    doc.save("retirement-report.pdf");
  };

  const handleEmailSubmit = () => {
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
    <div className=" bg-linear-0-to-br from-slate-100 to-white px-4 py-4">
      {/* SEO TOP TEXT */}
      <p className="text-gray-400 text-center mb-2">
        Retirement Calculator USA – Future Wealth Planner 2026
      </p>

      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Retirement Calculator USA
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
          Plan your financial future with this free retirement calculator.
          Estimate your savings growth, monthly investments, and future wealth
          using compound interest.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
        <div className="bg-cyan-50 p-6 rounded-2xl shadow space-y-4">
          <Input label="Current Age" value={currentAge} set={setCurrentAge} />
          <Input
            label="Retirement Age"
            value={retirementAge}
            set={setRetirementAge}
          />
          <Input label="Savings ($)" value={savings} set={setSavings} />
          <Input label="Monthly ($)" value={monthly} set={setMonthly} />
          <Input label="Return (%)" value={rate} set={setRate} />

          <button
            onClick={() => setShowPopup(true)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Download PDF Report
          </button>
        </div>

        <div className="lg:col-span-2 bg-blue-100 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Growth Projection</h3>

          <div className="h-80">
            <ResponsiveContainer>
              <LineChart data={result.chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RESULT */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4 mt-6">
        <Card title="Final Wealth" value={result.final} />
        <Card title="Invested" value={result.invested} />
        <Card title="Profit" value={result.profit} highlight />
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <input
              className="w-full p-3 border rounded mb-2"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && <p className="text-red-500">{error}</p>}

            <button
              onClick={handleEmailSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ label, value, set }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => set(+e.target.value)}
      placeholder={label}
      className="w-full p-2 border rounded"
    />
  );
}

function Card({ title, value, highlight }) {
  return (
    <div
      className={`p-4 rounded-xl ${highlight ? "bg-green-100" : "bg-white"}`}
    >
      <p>{title}</p>
      <h3 className="font-bold">${value.toFixed(0)}</h3>
    </div>
  );
}
