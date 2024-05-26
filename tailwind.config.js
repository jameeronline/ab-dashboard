/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1140px) { ... }
    },
    extend: {
      backgroundImage: {
        "mesh-pattern": "url('src/assets/bg.svg')",
      },
      backgroundSize: {
        50: "50%",
        60: "60%",
      },
      backgroundPosition: {
        "bottom-4": "center bottom",
      },
      colors: {
        primary: "#00663D",
        secondary: "#2B2E33",
        accent: "#565B66",
      },
      fontFamily: {
        sans: ['"Droid Arabic Kufi", "Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
