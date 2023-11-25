/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "equinox-sans": ["Equinox Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        gym: "url('./images/gym.jpg')",
        ourstory: "url('./images/ourstory.jpg')",
        gym2: "url('./images/gym2.jpg')",
      },
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
};
