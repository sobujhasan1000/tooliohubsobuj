"use client";

import { useMemo, useState } from "react";

export default function InvestmentCalculatorPro() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const amount = principal * Math.pow(1 + rate / 100, years);
    const profit = amount - principal;
    const monthlyGrowth = amount / (years * 12);

    return { amount, profit, monthlyGrowth };
  }, [principal, rate, years]);

  const reset = () => {
    setPrincipal(10000);
    setRate(8);
    setYears(10);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(
      `Future Value: $${result.amount.toFixed(2)} | Profit: $${result.profit.toFixed(2)}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const progress = Math.min((result.amount / 100000) * 100, 100);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Investment Compound Calculator (Pro)
          </h1>
          <p className="text-gray-600 mt-2">
            Grow your wealth with compound interest tracking
          </p>
        </div>

        {/* AD TOP */}
        <div className="bg-gray-200 text-center p-4 rounded-lg mb-6">
          Google AdSense Banner
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TOOL */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Investment Details</h2>

            <div className="space-y-4">
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Initial Investment"
              />

              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Annual Return %"
              />

              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Years"
              />
            </div>

            {/* RESULT */}
            <div className="mt-6 bg-green-50 p-5 rounded-xl">
              <h3 className="font-semibold">Future Value</h3>

              <p className="text-3xl font-bold text-green-600">
                ${result.amount.toFixed(2)}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Monthly Growth: ${result.monthlyGrowth.toFixed(2)}
              </p>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={reset}
                className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
              >
                Reset
              </button>

              <button
                onClick={copyResult}
                className="w-full bg-green-600 text-white p-2 rounded-lg"
              >
                {copied ? "Copied!" : "Copy Result"}
              </button>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Breakdown</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Profit</p>
                <p className="text-2xl font-bold text-green-600">
                  ${result.profit.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Final Value</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${result.amount.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Yearly Average Growth</p>
                <p className="text-2xl font-bold">
                  ${(result.amount / years).toFixed(2)}
                </p>
              </div>
            </div>

            {/* AFFILIATE */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Top Investment Platforms</h3>
              <ul className="text-sm text-green-600 space-y-1">
                <li>TradingView – Market Analysis</li>
                <li>eToro – Social Trading</li>
                <li>Fidelity – Long Term Investing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            About Investment Compound Calculator
          </h2>

          <p className="text-gray-600 mb-3">
            This tool helps you calculate compound growth and estimate future
            wealth based on return rate and time.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Compound interest calculation</li>
            <li>Wealth growth tracking</li>
            <li>Long term financial planning</li>
            <li>High CPC finance keyword optimized</li>
          </ul>
        </div>

        {/* AD BOTTOM */}
        <div className="bg-gray-200 text-center p-4 rounded-lg mt-6">
          AdSense Footer Banner
        </div>
      </div>
    </div>
  );
}
