/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepTeal: '#165241',
        skyBlue: '#5499b5',
        slateBlue: '#4e818e',
        cornflowerBlue: '#9fc8f2',
        softSilver: '#cedade',
        ffGray: '#424542',
        ffBlue: '#04009d',
        ffDarkBlue: '#06004d',
        ffLightBlue: '#12dfe2',
      },
    },
  },
  plugins: [],
};
