/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        textColor: "#868E9A",
        buttonColor: "#0C1322",
        accent: "#5798F6",
        btnColor:"#1f2937",

        //dark
        primaryBG: "#0F1629",
        darkBgBtn: "#0284c7"
      },
    },
  },
  plugins: [],
};
