/** @type {import('tailwindcss').Config} */
const { hover } = require("@testing-library/user-event/dist/hover");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  plugins: [require("@tailwindcss/forms")],
};
