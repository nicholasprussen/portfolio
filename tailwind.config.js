/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xs': '256px',
      '2xs': '400px',
      'xs': '512px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1792px'
    },
    extend: {
      colors: {
        'dark': '#1B1B1E',
        'light': '#FBFAF8',
        'primary': '#B298DC',
        'primary-compliment': '#7f4ad5',
        'primary-dark': '#8776e1',
        'secondary': '#7E9181',
        'dark-accent': '#373F51',
        'extra': '#373F51',
      }
    },
  },
  plugins: [],
}