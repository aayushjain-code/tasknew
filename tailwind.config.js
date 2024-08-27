/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'arctic-blue': "#253BFF",
        'white':'#FFFFFF',
        'gray': '#1D2939',
        'blue-gray': "#101828",
        'red': '#FF2323'
      }
    },
  },
  plugins: [],
}

