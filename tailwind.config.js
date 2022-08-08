const media = require("./config/media");
const colors = require("./config/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  debugProp: false,
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: ["Oxygen", "Arial", "sans-serif"],
        },
        purple: {
          500: colors.purple600,
        },
        green: {
          500: colors.green500,
        },
        orange: {
          500: colors.orange500,
        },
        red: {
          500: colors.red500,
        },
        yellow: {
          500: colors.yellow500,
        },
        grey: {
          500: colors.grey500,
          800: colors.grey800,
        },
        teal: {
          500: colors.teal500,
        },
        blue: {
          300: colors.blue300,
          500: colors.blue500,
          700: colors.blue700,
        },
      },
    },
  },
  screens: {
    sm: media.sm,
    md: media.md,
    lg: media.lg,
    xl: media.xl,
    "2xl": media["2xl"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
