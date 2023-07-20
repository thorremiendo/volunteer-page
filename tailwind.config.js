/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        120: "120px",
        158: "158px",
        35: "35px",
      },
      width: {
        220: "220px",
      },
      height: {
        336: "336px",
      },
      colors: {
        "primary-blue": "#232F3E",
        "secondary-blue": "#37475A",
        "primary-orange": "#FF9E20",
        "secondary-orange": "#FEBD69",
        secondary: "#FEBD69",
      },
      animation: {
        "spin-slow": "1s linear infinite spin",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
