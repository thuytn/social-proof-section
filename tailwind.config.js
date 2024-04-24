/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'darkMagenta': 'hsl(300, 43%, 22%)',
        'softPink': 'hsl(333, 80%, 67%)',
        'darkGrayishMagenta': 'hsl(303, 10%, 53%)',
        'lightGrayishMagenta': 'hsl(300, 24%, 96%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'pattern-desktop': "url('../images/bg-pattern-top-desktop.svg'),url('../images/bg-pattern-bottom-desktop.svg')",
        'pattern-mobile': "url('../images/bg-pattern-top-mobile.svg'),url('../images/bg-pattern-bottom-mobile.svg')",
      },
      backgroundPosition: {
        'position-mobile': "left top, left bottom",
        'position-desktop': "left top, right bottom"
      },
      fontSize: {
        'title': 'clamp(38px, 4vw, 54px)',
      },
    },
  },
  plugins: [],
}

