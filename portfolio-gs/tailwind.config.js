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
      'green': '#0B7A75',
      'white': '#FBF7F7'
    }
  },
  plugins: [],
}