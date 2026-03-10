/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#004261',
          DEFAULT: '#002D40',
          dark: '#001A25',
        },
        skyBlue: {
          light: '#F0F7FF',
          DEFAULT: '#E6F2FF',
          dark: '#D1E8FF',
        },
        gold: {
          DEFAULT: '#FFCB05',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
