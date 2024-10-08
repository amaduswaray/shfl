import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm395: "395px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "shfl-bg": "#252525",
        "shfl-red": "#DB0001",
        "shfl-white": "#FFE8E9",
        "shfl-pink": "#FFC5C5",
        "shfl-gray": "#4A4A4A",
      },
    },
  },
  plugins: [],
};
export default config;
