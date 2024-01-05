/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '375',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
  },
  plugins: [],
}