/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors:{
        'bgColor': "#0c0c0c",
        "textColor0": "#ffffff",
        "textColor1": "#272727",
        "lineColor": "#535353"
      }
    },
  },
  plugins: [],
};
