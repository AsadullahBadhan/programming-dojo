/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '4rem'
    },
    colors: {
      'blue': '#1c3879'
    }
  },
  plugins: [],
}
