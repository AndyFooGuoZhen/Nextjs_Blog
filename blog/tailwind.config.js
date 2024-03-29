/** @type {import('tailwindcss').Config} */
export default({
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
      },
     
    },
  },
  plugins: [require("@tailwindcss/typography"),require('tailwindcss-neumorphism')],
});
