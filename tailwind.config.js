/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Nunito", "sans-serif"],
      mono: ["Nunito", "sans-serif"],
      display: ["Nunito", "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
