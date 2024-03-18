/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "420px",
        xl: "1220px",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "serif"],
        montserrat: ["montserrat", "serif"],
      },
      fontSize: {
        xxs: "10px",
        "4xl": "40px",
      },
      height: {
        12: "50px",
      },
      colors: {
        gray: "#949ea0",
        "gray-100": "#f5f6f7",
        "gray-200": "#dfe5ea",
        "gray-900": "#334144",
        "red-100": "#ECBCB3",
        "red-500": "#EAA79E",
        "red-600": "#DF9186",
        "black-100": "rgba(0,0,0,0.0001)",
      },
      backgroundImage: ({ theme }) => ({
        hero: "url('/src/assets/images/hero-background.png')",
      }),
    },
  },
  plugins: [],
};
