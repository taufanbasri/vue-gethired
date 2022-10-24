/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        dark: "#111111",
        lightDark: "#888888",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
