/** @type {import('tailwindcss').Config} */
const { defaultTheme  } = require('tailwindcss/defaultTheme');
import { platformSelect } from "nativewind/theme";

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      pdf: "816px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: {
        dark: "#571926",
        light: "#7F2437",
      },
      secondary: "#232323",
      gray: "#313638",
      white: "#FFF",
    },
    extend: {
      fontFamily: {
          sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
          Norwester: ["Norwester", "sans-serif"],
          Montserrat: ["Montserrat", "sans-serif"],
          Lato: ["Lato", "sans-serif"],
          system: platformSelect({
            ios: "Lato",
            android: "sans-serif",
            default: "ui-sans-serif",
          }),
      },
      screens: {
        print: { raw: "print" },
        lg: { raw: "print, (min-width: 1024px)" },
      },
    },
    orphans: [1, 2, 3],
    widows: [1, 2, 3],
    boxDecorationBreak: ["slice", "clone"],
    breakBefore: [
      "auto",
      "avoid",
      "avoid-page",
      "page",
      "always",
      "left",
      "right",
      "recto",
      "verso",
      "avoid-column",
      "column",
      "avoid-region",
      "region",
    ],
    breakAfter: [
      "auto",
      "avoid",
      "avoid-page",
      "page",
      "always",
      "left",
      "right",
      "recto",
      "verso",
      "avoid-column",
      "column",
      "avoid-region",
      "region",
    ],
    breakInside: [
      "auto",
      "avoid",
      "avoid-page",
      "avoid-column",
      "avoid-region",
    ],
  },
  variants: {
    // all the following default to ['responsive']
    margin: ['responsive', 'hover', 'first'],
    orphans: ["responsive"],
    widows: ["responsive"],
    boxDecorationBreak: ["responsive"],
    breakBefore: ["responsive"],
    breakAfter: ["responsive"],
    breakInside: ["responsive"],
  },
  plugins: ["tailwindcss-break"],

};
