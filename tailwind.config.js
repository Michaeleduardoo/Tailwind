/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-div': '#CAECF7',
        "blue-face": "#1877F2",
        "green-face": "#4CC60D",
      },

      spacing: {
        '580': '580px',
        '380': '380px',
        '371': '371px',
        "0": "0px",
        "300": "300px",
        "100": "100%",
        "15": "15%"
      },

      padding: {
        '90': '90px',
        '65': '65px'
      },

      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
      }


    },


  },

  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})

  }


}