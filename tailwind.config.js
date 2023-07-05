/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        defaultHeader: "#F6F8FA",
      },
      width: {
        inputWidth: "450px",
        formWidth: "700px",
      },
      height: {
        navHeight: "50vh",
        screenHeight: "100vh",
        formHeight: "700px",
      },
      fontSize: {
        defaultFontSize: "16px",
        middlFontSize: "24px",
        largeFontSize: "32px",
      },
      borderColor: {
        headerColor: "#D4DAE1",
      },
    },
  },
  plugins: [],
};
