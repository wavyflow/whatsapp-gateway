const withMT = require("@material-tailwind/react/utils/withMT");

const boxShadow = {
  sm: "0 0 rgb(0, 0 / 0, 0)",
  DEFAULT: "0 0 rgb(0, 0 / 0, 0)",
  md: "0 0 rgb(0, 0 / 0, 0)",
  lg: "0 0 rgb(0, 0 / 0, 0)",
  xl: "0 0 rgb(0, 0 / 0, 0)",
  "2xl": "0 0 rgb(0, 0 / 0, 0)",
  inner: "0 0 rgb(0, 0 / 0, 0)",
  none: "0 0 rgb(0, 0 / 0, 0)",
};

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow,
  },
  plugins: [],
})
