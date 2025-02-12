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
        side_bar_color: "var(--side-bar-color)",
        backTitle: "var(--bg)",
        titleSpanColor: "var(--titleSpanColor)",
        backgroundCard: "var(--backgroundCard)",
        cyan: {
          400: '#22d3ee',
          300: '#67E8F9'
        },
        indigo: {
          700: '#4338CA',
          600: '#4F46E5',
          500: '#6366F1',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui'],
      }
    },
  },
  plugins: [],
} satisfies Config;
