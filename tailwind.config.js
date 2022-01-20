module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './public/**/*.{html,js}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1434A4',
        'brand-white': '#F8F5FA',
        'brand-black': '#181A18',
        'cyan-blue': '#A1CAF1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
