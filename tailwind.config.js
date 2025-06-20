/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '394px', // Just above iPhone 16 width (393px)
      },
      maxWidth: {
        'mobile': '393px', // iPhone 16 max width
      }
    },
  },
  plugins: [],
}