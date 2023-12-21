/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'Very-dark-blue': 'hsl(233, 47%, 7%)',
        'Dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'Soft-violet': 'hsl(277, 64%, 61%)',
        'White-h-s': 'hsl(0, 0%, 100%)',
        'Slightly-transparent-white-p': 'hsla(0, 0%, 100%, 0.75)',
        'Slightly-transparent-white-h': 'hsla(0, 0%, 100%, 0.6)',
      },

      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Lexend Deca': ['Lexend Deca', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

