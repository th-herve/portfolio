/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark_cyan: '#49c5b6', // done
        dark_text: '#ffffff', //done
        dark_bg1: '#000', //done
        dark_bg2: '#0B0c10', // done
        dark_gray: '#1F2833', // done
        dark_lightGray: '#C5C6C7',

        cyan: '#286983',
        text: '#000000', // text
        bg1: '#ffffff', // bg1
        bg2: '#f0f2f5', // bg2
        gray: '#d1d9e0',
        lightGray: '#f7f8fa',
      },
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
};
