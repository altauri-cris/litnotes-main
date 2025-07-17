/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    variants: {
      extend: {
        opacity: ["disabled"],
      },
    },
    plugins: [require("@tailwindcss/typography")],
  };