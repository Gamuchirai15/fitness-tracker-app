/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#f9f2f7', // lightest pink
          100: '#f4d1e0', // light pink
          200: '#f9c0e2', // medium pink
          300: '#ec4899', // main pink
          400: '#db2777', // dark pink
          500: '#9b3d67', // darker pink
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
}


