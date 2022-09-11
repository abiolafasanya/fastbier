/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oldenburg: ['Oldenburg', 'cursive'],
      },
      colors: {
        shark: {
          50: '#f4f4f4',
          100: '#e9e9e9',
          200: '#c9c9c9',
          300: '#a8a8a8',
          400: '#666667',
          500: '#252526',
          600: '#212122',
          700: '#1c1c1d',
          800: '#161617',
          900: '#121213',
        },
        shadow: {
          50: '#f9f8f6',
          100: '#f3f1ed',
          200: '#e0dcd1',
          300: '#cec7b6',
          400: '#a99e7f',
          500: '#847448',
          600: '#776841',
          700: '#635736',
          800: '#4f462b',
          900: '#413923',
        },
        'spring-wood': {
          50: '#fffffe',
          100: '#fefefe',
          200: '#fdfdfc',
          300: '#fcfcfa',
          400: '#faf9f6',
          500: '#f8f7f2',
          600: '#dfdeda',
          700: '#bab9b6',
          800: '#959491',
          900: '#7a7977',
        },
      },
      backgroundImage: {
        hero1: "url('/public/landing.jpg')",
      },
    },
  },
  plugins: [],
};
