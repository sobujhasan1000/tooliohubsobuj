"use client";
import { useMemo, useState } from "react";

export default function CreditCardInterestCalculator() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const monthlyRate = apr / 100 / 12;

  const result = useMemo(() => {
    let currentBalance = Number(balance);
    let month = 0;
    let totalInterest = 0;

    if (!monthlyPayment || monthlyPayment <= 0) return null;

    while (currentBalance > 0 && month < 600) {
      const interest = currentBalance * monthlyRate;
      const principal = monthlyPayment - interest;

      if (principal <= 0) break;

      currentBalance -= principal;
      totalInterest += interest;
      month++;
    }

    return {
      months: month,
      totalInterest: totalInterest,
      totalPayment: Number(balance) + totalInterest,
      isValid: currentBalance <= 0,
    };
  }, [balance, monthlyRate, monthlyPayment]);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Credit Card Interest Calculator (USA 2026)
          </h1>
          <p className="text-gray-600 mt-2">
            Estimate how long it takes to pay off your credit card and total
            interest cost
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TOOL */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Your Credit Details</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Credit Card Balance ($)
                </label>
                <input
                  type="number"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium">APR (%)</label>
                <input
                  type="number"
                  value={apr}
                  onChange={(e) => setApr(e.target.value)}
                  className="w-full p-3 border rounded-lg"
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
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* RESULT */}
            <div className="mt-6 bg-purple-50 p-5 rounded-xl">
              <h3 className="text-lg font-semibold">Payoff Result</h3>

              {result ? (
                <div className="mt-2">
                  <p className="text-3xl font-bold text-purple-600">
                    {result.months} months
                  </p>
                  <p className="text-sm text-gray-600">
                    Total Interest: ${result.totalInterest.toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="text-red-500 text-sm mt-2">
                  Increase monthly payment to reduce balance
                </p>
              )}
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Breakdown Summary</h2>

            {result && result.isValid ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Payoff Time</p>
                  <p className="text-2xl font-bold">{result.months} Months</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Interest Paid</p>
                  <p className="text-2xl font-bold text-red-500">
                    ${result.totalInterest.toFixed(2)}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Payment</p>
                  <p className="text-2xl font-bold">
                    ${result.totalPayment.toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                Enter valid data to see full breakdown
              </p>
            )}

            {/* AFFILIATE */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">Debt Relief Options (USA)</h3>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>SoFi Debt Consolidation</li>
                <li>National Debt Relief</li>
                <li>Upstart Personal Loans</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                Add affiliate links for high CPC income
              </p>
            </div>
          </div>
        </div>

        {/* SEO SECTION */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-3">
            How Credit Card Interest Works
          </h2>
          <p className="text-gray-600 mb-4">
            Credit card interest is charged when you carry a balance. In the
            USA, APR rates can be very high, making payoff planning important.
          </p>

          <h2 className="text-xl font-semibold mb-2">Why use this tool?</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Understand debt payoff time</li>
            <li>Reduce interest cost</li>
            <li>Plan monthly budget</li>
            <li>Compare payment strategies</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">FAQ</h2>
          <p className="text-gray-600">
            <strong>Is credit card interest avoidable?</strong> Yes, if you pay
            full balance monthly.
          </p>
        </div>
      </div>
    </div>
  );
}
