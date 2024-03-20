/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screen:{
    'sm': {'max': '639px'},

    'md': {'max': '768px'},

    'lg': {'max': '1023px'},
    
    'xl': {'max': '1279px'},

    '2xl': {'max': '1535px'}
  },
  plugins: [],

}

