module.exports = {
  darkMode: "class", // ✅ MUST HAVE
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
