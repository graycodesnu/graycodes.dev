/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '360px',
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inconsolata: ["Inconsolata", "monospace"]
    },
    extend: {
      skew: {
        '50': '50deg'
      }
    },
    colors: {
      'primary': '#141414',
      'primary-alt': '#121212',
      'primary-dark': '#0e0e0e',
      'primary-light': '#1F1F1F',
      'secondary': '#cccccc',  
      'secondary-light': '#D6D6D6',

      // secondary was previously #D9D9D9 C6C4C7
      'silver': '#C6C4C7',
      'green': '#0B7A75',
      'white': '#FBF7F7',
      'red': '#A04048',
      'blue': '#2E294E',
      'blue-light': '#42375A',
      'gold': '#d89d46',
      'orange': '#B35919',


    }
  },
  plugins: [],
}