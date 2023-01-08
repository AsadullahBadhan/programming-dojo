/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#1c3879',
      white: '#ffffff',
      'gray': {
        100: '#f3f3f3',
        200: '#545454'
      }
    }
  },
  plugins: [],
}
