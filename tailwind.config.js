/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b263b",
        light: "#e0e1dd",
        primary: "#778da9",
        secondary: "#415a77"
      }
    },
    screens:{
      "2xl": {max: "1535px"},
      //=> @media(max-width: 1535px)
      xl: {max: "1279px"},
      //=> @media (max-width: 1279px)
      lg: {max: "1023px"},
      //=> @media (max-width: 1023px)
      md: {max: "767px"},
      //=> @media (max-width: 767px)
      sm: {max: "639px"},
      //=> @media (max-width: 639px)
      xs: {max: "479px"}
      //=> @media (max-width: 479px)
    }
  },
  plugins: [],

}

