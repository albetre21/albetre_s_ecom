module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0d0d0d", "900_01": "#000000", "900_87": "#00000087", "900_99": "#0d0d0d99" },
        gray: {
          400: "#c4c4c4",
          500: "#b48c8c",
          600: "#896565",
          700: "#5e5e5e",
          "500_02": "#979797",
          "400_01": "#d8c3c3",
          "500_01": "#909090",
        },
        blue_gray: { 50: "#eff2f6", 100: "#d9d9d9" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {},
      fontFamily: { publicsans: "Public Sans", inter: "Inter" },
      opacity: { 0.5: 0.5, 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
