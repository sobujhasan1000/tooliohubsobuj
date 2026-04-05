"use client";
import { useMemo, useState } from "react";

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6);
  const [years, setYears] = useState(30);

  const loanAmount = Number(homePrice) - Number(downPayment);
  const monthlyRate = Number(interestRate) / 100 / 12;
  const months = Number(years) * 12;

  const monthlyPayment = useMemo(() => {
    if (!loanAmount || !months) return 0;

    if (monthlyRate === 0) return loanAmount / months;

    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  }, [loanAmount, monthlyRate, months]);

  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Mortgage Calculator USA (2026)
          </h1>
          <p className="text-gray-600 mt-2">
            Estimate your home loan payments instantly with accurate mortgage
            calculations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TOOL */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Home Loan Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Home Price ($)
                </label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Down Payment ($)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Loan Term (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {/* RESULT */}
            <div className="mt-6 bg-emerald-50 p-5 rounded-xl">
              <h3 className="text-lg font-semibold">
                Monthly Mortgage Payment
              </h3>
              <p className="text-3xl font-bold text-emerald-600">
                ${monthlyPayment.toFixed(2)}
              </p>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Mortgage Summary</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Loan Amount</p>
                <p className="text-2xl font-bold text-gray-800">
                  ${loanAmount}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Payment</p>
                <p className="text-2xl font-bold text-gray-800">
                  ${totalPayment.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Interest</p>
                <p className="text-2xl font-bold text-red-500">
                  ${totalInterest.toFixed(2)}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Loan Duration</p>
                <p className="text-2xl font-bold text-gray-800">
                  {months} Months
                </p>
              </div>
            </div>

            {/* AFFILIATE */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">
                Best Mortgage Providers in USA
              </h3>
              <ul className="text-sm text-emerald-600 space-y-1">
                <li>Rocket Mortgage</li>
                <li>SoFi Home Loans</li>
                <li>Better.com Mortgage</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                (Add affiliate links for high conversion earnings)
              </p>
            </div>
          </div>
        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            What is a Mortgage Calculator?
          </h2>
          <p className="text-gray-600 mb-4">
            A mortgage calculator helps you estimate monthly home loan payments
            based on property price, down payment, interest rate, and loan term.
            It is widely used in the USA before buying a home.
          </p>

          <h2 className="text-xl font-semibold mb-2">Why use this tool?</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Plan your home purchase budget</li>
            <li>Compare loan options easily</li>
            <li>Understand interest cost</li>
            <li>Free and instant calculation</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">FAQ</h2>
          <p className="text-gray-600">
            <strong>Is this accurate?</strong> Yes, it uses standard mortgage
            formulas used in banking systems.
          </p>
        </div>
      </div>
    </div>
  );
}
