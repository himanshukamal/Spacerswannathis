/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // bounce: "bounce 6s infinite",
        bounceless: "bounceless 6s infinite",
        rotateanim: "rotateanim 6s infinite",
      },
      keyframes: {
        bounceless: {
          "0%, 100%": {
            transform: "translateY()",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
        },
        rotateanim: {
          "0%, 100%": {
            transform: "translateY()",
          },
          "50%": {
            transform: "rotate(20deg)",
          },
        },
      },
      // keyframes: {
      // rotateanim: {
      //   "0%, 100%": {
      //     transform: "translateY()",
      //   },
      //   "50%": {
      //     transform: "skewY(20deg)",
      //   },
      // },
      // },
    },
  },
  plugins: [],
};
