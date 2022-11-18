/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      lightGrey: "#e5e5e5",
      blue: "#3f66d9",
      red: "#FF0000",
    },
  },
  plugins: [],
};
