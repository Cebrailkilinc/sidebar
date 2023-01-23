/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        blue: "#2E89E4",
        lightBlue: "#B1C7F2",
        darkBlue: "#0071E3",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#999999",
        lightGray: "#F5F5F7",
        lightPurple: "#9E0FE1",
        purple: "#AE2C5E",
        purpleLight: "#c47be6",
        red: "#FF5656",
        darkBg:"#1E1E1E",
        darkButtonBg:"#1F2328",
        darkGray:"#787878"
      },
    },  
  },
  plugins: [],
}
