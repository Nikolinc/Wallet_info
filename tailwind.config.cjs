/** @type {import('tailwindcss').Config} */
const { hover } = require("@testing-library/user-event/dist/hover");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBackgroundImage:
          "url('https://tmychain.org/images/landing/bg-pattern-1.svg') no-repeat top right",
      },
      colors: {
        white: "#FFFFFF",
        black: "#14161D",
        ElectricIndigo: "#6D00F3",
        red: "#FF0052",
        grey: "#B2B2B2",
        MarengoGrey: "#474C5F",
        LightLavender: "#FBFBFB",
        purple: "#301b55",
        LightBlue: "#0056b3",
        Tiffany: "#0ABAB5",
        SilverChalice: "#B2B2B2",
        AzureishWhite: "#D8E7FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
