/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#192132",
        secondary: "#26334d",
        textOne: "#c2c9d6",
        blue: "#818cf8",
        gray: "#697a9b",
        grayOne: "#384766",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};

