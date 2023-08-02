const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto_Slab: ["Roboto Slab"],
        Roboto_Serif: ["Roboto Serif"],
        Lato: ["Lato"],
        Inter: ["Inter"],
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animated")],
};
