/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text': '#0F0A0A',
        'bg-white': '#F7F7F7',
        'bg-lines': '#D9D9D9',
        'primary':'#3A3636',
        'secundary': '#CFE8E8',
        'accent': '#4C4C8A'

      }
    },
  },
  plugins: [],
}