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
      'primary': '#121212',
      'primary-alt': '#0E0E0E',
      'primary-dark': '#000001',
      'primary-light': '#141414',
      'secondary': '#CCCCCC',  
      // secondary was previously #D9D9D9
      'silver': '#C6C4C7',
      'green': '#0B7A75',
      'white': '#FBF7F7',
      'red': '#CC5A71',
      'red-readable': '#C5445E',
      'blue': '#2E294E',
      'blue-readable': '#473F78',
      'gold': '#C89B7B',
      'gold-readable': '#9E6942',
      'orange': '#CA7B76',
      'orange-readable': '#BA564F'

    }
  },
  plugins: [],
}