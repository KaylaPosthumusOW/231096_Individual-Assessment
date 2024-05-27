/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display"],
        body: ["DM Sans"],
      },
      colors: {
        "red-brown": {
          BASE: "#97461B",
          "50%": "#CAA28C"
        },
        "dark-brown": {
          BASE: "#4A3A28",
          "50%": "#6E6153"
        },
        "beige-bg": {
          BASE: "#F0EDE6"
        }
      }
    },
  },
  plugins: [],
}

