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
          400: "#3C096C",
          500: "#240046",
        },
      },
    },
  },
  plugins: [],
};
