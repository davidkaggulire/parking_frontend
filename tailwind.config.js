/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightGreen: '#00cc66',
        black: '#000300',
        cyan: '#E1F0F0',
        brightCyan: '#7BFFF0'
      }
    },
  },
  plugins: [],
}
