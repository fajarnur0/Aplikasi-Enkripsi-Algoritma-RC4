/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e293b",
        primary: "#289DD2",
      },
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
    },
  },
  plugins: [],
};
