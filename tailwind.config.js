// module.exports = {

//     daisyui: {
//       themes: true,
//     },
// };  
module.exports = {
  plugins: [require("daisyui")],

  daisyui: {
    themes: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
};
