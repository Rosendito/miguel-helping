/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontserratRegular: ["Montserrat-Regular", "Roboto", "arial", "sans", "sans-serif"],
        MontserratMedium: ["Montserrat-Medium", "Roboto", "arial", "sans", "sans-serif"],
        MontserratSemiBold: ["Montserrat-SemiBold", "Roboto", "arial", "sans", "sans-serif"],
        MontserratBold: ["Montserrat-Bold", "Roboto", "arial", "sans", "sans-serif"],
        MontserratBlack: ["Montserrat-Black", "Roboto", "arial", "sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

