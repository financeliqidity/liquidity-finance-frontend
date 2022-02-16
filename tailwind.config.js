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
        grey_10: "#B7BECB",
        blue_grey: "#0E1C37",
        amber: "#F3A508",
        golden: "#C18306",
        yellow_: "#FFD95C",
        danger: "#F84239",
        icons_color: "#B7BECB",
      },
      width: {
        "12/25": "48%",
        "49/100": "49%",
        "23/100": "23%",
        "7/25": "28%",
        "3/10": "30%",
        "7/20": "35%",
        "19/50": "38%",
        "9/50": "45%",
        "7/10": "70%",
      },
      minWidth: {
        "140-px": "140px",
        51.5: "12.875rem",
        48: "12rem",
        24: "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
