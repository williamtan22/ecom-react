/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  mode: "JIT",
  theme: {
    extend: {
      colors: {
        "pink-cc": "#FB2E86",
        "off-navy-blue": "#3f509e",
        "navy-blue": "#151875",
        "purple-cc": "#7e33e0",
        "off-purple": "#9f63b5",
        "red-cc": "#fb2448",
        "blue-cc": "#2f1ac4",
        "sky-blue": "#f2f5ff",
        "pantone-purple": "#e0d3f5",
        "off-blue": "#151875"
      },
      fontFamily: {
        JosefinSans: ["joseinf sans", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
