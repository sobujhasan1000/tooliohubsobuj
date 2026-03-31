"use client";
import { useState } from "react";
import AdSpace from "@/components/AdSpace";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Age Calculator ⏳
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <label className="block mb-4 font-semibold text-gray-700">
          Select Your Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={calculateAge}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-6 text-center text-gray-800">
            <p className="text-xl font-semibold">
              Your Age:
            </p>
            <p className="mt-2 text-2xl font-bold text-blue-600">
              {age.years} Years, {age.months} Months, {age.days} Days
            </p>
          </div>
        )}
        <AdSpace/>
      </div>
    </div>
  );
}