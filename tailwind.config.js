/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#4f5e69",
      white: "#ffffff",
      grey: "#afafaf",
      lightGrey: "#f9f9f9",
      lightBlue: "#3363cc",
      darkBlue: "#345f89",
      red: "#ce6a6b",
    },
  },
  plugins: [],
};
