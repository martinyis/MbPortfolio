/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oswald"],
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "420px" },
      xs: { max: "320px" },
      550: {
        max: "550px",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#64FFDA",
      secondary: "#A8B2D1",
      third: "#233554",
      text: {
        primary: "#FFFFFF",
        secondary: "#A8B2D1",
        title: "#D9D9D9",
        // title: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
