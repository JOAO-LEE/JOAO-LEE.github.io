/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple-blue": "#251679",
        "darkest-purple-blue": "#21146f",
        "purple-blue": "#27187E",
        "dark-lilac": "#758BFD",
        lilac: "#AEB8FE",
        whitey: "#F1F2F6",
        orangeish: "#FF8600",
        "clear-orangeish": "#FB8500",
        grayish: "#e5e5e5",

        "pal-orange": {
          100: "#FF9E00",
          200: "#FF9100",
          300: "#FF8500",
          400: "#FF7900",
          500: "#FF6D00",
        },
        "pal-purple": {
          100: "#9D4EDD",
          200: "#7B2CBF",
          300: "#5A189A",
          400: "#47126b",
          500: "#3C096C",
          600: "#240046",
        },
        "pal-blue": {
          100: "#00509d",
          200: "#003566",
          300: "#001D3D",
          400: "#14213d",
          500: "#000814",
          600: "#003f88",
          700: "#00296b",
        },
        "pal-yellow": {
          50: "#ffc43d",
          100: "#FFC300",
          200: "#FFD60A",
          300: "#fca311",
        },
      },
    },
  },
  plugins: [],
};
