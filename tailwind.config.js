/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter as a separate font
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],

      },
      colors: {
        'custom-purple': '#78206E',
      },
    },
  },
  plugins: [],
}