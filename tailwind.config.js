/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        dark: "#111111",
        lightDark: "#888888",
        sweetRed: "#ED4C5C",
        "very-high": "#ED4C5C",
        high: "#F8A541",
        medium: "#00A790",
        low: "#428BC1",
        "very-low": "#8942C1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
