module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2669F5",
        secondary: "#45C581",
        sell: "#F84239",
        dark_grey: "#071022",
        grey_70: "#09162E",
        grey_50: "#3A4861",
        grey_40: "#4B5564",
        grey_20: "#7C8497",
        grey_30: "#5A6172",
        blue_grey: "#0E1C37",
        amber: "#F3A508",
        golden: "#C18306",
      },
      width: {
        "12/25": "48%",
        "23/100": "23%",
        "3/10": "30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
