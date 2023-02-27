/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {
      skew: {
        '50': '50deg'
      }
    },
    colors: {
      'primary': '#121212',
      'primary-alt': '#0E0E0E',
      'primary-dark': '#000001',
      'secondary': '#D9D9D9',
      'silver': '#C6C4C7',
      'green': '#0B7A75',
      'white': '#FBF7F7',
      'red': '#CC5A71',
      'blue': '#2E294E',
      'gold': '#C89B7B',
      'orange': '#CA7B76'
    }
  },
  plugins: [],
}