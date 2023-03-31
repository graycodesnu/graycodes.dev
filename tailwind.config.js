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
      'md': '768px',
      'lg': '1024px',
      // Specific to hero page responsiveness
      'hero-lg': '1230px',
      'xl': '1280px',
      '1xl': '1500',
      '2xl-alt': '1520',
      '2xl': '1536px',
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inconsolata: ["Inconsolata", "monospace"]
    },
    extend: {
      skew: {
        '50': '50deg'
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
        'pulse-fast': 'pulse 1s linear infinite',

      },
      width: {
        '128': '28rem',
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
      'green-light': '#0E958F',
      'white': '#E0E0E0',
      'white-light': '#EBEBEB',
      'red': '#A04048',
      'blue': '#2E294E',
      'blue-light': '#42375A',
      'blue-readable': '#0F69FA',
      'gold': '#d89d46',
      'gold-alt': 'rgba(168, 115, 36, 0.9)',
      'orange': '#B35919',
      'purple': '#5F4C99',
      'purple-readable': '#8876BC'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}