/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|green|indigo|orange|cyan)-(200)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
