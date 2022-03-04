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
          sans: ["Roboto", "Arial", "sans-serif"],
        },
        purple: {
          600: colors.purple600,
          700: colors.purple700,
        },
        green: {
          200: colors.lime,
          700: colors.green700,
        },
        grey: {
          100: colors.grey100,
          200: colors.grey200,
          500: colors.grey500,
          700: colors.grey700,
        },
        tan: {
          100: colors.tan100,
          200: colors.tan200,
          300: colors.tan300,
        },
        blue: {
          200: colors.blue200,
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
