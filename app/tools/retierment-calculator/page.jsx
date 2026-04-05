"use client";

import { useMemo, useState } from "react";

export default function RetirementCalculatorPro() {
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [rate, setRate] = useState(7);

  const result = useMemo(() => {
    const years = retirementAge - currentAge;
    let total = currentSavings;

    for (let i = 0; i < years * 12; i++) {
      total += monthlyContribution;
      total *= 1 + rate / 100 / 12;
    }

    const invested = currentSavings + monthlyContribution * years * 12;
    const profit = total - invested;

    return {
      total,
      profit,
      years,
    };
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, rate]);

  const reset = () => {
    setCurrentAge(25);
    setRetirementAge(60);
    setCurrentSavings(5000);
    setMonthlyContribution(200);
    setRate(7);
  };

  const progress = Math.min((result.total / 2000000) * 100, 100);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Retirement Calculator (Pro)
          </h1>
          <p className="text-gray-600 mt-2">
            Plan your financial freedom with long-term growth
          </p>
        </div>

        {/* AD TOP */}
        <div className="bg-gray-200 text-center p-4 rounded-lg mb-6">
          Google AdSense Banner (Top)
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* INPUTS */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Retirement Plan Inputs
            </h2>

            <div className="space-y-4">
              <p className="text-sm text-gray-500">current age</p>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Current Age"
              />

              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Retirement Age"
              />

              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Current Savings ($)"
              />

              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Monthly Contribution"
              />

              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
                placeholder="Annual Return %"
              />
            </div>

            {/* RESULT BOX */}
            <div className="mt-6 bg-blue-50 p-5 rounded-xl">
              <h3 className="font-semibold">Estimated Retirement Savings</h3>

              <p className="text-3xl font-bold text-blue-600">
                ${result.total.toFixed(2)}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Investment Duration: {result.years} years
              </p>

              {/* PROGRESS BAR */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={reset}
              className="w-full mt-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
            >
              Reset
            </button>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Financial Breakdown</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Invested</p>
                <p className="text-2xl font-bold text-gray-800">
                  $
                  {(
                    currentSavings +
                    monthlyContribution * result.years * 12
                  ).toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Profit</p>
                <p className="text-2xl font-bold text-green-600">
                  ${result.profit.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Final Wealth</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${result.total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* AFFILIATE SECTION */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Recommended Platforms</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>Fidelity Retirement Accounts</li>
                <li>Vanguard Index Funds</li>
                <li>Robinhood Investing App</li>
              </ul>
            </div>

            {/* ADS PLACEHOLDER */}
            <div className="mt-6 bg-gray-200 text-center p-4 rounded-lg">
              Sidebar AdSense
            </div>
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            About Retirement Calculator
          </h2>

          <p className="text-gray-600 mb-3">
            Plan your retirement savings with compound growth simulation and
            long-term financial forecasting.
          </p>

          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Retirement planning calculator</li>
            <li>Monthly investment simulation</li>
            <li>Compound interest forecasting</li>
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
