const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      grey: '#c1c1c1',
      violet: '#201132',
      dark: '#4a4a4a',
    },
    fontFamily: {
      Tahoma: ['Tahoma', 'serif'],
      Furore: ['Furore', 'arial'],
    },
    boxShadow: {
      'white-sm': '3px 3px 3px 3px #ffffff',
      'white-lg': '3px 3px 6px 3px #ffffff',
    },
    extend: {},
  },
  plugins: [],
};
