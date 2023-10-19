/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        defaultHeader: "#F6F8FA",
        blogColor: "#FBFDFC",
      },
      width: {
        inputWidth: "450px",
        formWidth: "700px",
        imageWidth: "20%",
      },
      height: {
        navHeight: "50vh",
        screenHeight: "100vh",
        formHeight: "700px",
        imageHeight: "80%",
      },
      fontSize: {
        defaultFontSize: "20px",
        middlFontSize: "24px",
        largeFontSize: "32px",
        titleFontSize: "48px",
      },
      borderColor: {
        headerColor: "#D4DAE1",
      },
    },
  },
  plugins: [],
});
