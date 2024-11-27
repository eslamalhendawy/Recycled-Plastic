/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        siam: "#6E7051",
        blackColor: "#212529",
        lightGrey: "#979a9b",
        bgColor: "#f1f1ef",
        lightGreen: "#40cd37"
      },
    },
  },
  plugins: [],
};
