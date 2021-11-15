const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
