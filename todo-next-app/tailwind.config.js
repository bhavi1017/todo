const windmill = require('@windmill/react-ui/config')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
    },
    extend: {
      colors: {
        gray: {
          // cr
          // 50: "#F9FAFB",
          // 100: "#F3F4F6",
          // 200: "#E5E7EB",
          // 300: "#D1D5DB",
          // 400: "#9CA3AF",
          // 500: "#6B7280",
          // 600: "#4B5563",
          // 700: "#374151",
          // 800: "#1F2937",
          // 900: "#111827",

          // cs
          // 900: "#181818",
          // 800: "#1F1F1F",
          // 700: "#5B5B5B",
          // 600: "#727272",
          // 500: "#9B9B9B",
          // 400: "#BCBCBC",
          // 300: "#DDDDDD",
          // 200: "#EDEDED",
          // 100: "#F4F4F4",
          // 50: "#F9F9F9",

          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          650: "#1B1B1B",
          700: "#393939",
          750: "#2A2A2A",
          800: "#1F1F1F",
          850: "#232323",
          900: "#171717",
        },
        purple: {
          600: "#586FEA",
          700: "#4F63D2",
          300: "#4658BB",
        },
        pink: {
          750: "#2c1a22",
        },
      }
    },
    
  },
  variants: {},
  plugins: [],
}
