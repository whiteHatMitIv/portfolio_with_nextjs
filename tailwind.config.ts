import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        color_bali: "var(--color-bali)",
        border_color: "var(--border-color)",
        contact_tile_color: "var(--contact-tile-color)",
        side_bar_color: "var(--side-bar-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
