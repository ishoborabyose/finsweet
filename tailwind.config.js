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
      backgroundImage: {
        "label-gradient":
          "radial-gradient(483.9% 2719.65% at -49.5% -250%,#d798e1 17.55%,#9bffa5 27.56%,#aed3ff 49.89%,#c9d4ef 56.53%,#cacffa 65.69%)",
      },
    },
  },
  plugins: [],
};
