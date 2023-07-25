/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#363A3D",
        },
        nobleBlack: {
          0: "#FFFFFF",
          100: "#E8E9E9",
          300: "#9B9C9E",
          400: "#686B6E",
          600: "#1A1D21",
          700: "#131619",
        },
        overlay: {
          DEFAULT: "#060708",
        },
      },
    },
  },
  plugins: [],
};
