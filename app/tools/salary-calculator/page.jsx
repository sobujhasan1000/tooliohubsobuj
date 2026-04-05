"use client";

import { useMemo, useState } from "react";

export default function SalaryCalculatorPro() {
  const [salary, setSalary] = useState(80000);
  const [tax, setTax] = useState(20);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const yearlyTax = (salary * tax) / 100;
    const net = salary - yearlyTax;
    const monthly = net / 12;

    return { yearlyTax, net, monthly };
  }, [salary, tax]);

  const reset = () => {
    setSalary(80000);
    setTax(20);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(
      `Net Salary: $${result.net.toFixed(2)} | Monthly: $${result.monthly.toFixed(2)}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const progress = Math.min((result.net / salary) * 100, 100);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Salary After Tax Calculator (Pro)
          </h1>
          <p className="text-gray-600 mt-2">
            Advanced income calculator with breakdown & insights
          </p>
        </div>

        {/* AD SPACE TOP */}
        <div className="bg-gray-200 text-center p-4 rounded-lg mb-6">
          Google AdSense Banner
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TOOL */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Income Details</h2>

            <div className="space-y-4">
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Annual Salary"
              />

              <input
                type="number"
                value={tax}
                onChange={(e) => setTax(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Tax %"
              />
            </div>

            {/* RESULT BOX */}
            <div className="mt-6 bg-blue-50 p-5 rounded-xl">
              <h3 className="font-semibold">Net Salary</h3>

              <p className="text-3xl font-bold text-blue-600">
                ${result.net.toFixed(2)}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Monthly: ${result.monthly.toFixed(2)}
              </p>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-blue-500 h-2 rounded-full"
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
                className="w-full bg-blue-600 text-white p-2 rounded-lg"
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
                <p className="text-sm text-gray-500">Yearly Tax</p>
                <p className="text-2xl font-bold text-red-500">
                  ${result.yearlyTax.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Net Annual Income</p>
                <p className="text-2xl font-bold text-green-600">
                  ${result.net.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Monthly Income</p>
                <p className="text-2xl font-bold">
                  ${result.monthly.toFixed(2)}
                </p>
              </div>
            </div>

            {/* AFFILIATE */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Recommended Finance Tools</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>TurboTax – Tax Filing USA</li>
                <li>QuickBooks – Business Accounting</li>
                <li>Robinhood – Investing App</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            About Salary After Tax Calculator
          </h2>
          <p className="text-gray-600 mb-3">
            This tool helps you calculate your real take-home salary after tax
            deductions in the USA.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Instant tax calculation</li>
            <li>Monthly income breakdown</li>
            <li>Financial planning tool</li>
            <li>USA high CPC keyword optimized</li>
          </ul>
        </div>

        {/* AD SPACE BOTTOM */}
        <div className="bg-gray-200 text-center p-4 rounded-lg mt-6">
          AdSense Footer Banner
        </div>
      </div>
    </div>
  );
}
