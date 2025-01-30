/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "headers":"url('/img/backgound1.jpg')"
      }
    },
  },
  plugins: [],
}

