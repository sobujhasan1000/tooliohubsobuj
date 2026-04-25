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

export default function InvestmentDashboard() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(10);
  const [inflation, setInflation] = useState(2.5);
  const [tax, setTax] = useState(15);

  const data = useMemo(() => {
    let balance = principal;
    let chart = [];

    for (let i = 1; i <= years; i++) {
      balance = balance * (1 + rate / 100) + monthly * 12;
      chart.push({ year: `Year ${i}`, value: Math.round(balance) });
    }

    const invested = principal + monthly * 12 * years;
    const profit = balance - invested;
    const afterTax = profit * (1 - tax / 100);
    const final = invested + afterTax;
    const real = final / Math.pow(1 + inflation / 100, years);

    return { chart, invested, profit, final, real };
  }, [principal, monthly, rate, years, inflation, tax]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <p className="text-gray-400 text-center mb-4">
            Investment Calculator USA – ROI, Compound Growth & Wealth Planner
            2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Investment calculator usa 2026
          </h1>
          <p className="text-gray-500 text-sm">
            Plan, track and grow your investments
          </p>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Plan your long-term wealth using this free investment calculator
            USA. Estimate compound growth, ROI, inflation impact, and future
            investment value instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT INPUT PANEL */}
          <div className="lg:col-span-1 bg-white p-5 rounded-2xl shadow">
            <h2 className="font-semibold mb-4">Inputs</h2>

            <div className="space-y-4">
              <Input
                label="Initial Investment ($)"
                value={principal}
                setValue={setPrincipal}
                icon="💰"
              />
              <Input
                label="Monthly ($)"
                value={monthly}
                setValue={setMonthly}
                icon="📅"
              />
              <Input
                label="Return (%)"
                value={rate}
                setValue={setRate}
                icon="📈"
              />
              <Input
                label="Years"
                value={years}
                setValue={setYears}
                icon="⏳"
              />
              <Input
                label="Inflation (%)"
                value={inflation}
                setValue={setInflation}
                icon="📉"
              />
              <Input label="Tax (%)" value={tax} setValue={setTax} icon="🏛️" />

              {/* PRESETS */}
              <div className="flex gap-2 text-xs">
                <button
                  onClick={() => setRate(5)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  Safe
                </button>
                <button
                  onClick={() => setRate(10)}
                  className="px-2 py-1 bg-green-100 rounded text-green-700"
                >
                  S&P 500
                </button>
                <button
                  onClick={() => setRate(12)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  Aggressive
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-2 space-y-6">
            {/* KPI CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card title="Invested" value={data.invested} />
              <Card title="Profit" value={data.profit} green />
              <Card title="Final Value" value={data.final} />
              <Card title="Real Value" value={data.real} />
            </div>

            {/* CHART */}
            <div className="bg-white p-5 rounded-2xl shadow h-80">
              <h3 className="mb-3 font-semibold">Growth Over Time</h3>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.chart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#16a34a"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* INSIGHT */}
            <div className="bg-white p-5 rounded-2xl shadow text-sm text-gray-600">
              <p>
                💡 If you invest <b>${monthly}</b>/month for <b>{years}</b>{" "}
                years, you could reach <b>${data.final.toFixed(0)}</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Input({ label, value, setValue, icon }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="w-full pl-10 pt-5 pb-2 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none peer"
        placeholder=" "
      />
      <label className="absolute left-10 top-2 text-xs text-gray-500">
        {label}
      </label>
    </div>
  );
}

function Card({ title, value, green }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-xs text-gray-500">{title}</p>
      <p className={`text-xl font-bold ${green ? "text-green-600" : ""}`}>
        ${value.toFixed(0)}
      </p>
    </div>
  );
}
