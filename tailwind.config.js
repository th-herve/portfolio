/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#49c5b6',
        white: '#ffffff',
        black: '#000',
        dark: '#0B0c10',
        gray: '#1F2833',
        lightGray: '#C5C6C7',
      },
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
};
