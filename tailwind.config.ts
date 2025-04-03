/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
// import svgToDataUri from "mini-svg-data-uri";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        inter: ["Inter", "sans-serif"],
        sigmar: ["Sigmar", "cursive"],
        sans: ["Geist", "sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
