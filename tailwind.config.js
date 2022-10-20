/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffe',
      },
      fontFamily: {
        sans: ['quicksand', 'sans-serif'],
        display: ['quicksand', 'sans-serif'],
        body: ['quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
