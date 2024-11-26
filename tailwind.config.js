/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'neue-machina': ['Neue Machina', 'sans-serif'],
      },
      colors: {
        'primary': '#FFD700',
        'secondary': '#FFFFFF',
        'tertiary': '#0D0D0D',
        'accent': '#4F4F4F',
        'background': '#0D0D0D',
      },
    },
  },
  plugins: [],
}