"use client";
import { useMemo, useState } from "react";

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(2);

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

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Loan Calculator USA (2026)
          </h1>
          <p className="text-gray-600 mt-2">
            Calculate your monthly loan payments instantly with accurate results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TOOL */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Loan Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
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
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* RESULT */}
            <div className="mt-6 bg-blue-50 p-5 rounded-xl">
              <h3 className="text-lg font-semibold">Monthly Payment</h3>
              <p className="text-3xl font-bold text-blue-600">
                ${emi.toFixed(2)}
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Loan Summary</h2>

            <div className="space-y-4">
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

            {/* AFFILIATE SECTION */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Best Loan Providers in USA</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>SoFi Personal Loans</li>
                <li>LendingClub Loans</li>
                <li>Upstart AI Loans</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                (Add affiliate links here for monetization)
              </p>
            </div>
          </div>
        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            What is a Loan Calculator?
          </h2>
          <p className="text-gray-600 mb-4">
            A loan calculator helps you estimate monthly payments based on loan
            amount, interest rate, and duration. It is widely used in the USA
            for personal loans, mortgages, and car financing.
          </p>

          <h2 className="text-xl font-semibold mb-2">Why use this tool?</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Instant and accurate loan calculation</li>
            <li>Helps financial planning</li>
            <li>No signup required</li>
            <li>Free to use worldwide</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">FAQ</h2>
          <p className="text-gray-600">
            <strong>Is this calculator accurate?</strong> Yes, it uses a
            standard financial formula used in banking systems.
          </p>
        </div>
      </div>
    </div>
  );
}
