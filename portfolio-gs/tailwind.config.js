/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {},
    colors: {
      'black': '#000001',
      'light-black': '#121212',
      'light-black-variant': '#1F1B24',
      'light-grey': '#D9D9D9',
      'green': '#0B7A75',
      'white': '#FBF7F7',
      'red': '#BB0A21',
      'lavender': '#6B6570'
    }
  },
  plugins: [],
}