import type { Config } from "tailwindcss";

const config: Config = {
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
        blue: '#170B2A',
        blue_twitter: '#00ACEE',
        blue_twitter_opacity: '#00ACEE80',
        transparent: '#FFFFFF10',
        pink: '#FF79C6',
        purple: '#BD93F9',
        red: '#FF2D19',
        yellow: '#F1FA8C',
        white: '#FFF'
      },
    },
  },
  plugins: [],
};
export default config;
