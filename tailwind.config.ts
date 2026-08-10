import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rating: {
          aa: "#0A7A3E",
          a: "#2E8B57",
          bbb: "#D4A017",
          bb: "#C75B12",
          b: "#A31F1F",
        },
        signal: {
          positive: "#1A9B8E",
          neutral: "#6B7280",
          negative: "#C45C5C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
