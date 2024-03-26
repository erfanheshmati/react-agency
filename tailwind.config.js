/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#f5f7fa",
        neutralDGrey: "#4d4d4d",
        brandPrimary: "#4caf4f",
        neutralGrey: "#717171",
        gray900: "#18191f",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
