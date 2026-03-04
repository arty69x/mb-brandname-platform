/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {}
  },
  plugins: []
};
