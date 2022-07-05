/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgTopHead: "rgb(19, 25, 33)",
        bgBotHead : "rgb(35, 47, 62)",
        bgSearch : "rgb(254, 189, 105)",

      }
    },
  },
  plugins: [],
}
