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
        'main-backgroud': '#131619',
        'primary': '#B6F09C',
        'white': '#FFFFFF',
        'va': '#423419',
        'dark-green': '#0E5A3A',
        'dark-brown': '#422721',
        'dark-gray': '#0D0F10',
      },
    },
  },
  plugins: [],
};

export default config;