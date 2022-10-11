/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
        "roboto-bold": "roboto-bold",
      },

      colors: {
        "bg-rgba-4": "rgba(255, 255, 255, 0.69)",
        "black-bold": "#1D2130",
        "bg-rgba": "rgba(255, 255, 255, 0.59)",
        "bg-rgba-pink": "rgba(215, 152, 225, 0.15)",
        "bg-rgba-3": "rgba(97, 153, 237, 0.26)",
        "light-btn": "#E0E4FC",
        "light-pink": "#F9F0FB",
      },
    },
  },
  plugins: [],
};
