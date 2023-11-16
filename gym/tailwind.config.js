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
        'gym': "url('./images/gym.jpg')", 
        'gym1': "url('./images/gym1.png')",  
        'gym2': "url('./images/gym2.jpg')"    
      }
    },
  },
  plugins: [],
}

