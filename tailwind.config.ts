import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px", // Matches your @media 575px
      md: "768px", // Matches your @media 767px
      lg: "1025px", // Matches your @media 1024px
      xl: "1200px", // Matches your @media 1199px
      "2xl": "1367px", // Matches your @media 1366px
      "3xl": "1600px", // Matches your @media 1599px
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
