import type { Config } from "tailwindcss";

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
    },
    screens: {
      sm: '425px',  // Pequenos dispositivos
      md: '768px',  // Tablets
      lg: '1024px', // Laptops
      xl: '1280px', // Monitores maiores
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config;
