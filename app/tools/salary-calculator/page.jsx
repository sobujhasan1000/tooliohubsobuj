"use client";

import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function SalaryCalculatorUSA() {
  const [salary, setSalary] = useState(80000);
  const [state, setState] = useState("CA");
  const [status, setStatus] = useState("single");

  // ✅ ALL 50 STATES (approx tax rates)
  const stateTaxRates = {
    AL: 0.05,
    AK: 0,
    AZ: 0.025,
    AR: 0.055,
    CA: 0.08,
    CO: 0.045,
    CT: 0.05,
    DE: 0.055,
    FL: 0,
    GA: 0.05,
    HI: 0.08,
    ID: 0.058,
    IL: 0.05,
    IN: 0.032,
    IA: 0.06,
    KS: 0.057,
    KY: 0.05,
    LA: 0.045,
    ME: 0.07,
    MD: 0.05,
    MA: 0.05,
    MI: 0.0425,
    MN: 0.07,
    MS: 0.05,
    MO: 0.054,
    MT: 0.065,
    NE: 0.055,
    NV: 0,
    NH: 0,
    NJ: 0.06,
    NM: 0.049,
    NY: 0.06,
    NC: 0.0475,
    ND: 0.029,
    OH: 0.04,
    OK: 0.05,
    OR: 0.08,
    PA: 0.03,
    RI: 0.055,
    SC: 0.07,
    SD: 0,
    TN: 0,
    TX: 0,
    UT: 0.0485,
    VT: 0.06,
    VA: 0.055,
    WA: 0,
    WV: 0.065,
    WI: 0.053,
    WY: 0,
  };

  const stateNames = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  // ✅ FEDERAL TAX (simplified progressive)
  const calculateFederalTax = (income) => {
    if (status === "married") income *= 0.85;

    if (income <= 11000) return income * 0.1;
    if (income <= 44725) return 1100 + (income - 11000) * 0.12;
    if (income <= 95375) return 5147 + (income - 44725) * 0.22;
    if (income <= 182100) return 16290 + (income - 95375) * 0.24;

    return 37104 + (income - 182100) * 0.32;
  };

  const result = useMemo(() => {
    const federalTax = calculateFederalTax(salary);
    const stateTax = salary * stateTaxRates[state];

    const socialSecurity = salary * 0.062;
    const medicare = salary * 0.0145;

    const totalTax = federalTax + stateTax + socialSecurity + medicare;

    const net = salary - totalTax;
    const monthly = net / 12;

    return {
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      totalTax,
      net,
      monthly,
    };
  }, [salary, state, status]);

  const data = [
    { name: "Net Income", value: result.net },
    { name: "Taxes", value: result.totalTax },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          USA Salary After Tax Calculator
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <label className="font-medium">
              Salary: ${salary.toLocaleString()}
            </label>

            <input
              type="range"
              min="10000"
              max="300000"
              step="1000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full mt-2"
            />

            {/* STATE */}
            <label className="block mt-4 font-medium">Select State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            >
              {Object.entries(stateNames).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>

            {/* STATUS */}
            <label className="block mt-4 font-medium">Filing Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>

            {/* RESULT */}
            <div className="mt-6 bg-green-50 p-4 rounded-xl">
              <p className="text-lg">Take Home Pay</p>
              <p className="text-3xl font-bold text-green-600">
                ${result.net.toFixed(2)}
              </p>
              <p className="text-sm">Monthly: ${result.monthly.toFixed(2)}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold mb-4">Tax Breakdown</h2>

            <ul className="space-y-2 text-sm">
              <li>Federal: ${result.federalTax.toFixed(2)}</li>
              <li>State: ${result.stateTax.toFixed(2)}</li>
              <li>Social Security: ${result.socialSecurity.toFixed(2)}</li>
              <li>Medicare: ${result.medicare.toFixed(2)}</li>
              <li className="font-bold">
                Total: ${result.totalTax.toFixed(2)}
              </li>
            </ul>

            {/* CHART */}
            <div className="h-64 mt-6">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={data} dataKey="value" outerRadius={90}>
                    {data.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              This is an estimate based on simplified US tax rules. Actual taxes
              depend on deductions, credits, and state laws.
            </p>
          </div>
        </div>

        {/* SEO */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">How This Calculator Works</h2>
          <p className="text-gray-600 text-sm">
            This tool estimates your take-home salary using federal tax
            brackets, state taxes, and FICA contributions (Social Security &
            Medicare).
          </p>
        </div>
      </div>
    </div>
  );
}
