/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'equinox-sans': ['Equinox Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'gym': "url('./images/gym.png')"   
         }
    },
  },
  plugins: [],
}

