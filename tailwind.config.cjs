/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#1c3879',
      white: '#ffffff',
      lightGray: '#f3f3f3',
      darkGray: '#545454',
      golden: '#bd912c'
    }
  },
  plugins: [],
}
