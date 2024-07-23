/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-blue": "#27187E",
        "dark-lilac": "#758BFD",
        lilac: "#AEB8FE",
        whitey: "#F1F2F6",
        orangeish: "#FF8600",
        "clear-orangeish": "#FB8500",
      },
    },
  },
  plugins: [],
};
