/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1B1E',
        'light': '#FBFAF8',
        'primary': '#B298DC',
        'primary-compliment': '#7f4ad5',
        'secondary': '#7E9181',
        'dark-accent': '#373F51',
        'extra': '#373F51',
      }
    },
  },
  plugins: [],
}