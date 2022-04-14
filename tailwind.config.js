const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      crimson: '#f72585',
      grey: 'rgb(204, 204, 204)',
      red: '#dc143c',
      blue: '#4cefd8',
      violet: '#8f5fe2',
      'light-violet': '#8f5fe2',
    },
    fontFamily: {
      comfortaa: 'Comfortaa',
      sans: [
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Liberation Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      monospace: [
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    boxShadow: {
      red: '0px 0px 20px 0px #f72585',
      blue: '0px 0px 20px 0px #4cefd8',
      violet: '0px 0px 40px 10px #673ab7',
    },
    extend: {},
  },
  plugins: [],
};
