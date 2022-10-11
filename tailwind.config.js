module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['motion-safe'],
      translate: ['motion-reduce'],
      opacity: ['disabled'],
      textColor: ['visited'],
      backgroundColor: ['checked'],
      borderWidth: ['first'],
      borderWidth: ['last'],
      backgroundColor: ['odd'],
      backgroundColor: ['even'],
      textOpacity: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-question-mark'),
  ],
}
